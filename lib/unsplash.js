/**
 * Enhanced Unsplash API Service for OOTD Outfit Pins
 * Dynamically fetches 30+ high-res, portrait fashion photography items from Unsplash
 * tailored specifically to occasion filters and search keywords.
 */

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

export async function fetchUnsplashFashionPins(query = "mens fashion ootd", count = 30) {
  if (!UNSPLASH_ACCESS_KEY) {
    console.log("Unsplash Access Key not set.");
    return null;
  }

  // Refine query for high quality fashion results
  const searchQuery = buildUnsplashQuery(query);

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=${count}&orientation=portrait`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
        },
        next: { revalidate: 1800 } // Cache for 30 mins
      }
    );

    if (!response.ok) {
      console.error(`Unsplash API HTTP error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
      return [];
    }

    return data.results.map((photo, index) => {
      const altText = photo.alt_description || photo.description || `Style Look #${index + 1}`;
      const title = photo.alt_description 
        ? capitalizeWords(photo.alt_description) 
        : `${capitalizeWords(query.replace('mens', '').trim() || 'Fashion')} Ensemble #${index + 1}`;
      
      const occasionName = inferOccasion(query, altText);
      const pieceBreakdown = generateOutfitBreakdown(altText, occasionName);

      return {
        id: `unsplash-${photo.id}`,
        title,
        description: photo.description || photo.alt_description || `Curated ${occasionName} outfit recommendation from Unsplash Style.`,
        imageUrl: photo.urls.regular || photo.urls.small,
        occasion: occasionName,
        colorPalette: photo.color ? `Palette ${photo.color}` : 'Sophisticated Tones',
        season: inferSeason(altText),
        items: pieceBreakdown,
        fitGuide: {
          recommendedBodyTypes: inferBodyTypes(altText),
          recommendedSkinTones: ["All Skin Tones", "Wheatish", "Dusky"],
          stylingTip: photo.user?.bio 
            ? `Style note by ${photo.user.name}: ${photo.user.bio.slice(0, 100)}...`
            : `Pair this ${pieceBreakdown.top} with matching footwear for maximum visual impact.`
        },
        author: {
          name: photo.user.name || "Fashion Curator",
          avatar: photo.user.profile_image?.small || photo.user.profile_image?.medium || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
          username: `@${photo.user.username || 'stylist'}`
        },
        likesCount: photo.likes || Math.floor(Math.random() * 200) + 40,
        savesCount: Math.floor((photo.likes || 60) * 0.75) + 12,
        tags: [occasionName.replace(/\s+/g, ''), "UnsplashStyle", "OOTD", "MensFashion"],
        createdAt: photo.created_at || new Date().toISOString()
      };
    });
  } catch (error) {
    console.error("Failed to fetch from Unsplash API:", error.message);
    return null;
  }
}

function buildUnsplashQuery(query) {
  const q = query.toLowerCase().trim();
  
  if (q === 'office') return 'mens office corporate suit blazer fashion';
  if (q === 'interview') return 'mens formal interview suit dress shirt';
  if (q === 'birthday') return 'mens party streetwear stylish outfit';
  if (q === 'traditional') return 'mens traditional indian ethnic kurta sherwani';
  if (q === 'college') return 'mens college campus streetwear jacket sneakers';
  if (q === 'date night') return 'mens date night evening blazer style';
  if (q === 'casual') return 'mens casual linen shirt denim outfit';
  if (q === 'all') return 'mens fashion ootd style';

  if (!q.includes('mens') && !q.includes('men')) {
    return `mens fashion ${q}`;
  }
  return q;
}

function capitalizeWords(str) {
  if (!str) return "OOTD Look";
  return str.slice(0, 60).replace(/\b\w/g, l => l.toUpperCase());
}

function inferOccasion(query, text) {
  const t = (query + " " + text).toLowerCase();
  if (t.includes("office") || t.includes("corporate") || t.includes("business")) return "Office";
  if (t.includes("interview") || t.includes("suit") || t.includes("formal")) return "Interview";
  if (t.includes("traditional") || t.includes("ethnic") || t.includes("kurta") || t.includes("sherwani")) return "Traditional";
  if (t.includes("party") || t.includes("birthday") || t.includes("nightclub")) return "Birthday";
  if (t.includes("college") || t.includes("campus") || t.includes("hoodie")) return "College";
  if (t.includes("date") || t.includes("evening") || t.includes("dinner")) return "Date Night";
  return "Casual";
}

function inferSeason(text) {
  const t = text.toLowerCase();
  if (t.includes("coat") || t.includes("jacket") || t.includes("winter") || t.includes("sweater")) return "Autumn / Winter";
  if (t.includes("linen") || t.includes("summer") || t.includes("shorts") || t.includes("sunglasses")) return "Summer";
  if (t.includes("ethnic") || t.includes("festive") || t.includes("kurta")) return "Festive";
  return "All Season";
}

function generateOutfitBreakdown(text, occasion) {
  const t = text.toLowerCase();
  
  let top = "Designer Slim-fit Shirt";
  let bottom = "Tailored Ankle Chinos";
  let footwear = "Leather Loafers / Derby Shoes";
  let accessories = "Minimalist Chronograph Watch";

  if (t.includes("suit") || t.includes("blazer") || occasion === "Office" || occasion === "Interview") {
    top = "Tailored Single-Breasted Blazer & Crisp Dress Shirt";
    bottom = "Matching Tapered Suit Trousers";
    footwear = "Polished Italian Leather Oxfords";
    accessories = "Silk Pocket Square & Leather Belt";
  } else if (t.includes("kurta") || t.includes("sherwani") || occasion === "Traditional") {
    top = "Silk Embroidered Nehru Jacket & Kurta";
    bottom = "Slim Churidar / Pyjama Trousers";
    footwear = "Handcrafted Leather Mojris";
    accessories = "Silk Dupatta & Royal Brooch";
  } else if (t.includes("jacket") || t.includes("hoodie") || occasion === "College") {
    top = "Suede Bomber / Denim Jacket over Crewneck Tee";
    bottom = "Washed Slim Fit Indigo Denim";
    footwear = "Retro High-Top Sneakers";
    accessories = "Canvas Backpack & Beanie";
  } else if (t.includes("linen") || occasion === "Casual") {
    top = "Breathable Mandarin Collar Linen Shirt";
    bottom = "Light Beige / Khaki Cotton Chinos";
    footwear = "Off-white Leather Espadrilles / Loafers";
    accessories = "Polarized Aviator Sunglasses";
  }

  return { top, bottom, footwear, accessories };
}

function inferBodyTypes(text) {
  const t = text.toLowerCase();
  if (t.includes("suit") || t.includes("slim")) return ["Athletic", "Lean", "Average"];
  if (t.includes("oversized") || t.includes("streetwear")) return ["All Body Types", "Muscular"];
  return ["Athletic", "Average", "Lean"];
}
