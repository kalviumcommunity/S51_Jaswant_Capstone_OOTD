import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Outfit from '@/lib/models/Outfit';
import { INITIAL_OUTFITS } from '@/lib/mockOutfits';
import { fetchUnsplashFashionPins } from '@/lib/unsplash';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const occasion = searchParams.get('occasion');
  const query = searchParams.get('q');

  // Build target search term for Unsplash API
  let targetQuery = "mens fashion ootd";
  if (query && query.trim() !== '') {
    targetQuery = query;
  } else if (occasion && occasion !== 'All') {
    targetQuery = occasion;
  }

  // 1. Live Unsplash API Fetch (Returns 30 fresh fashion pins matching the search/filter)
  try {
    const unsplashPins = await fetchUnsplashFashionPins(targetQuery, 30);
    if (unsplashPins && unsplashPins.length > 0) {
      return NextResponse.json({ 
        success: true, 
        data: unsplashPins, 
        source: 'unsplash_live_api',
        count: unsplashPins.length 
      });
    }
  } catch (err) {
    console.error("Unsplash fetch error:", err);
  }

  // 2. Database Fallback (if MongoDB has custom user pins)
  try {
    const conn = await connectToDatabase();
    if (conn) {
      let filter = {};
      if (occasion && occasion !== 'All') {
        filter.occasion = occasion;
      }
      if (query) {
        filter.$or = [
          { title: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
          { colorPalette: { $regex: query, $options: 'i' } }
        ];
      }

      const dbOutfits = await Outfit.find(filter).sort({ createdAt: -1 });
      if (dbOutfits && dbOutfits.length > 0) {
        return NextResponse.json({ success: true, data: dbOutfits, source: 'database' });
      }
    }
  } catch (err) {
    console.error("API DB Error:", err);
  }

  // 3. Fallback Dataset
  let filtered = INITIAL_OUTFITS;
  if (occasion && occasion !== 'All') {
    filtered = filtered.filter(o => o.occasion.toLowerCase() === occasion.toLowerCase());
  }
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(o => 
      o.title.toLowerCase().includes(q) || 
      o.description.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({ success: true, data: filtered, source: 'mock_fallback' });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const conn = await connectToDatabase();

    if (conn) {
      const newOutfit = await Outfit.create(body);
      return NextResponse.json({ success: true, data: newOutfit }, { status: 201 });
    }

    const mockCreated = {
      id: `custom-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString()
    };
    return NextResponse.json({ success: true, data: mockCreated }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
