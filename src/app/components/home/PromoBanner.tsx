import { X } from 'lucide-react';
import { useState } from 'react';

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#8b4513] h-[40px] w-full z-50 relative flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-[1440px] px-[16px]">
        <p className="flex-1 font-['Lato',sans-serif] text-[16px] text-center text-white flex items-center justify-center">
          <span className="mr-1">Discount 20% For New Member, </span>
          <span className="font-extrabold uppercase">ONLY FOR TODAY!!</span>
        </p>
        <button 
          onClick={() => setIsVisible(false)} 
          className="shrink-0 text-white hover:opacity-80 transition-opacity"
          aria-label="Close promo banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
