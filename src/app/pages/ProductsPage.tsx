import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { PromoBanner } from '../components/home/PromoBanner';
import { Footer } from '../components/home/Footer';
import { Star, ChevronDown, ChevronRight } from 'lucide-react';

// Local product images
import img1 from '../../assets/fe5fa37b5fc65e910df24d90d693480ddad36f6e.png';
import img2 from '../../assets/af43bf5db0e46e253ef47e62a257476d50fcb546.png';
import img3 from '../../assets/0915c49ed2eba068ec8120debecbf56ebb8da41b.png';
import img4 from '../../assets/bec8c1a5ba145bcb57237449eb1e18f4c9e53702.png';
import img5 from '../../assets/e3ed3b1c0574c1cbf21c64891b915e49cdc214ef.png';
import img6 from '../../assets/8593970281d14f9536dde2b6c5f8ae7796df598c.png';
import img7 from '../../assets/48edbd55021a6012f23d209bed71c807f6697ae0.png';
import img8 from '../../assets/2ae723557f2e830421ac7bd9ad44b2748473ca88.png';
import img9 from '../../assets/9030ae29d35018acb216ec714936215faba7075f.png';

const catalogProducts = [
  { id: 1, image: img1, category: 'Jacket', name: 'Brown Leather Jacket', price: 'IDR 300.000', rating: '4.95' },
  { id: 2, image: img2, category: 'Shirt', name: 'Black Yellow Square Shirt', price: 'IDR 300.000', rating: '4.95' },
  { id: 3, image: img3, category: 'Shirt', name: 'White Men Formal Shirt', price: 'IDR 300.000', rating: '4.95' },
  { id: 4, image: img4, category: 'Hoodie and Sweater', name: 'Unisex Orange Sweater', price: 'IDR 300.000', rating: '4.95' },
  { id: 5, image: img5, category: 'Hoodie and Sweater', name: 'T-Shirt Cotton 30S', price: 'IDR 300.000', rating: '4.95' },
  { id: 6, image: img6, category: 'Hoodie and Sweater', name: 'White Oversize Cotton', price: 'IDR 300.000', rating: '4.95' },
  { id: 7, image: img7, category: 'Jacket', name: 'White Men Formal Shirt', price: 'IDR 300.000', rating: '4.95' },
  { id: 8, image: img8, category: 'Hoodie and Sweater', name: 'White Woman Formal Shirt', price: 'IDR 300.000', rating: '4.95' },
  { id: 9, image: img9, category: 'Hoodie and Sweater', name: 'Formal Shirt Men', price: 'IDR 300.000', rating: '4.95' },
];

const filterCategories = [
  { name: 'Woman', subcategories: [{ name: 'Dress', count: '99+' }, { name: 'Shirt', count: '37' }] },
  { name: 'Man', subcategories: [] },
  { name: 'Unisex', subcategories: [] },
];

