import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { PromoBanner } from '../components/home/PromoBanner';
import { HeroSection } from '../components/home/HeroSection';
import { CategorySection } from '../components/home/CategorySection';
import { ProductSection } from '../components/home/ProductSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { Footer } from '../components/home/Footer';
import { Product } from '../components/home/ProductCard';

// Using actual image imports from the original assets folder
import imgBestW1 from '../../assets/f08af141e39379526083762555e7988bcbf033cd.png';
import imgBestW2 from '../../assets/b66d9197d57bd168fa29c854fea92768b0f9d4be.png';
import imgBestW3 from '../../assets/3dfc5a08dd675e4b709851238a5b18b5fba80863.png';
import imgBestW4 from '../../assets/3ef3b7dba337cfedf7f78ee0f538ba139995478f.png';

import imgBestO1 from '../../assets/dd8636e27d9b61dbdc69c74c475667097c4a9ad5.png';
import imgBestO2 from '../../assets/47cb86094f1dcc656b3aeb92ba777d18c2adb1df.png';
import imgBestO3 from '../../assets/63c4bb7ad567426b11730338b2f846512f74bf79.png';
import imgBestO4 from '../../assets/23cc111a5bbbd7de37b2b5a69adff9a04f860c44.png';

const bestWomanProducts: Product[] = [
  { id: 'bw1', image: imgBestW1, category: 'Product Category', name: 'Product Name', price: 'IDR 300.000', rating: '4.95' },
  { id: 'bw2', image: imgBestW2, category: 'Product Category', name: 'Product Name', price: 'IDR 300.000', rating: '4.95' },
  { id: 'bw3', image: imgBestW3, category: 'Product Category', name: 'Product Name', price: 'IDR 300.000', rating: '4.95' },
  { id: 'bw4', image: imgBestW4, category: 'Product Category', name: 'Product Name', price: 'IDR 300.000', rating: '4.95' },
];

const bestOutfitProducts: Product[] = [
  { id: 'bo1', image: imgBestO1, category: 'Product Category', name: 'Product Name', price: 'IDR 300.000', rating: '4.95' },
  { id: 'bo2', image: imgBestO2, category: 'Product Category', name: 'Product Name', price: 'IDR 300.000', rating: '4.95' },
  { id: 'bo3', image: imgBestO3, category: 'Product Category', name: 'Product Name', price: 'IDR 300.000', rating: '4.95' },
  { id: 'bo4', image: imgBestO4, category: 'Product Category', name: 'Product Name', price: 'IDR 300.000', rating: '4.95' },
];

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Handle navigation clicks for generic buttons matching specific text
    if (target.textContent?.toUpperCase().includes('SHOP NOW') || target.textContent?.toUpperCase().includes('SEE MORE')) {
      e.preventDefault();
      navigate('/products');
      return;
    }

    // Handle product card clicks
    const cardElement = target.closest('[data-name="Card"]');
    if (cardElement) {
      e.preventDefault();
      navigate('/product/1');
      return;
    }
  };

  return (
    <div className="relative w-full bg-white font-['Lato',sans-serif]" onClick={handleClick}>
      <PromoBanner />
      <Header theme="dark" />
      
      <main className="flex flex-col items-center">
        <HeroSection />
        <CategorySection />
        <ProductSection title="THE BEST DRESS FOR THE BEST WOMAN" products={bestWomanProducts} />
        <ProductSection title="BEST OUTFIT FOR YOUR HAPPINESS" products={bestOutfitProducts} />
        <FeaturesSection />
        <TestimonialSection />
      </main>
      
      <Footer />
    </div>
  );
}