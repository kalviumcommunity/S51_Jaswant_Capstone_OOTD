import mongoose from 'mongoose';

const OutfitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  occasion: { 
    type: String, 
    enum: ['Birthday', 'Office', 'Interview', 'Casual', 'Formal', 'Traditional', 'Streetwear', 'College', 'Date Night'],
    required: true 
  },
  colorPalette: { type: String, default: 'Neutral' },
  season: { type: String, default: 'All Season' },
  items: {
    top: { type: String, required: true },
    bottom: { type: String, required: true },
    footwear: { type: String, required: true },
    accessories: { type: String, default: 'Minimalist Watch / Sunglasses' }
  },
  fitGuide: {
    recommendedBodyTypes: [{ type: String }],
    recommendedSkinTones: [{ type: String }],
    stylingTip: { type: String }
  },
  author: {
    name: { type: String, default: 'OOTD Stylist' },
    avatar: { type: String, default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
    username: { type: String, default: '@ootd_official' }
  },
  likesCount: { type: Number, default: 12 },
  savesCount: { type: Number, default: 5 },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Outfit || mongoose.model('Outfit', OutfitSchema);
