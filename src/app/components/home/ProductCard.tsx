import { Star } from 'lucide-react';

export interface Product {
  id: string;
  image: string;
  category: string;
  name: string;
  price: string;
  rating: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative flex flex-col gap-[16px] w-[315px] group cursor-pointer" data-name="Card">
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
