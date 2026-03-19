import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { PromoBanner } from '../components/home/PromoBanner';
import { Footer } from '../components/home/Footer';
import { Star } from 'lucide-react';

// Local product images (reusing existing assets)
import img1 from '../../assets/f08af141e39379526083762555e7988bcbf033cd.png';
import img2 from '../../assets/b66d9197d57bd168fa29c854fea92768b0f9d4be.png';
import img3 from '../../assets/3dfc5a08dd675e4b709851238a5b18b5fba80863.png';
import img4 from '../../assets/3ef3b7dba337cfedf7f78ee0f538ba139995478f.png';
import img5 from '../../assets/dd8636e27d9b61dbdc69c74c475667097c4a9ad5.png';
import img6 from '../../assets/47cb86094f1dcc656b3aeb92ba777d18c2adb1df.png';
import img7 from '../../assets/63c4bb7ad567426b11730338b2f846512f74bf79.png';
import img8 from '../../assets/23cc111a5bbbd7de37b2b5a69adff9a04f860c44.png';
import imgHero from '../../assets/c36d31d93f54f43807109eed47ab5c0be93ede65.png';

const saleProducts = [
  { id: 1, name: 'Silk Midi Dress', category: 'Dresses', price: 'IDR 350.000', originalPrice: 'IDR 500.000', image: img1, discount: '-30%', rating: '4.95' },
  { id: 2, name: 'Linen Blazer', category: 'Outerwear', price: 'IDR 450.000', originalPrice: 'IDR 750.000', image: img2, discount: '-40%', rating: '4.80' },
  { id: 3, name: 'Pleated Trousers', category: 'Pants', price: 'IDR 250.000', originalPrice: 'IDR 500.000', image: img3, discount: '-50%', rating: '4.70' },
  { id: 4, name: 'Basic White Tee', category: 'Tops', price: 'IDR 100.000', originalPrice: 'IDR 200.000', image: img4, discount: '-50%', rating: '4.90' },
  { id: 5, name: 'Denim Jacket', category: 'Outerwear', price: 'IDR 380.000', originalPrice: 'IDR 550.000', image: img5, discount: '-30%', rating: '4.85' },
  { id: 6, name: 'Floral Wrap Skirt', category: 'Skirts', price: 'IDR 180.000', originalPrice: 'IDR 300.000', image: img6, discount: '-40%', rating: '4.75' },
  { id: 7, name: 'Knit Sweater', category: 'Tops', price: 'IDR 280.000', originalPrice: 'IDR 400.000', image: img7, discount: '-30%', rating: '4.65' },
  { id: 8, name: 'Leather Crossbody', category: 'Accessories', price: 'IDR 420.000', originalPrice: 'IDR 600.000', image: img8, discount: '-30%', rating: '4.88' },
];

export default function SalePage() {
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
            <div className="absolute inset-0 bg-[rgba(139,69,19,0.7)]" />
          </div>

          <div className="relative z-10 text-center text-white px-4">
            <p className="font-['Lato',sans-serif] text-[16px] tracking-[1.6px] uppercase mb-4">
              Limited Time Offer
            </p>
            <h1 className="font-['Playfair_Display',serif] font-medium text-[76px] leading-[1.3] uppercase mb-6">
              Sale Up To 50% Off
            </h1>
            <p className="font-['Lato',sans-serif] text-[18px] max-w-[600px] mx-auto mb-8">
              Discover amazing deals on your favorite fashion items. Limited stock available!
            </p>
            <button
              className="bg-[#8b4513] text-white font-['Lato',sans-serif] text-[16px] tracking-[1.6px] uppercase px-8 py-4 cursor-pointer hover:bg-[#6d3510] transition-colors"
              onClick={() => navigate('/products')}
            >
              Shop Sale Now
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full max-w-[1440px] px-[42px] py-[96px]">
          <div className="mb-12">
            <h2 className="font-['Playfair_Display',serif] font-medium text-[48px] text-[#3e3e3e] uppercase mb-4 leading-[1.3]">
              Sale Items
            </h2>
            <p className="font-['Lato',sans-serif] text-[16px] text-[#757575]">
              Browse our curated selection of discounted fashion pieces
            </p>
          </div>

          <div className="grid grid-cols-4 gap-[16px] mb-12">
            {saleProducts.map((product) => (
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
                  {/* Discount Badge */}
                  <div className="absolute top-[12px] right-[12px] bg-[#c0392b] text-white px-[10px] py-[4px] z-10">
                    <p className="font-bold text-[14px]">{product.discount}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="font-['Lato',sans-serif] text-[12px] text-[#757575] uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="font-['Playfair_Display',serif] font-normal text-[#3e3e3e] text-[28px] leading-[1.3] capitalize group-hover:text-[#8b4513] transition-colors truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-[8px]">
                    <p className="font-['Lato',sans-serif] text-[16px] text-[#8b4513] font-bold">
                      {product.price}
                    </p>
                    <p className="font-['Lato',sans-serif] text-[14px] text-[#757575] line-through">
                      {product.originalPrice}
                    </p>
                  </div>
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
