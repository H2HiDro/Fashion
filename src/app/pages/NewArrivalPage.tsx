import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { PromoBanner } from '../components/home/PromoBanner';
import { Footer } from '../components/home/Footer';
import { Star } from 'lucide-react';

// Local product images (reusing existing assets)
import img1 from '../../assets/fe5fa37b5fc65e910df24d90d693480ddad36f6e.png';
import img2 from '../../assets/af43bf5db0e46e253ef47e62a257476d50fcb546.png';
import img3 from '../../assets/0915c49ed2eba068ec8120debecbf56ebb8da41b.png';
import img4 from '../../assets/bec8c1a5ba145bcb57237449eb1e18f4c9e53702.png';
import img5 from '../../assets/e3ed3b1c0574c1cbf21c64891b915e49cdc214ef.png';
import img6 from '../../assets/8593970281d14f9536dde2b6c5f8ae7796df598c.png';
import img7 from '../../assets/48edbd55021a6012f23d209bed71c807f6697ae0.png';
import img8 from '../../assets/2ae723557f2e830421ac7bd9ad44b2748473ca88.png';
import imgHero from '../../assets/76e2b0a8cd58cf75ed5df6a54b856dc8a674b6a4.png';

const newArrivals = [
  { id: 1, name: 'Elegant Evening Gown', category: 'Dresses', price: 'IDR 850.000', image: img1, rating: '4.95' },
  { id: 2, name: 'Tailored Suit Pants', category: 'Pants', price: 'IDR 450.000', image: img2, rating: '4.80' },
  { id: 3, name: 'Cashmere Cardigan', category: 'Knitwear', price: 'IDR 650.000', image: img3, rating: '4.70' },
  { id: 4, name: 'Oversized Trench Coat', category: 'Outerwear', price: 'IDR 950.000', image: img4, rating: '4.90' },
  { id: 5, name: 'Silk Cami Top', category: 'Tops', price: 'IDR 250.000', image: img5, rating: '4.85' },
  { id: 6, name: 'High-Waisted Shorts', category: 'Bottoms', price: 'IDR 300.000', image: img6, rating: '4.75' },
  { id: 7, name: 'Chunky Sneakers', category: 'Shoes', price: 'IDR 750.000', image: img7, rating: '4.65' },
  { id: 8, name: 'Minimalist Tote Bag', category: 'Accessories', price: 'IDR 550.000', image: img8, rating: '4.88' },
];

export default function NewArrivalPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full bg-white font-['Lato',sans-serif]">
      <PromoBanner />
      <Header theme="dark" />

      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgHero} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>

          <div className="relative z-10 text-center text-white px-4">
            <p className="font-['Lato',sans-serif] text-[16px] tracking-[1.6px] uppercase mb-4">
              Fresh From The Runway
            </p>
            <h1 className="font-['Playfair_Display',serif] font-medium text-[76px] leading-[1.3] uppercase mb-6">
              New Arrivals
            </h1>
            <p className="font-['Lato',sans-serif] text-[18px] max-w-[600px] mx-auto mb-8">
              Explore the latest trends and styles. Be the first to wear our newest collections!
            </p>
            <button
              className="bg-[#8b4513] text-white font-['Lato',sans-serif] text-[16px] tracking-[1.6px] uppercase px-8 py-4 cursor-pointer hover:bg-[#6d3510] transition-colors"
              onClick={() => navigate('/products')}
            >
              Explore New Arrivals
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full max-w-[1440px] px-[42px] py-[96px]">
          <div className="mb-12">
            <h2 className="font-['Playfair_Display',serif] font-medium text-[48px] text-[#3e3e3e] uppercase mb-4 leading-[1.3]">
              Latest Collection
            </h2>
            <p className="font-['Lato',sans-serif] text-[16px] text-[#757575]">
              Discover our newest additions to the collection
            </p>
          </div>

          <div className="grid grid-cols-4 gap-[16px] mb-12">
            {newArrivals.map((product) => (
              <div
                key={product.id}
                className="cursor-pointer group"
                data-name="Card"
                onClick={() => navigate('/product/1')}
              >
                <div className="relative h-[420px] mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-[12px] left-[12px] bg-[#8b4513] text-white px-[8px] py-[4px] rounded-full flex items-center gap-[4px] z-10">
                    <Star size={12} fill="#FFE605" color="#FFE605" />
                    <span className="text-[14px] leading-none">{product.rating}</span>
                  </div>
                  {/* NEW Badge */}
                  <div className="absolute top-[12px] right-[12px] bg-[#2c3e50] text-white px-[10px] py-[4px] z-10">
                    <p className="font-bold text-[12px] tracking-wider">NEW</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="font-['Lato',sans-serif] text-[12px] text-[#757575] uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="font-['Playfair_Display',serif] font-normal text-[#3e3e3e] text-[28px] leading-[1.3] capitalize group-hover:text-[#8b4513] transition-colors truncate">
                    {product.name}
                  </h3>
                  <p className="font-['Lato',sans-serif] text-[16px] text-[#757575] mt-[8px]">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              className="bg-[#8b4513] text-white font-['Lato',sans-serif] text-[16px] tracking-[1.6px] uppercase px-8 py-4 cursor-pointer hover:bg-[#6d3510] transition-colors"
              onClick={() => navigate('/products')}
            >
              View All Products
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
