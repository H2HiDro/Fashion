import { ProductCard, Product } from './ProductCard';
import { ArrowRight } from 'lucide-react';

interface ProductSectionProps {
  title: string;
  products: Product[];
}

export function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-[42px] pb-[64px] flex flex-col items-start gap-[32px]">
      <h2 className="font-['Playfair_Display',serif] font-medium text-[#3e3e3e] text-[76px] leading-[1.3] uppercase w-[1356px]">
        {title}
      </h2>
      
      <div className="w-full flex justify-between gap-[16px]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <button className="bg-[#8b4513] hover:bg-[#70360f] transition-colors text-white mt-[16px] px-[24px] py-[16px] flex items-center justify-center gap-[8px] uppercase tracking-[1.6px] font-['Lato',sans-serif] text-[16px]">
        See More
        <ArrowRight size={20} />
      </button>
    </section>
  );
}