export default function ProductsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full bg-white font-['Lato',sans-serif]">
      <PromoBanner />
      <Header theme="light" />

      <main className="flex flex-col items-center">
        {/* Page Content */}
        <div className="w-full max-w-[1440px] px-[42px] pt-[140px] pb-[96px]">
          {/* Title */}
          <h1 className="font-['Playfair_Display',serif] font-medium text-[#3e3e3e] text-[76px] leading-[1.3] uppercase mb-[32px]">
            All Products
          </h1>

          <div className="flex gap-[24px] items-start">
            {/* Sidebar Filter */}
            <div className="w-[323px] shrink-0">
              {/* Category */}
              <div className="bg-[#e8e1de]">
                <div className="flex items-center justify-between px-[12px] py-[16px]">
                  <p className="text-[#3e3e3e] text-[16px] uppercase">Category</p>
                  <ChevronDown size={20} className="text-[#3e3e3e]" />
                </div>
              </div>

              <div className="flex flex-col">
                {filterCategories.map((cat) => (
                  <div key={cat.name}>
                    <div className="flex items-center justify-between px-[12px] py-[12px] bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                      <p className="text-[#3e3e3e] text-[16px]">{cat.name}</p>
                      <ChevronRight size={20} className="text-[#3e3e3e]" />
                    </div>
                    {cat.subcategories.length > 0 && (
                      <div className="ml-[24px]">
                        {cat.subcategories.map((sub) => (
                          <div key={sub.name} className="flex items-center gap-[8px] px-[12px] py-[12px]">
                            <div className="w-[16px] h-[16px] border border-[#3e3e3e] rounded-[2px]" />
                            <p className="flex-1 text-[#3e3e3e] text-[16px]">{sub.name}</p>
                            <span className="bg-[#ebebeb] text-[#3e3e3e] text-[10px] px-[4px] py-[2px] rounded-[10px]">{sub.count}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Price Filter */}
              <div className="border-t border-[#ebebeb]">
                <div className="flex items-center justify-between px-[12px] py-[16px] cursor-pointer">
                  <p className="text-[#3e3e3e] text-[16px] uppercase">Price</p>
                  <ChevronRight size={20} className="text-[#3e3e3e]" />
                </div>
              </div>

              {/* Size Filter */}
              <div className="border-t border-[#ebebeb]">
                <div className="flex items-center justify-between px-[12px] py-[16px] cursor-pointer">
                  <p className="text-[#3e3e3e] text-[16px] uppercase">Size</p>
                  <ChevronRight size={20} className="text-[#3e3e3e]" />
                </div>
              </div>

              {/* Color Filter */}
              <div className="border-t border-[#ebebeb]">
                <div className="flex items-center justify-between px-[12px] py-[16px] cursor-pointer">
                  <p className="text-[#3e3e3e] text-[16px] uppercase">Color</p>
                  <ChevronRight size={20} className="text-[#3e3e3e]" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1 flex flex-col gap-[32px]">
              {/* Row 1 */}
              <div className="flex justify-between gap-[16px]">
                {catalogProducts.slice(0, 3).map((product) => (
                  <ProductCard key={product.id} product={product} onClick={() => navigate('/product/1')} />
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex justify-between gap-[16px]">
                {catalogProducts.slice(3, 6).map((product) => (
                  <ProductCard key={product.id} product={product} onClick={() => navigate('/product/1')} />
                ))}
              </div>
              {/* Row 3 */}
              <div className="flex justify-between gap-[16px]">
                {catalogProducts.slice(6, 9).map((product) => (
                  <ProductCard key={product.id} product={product} onClick={() => navigate('/product/1')} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-[8px] mt-[16px]">
                <ChevronRight size={16} className="text-[#ebebeb] rotate-180" />
                <div className="w-[24px] h-[24px] border border-[#3e3e3e] flex items-center justify-center">
                  <span className="text-[#3e3e3e] text-[12px]">1</span>
                </div>
                {[2, 3, 4, 5].map((n) => (
                  <div key={n} className="w-[24px] h-[24px] border border-[#b4b4b4] flex items-center justify-center cursor-pointer hover:border-[#3e3e3e] transition-colors">
                    <span className="text-[#b4b4b4] text-[12px]">{n}</span>
                  </div>
                ))}
                <span className="text-[#b4b4b4] text-[12px]">...</span>
                <div className="w-[24px] h-[24px] border border-[#b4b4b4] flex items-center justify-center cursor-pointer hover:border-[#3e3e3e] transition-colors">
                  <span className="text-[#b4b4b4] text-[12px]">10</span>
                </div>
                <ChevronRight size={16} className="text-[#b4b4b4]" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

interface CatalogProduct {
  id: number;
  image: string;
  category: string;
  name: string;
  price: string;
  rating: string;
}

function ProductCard({ product, onClick }: { product: CatalogProduct; onClick: () => void }) {
  return (
    <div className="relative flex flex-col gap-[16px] w-[315px] group cursor-pointer" data-name="Card" onClick={onClick}>
      <div className="relative w-full h-[420px] overflow-hidden">
        <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        {/* Rating Badge */}
        <div className="absolute top-[12px] right-[12px] bg-[#8b4513] text-white px-[8px] py-[4px] rounded-full flex items-center justify-center gap-[4px] z-10">
          <Star size={12} fill="#FFE605" color="#FFE605" />
          <span className="font-['Lato',sans-serif] text-[16px] leading-none pt-[1px]">{product.rating}</span>
        </div>
      </div>
      <div className="flex flex-col gap-[4px]">
        <p className="font-['Lato',sans-serif] text-[#757575] text-[12px] uppercase">{product.category}</p>
        <h3 className="font-['Playfair_Display',serif] font-normal text-[#3e3e3e] text-[28px] leading-[1.3] capitalize group-hover:text-[#8b4513] transition-colors">{product.name}</h3>
        <p className="font-['Lato',sans-serif] text-[#757575] text-[16px] mt-[12px]">{product.price}</p>
      </div>
    </div>
  );
}