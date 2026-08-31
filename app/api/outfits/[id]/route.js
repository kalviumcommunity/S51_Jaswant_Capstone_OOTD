import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Outfit from '@/lib/models/Outfit';
import { INITIAL_OUTFITS } from '@/lib/mockOutfits';

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const conn = await connectToDatabase();
    if (conn) {
      const outfit = await Outfit.findById(id);
      if (outfit) return NextResponse.json({ success: true, data: outfit });
    }
  } catch (err) {
    console.error("API GET ID Error:", err);
  }

  const found = INITIAL_OUTFITS.find(o => o.id === id);
  if (found) return NextResponse.json({ success: true, data: found });

  return NextResponse.json({ success: false, message: 'Outfit pin not found' }, { status: 404 });
}

export async function POST(request, { params }) {
  const { id } = params;
  const body = await request.json(); // { action: 'like' | 'save' }

  return NextResponse.json({ 
    success: true, 
    message: `Action ${body.action || 'toggle'} performed on outfit ${id}` 
  });
}
