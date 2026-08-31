import './globals.css';
import { AppProvider } from '@/components/Context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OutfitDetailModal from '@/components/OutfitDetailModal';
import CreateOutfitModal from '@/components/CreateOutfitModal';

export const metadata = {
  title: 'OOTD - Pinterest Style Outfit Recommendations & Wardrobe',
  description: "Personal fashion advisor and Pinterest-style outfit recommendation platform exclusively tailored for men's style, occasions, body types, and skin tones.",
  keywords: ['OOTD', 'Outfit of the day', 'Men fashion', 'Pinterest fashion', 'Style quiz', 'Wardrobe planner'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <OutfitDetailModal />
          <CreateOutfitModal />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
