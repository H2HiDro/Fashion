import { ChevronDown } from 'lucide-react';
import imgHero from '../../../assets/hero-bg.jpg';

export function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          alt="Hero Model"
          className="absolute inset-0 w-full h-full object-cover object-top"
          src={imgHero}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start w-full max-w-[1440px] px-[42px] mt-16 text-white">
        <p className="font-['Lato',sans-serif] text-[16px] tracking-[1.6px] uppercase mb-[16px]">
          made in Indonesia, dedicated to Indonesia
        </p>
        <h1 className="font-['Playfair_Display',serif] font-medium text-[76px] leading-[1.3] max-w-[870px] uppercase">
          Discover the Art of Dressing Up
        </h1>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[8px] text-white cursor-pointer hover:opacity-80 transition-opacity z-10">
        <p className="font-['Lato',sans-serif] text-[16px] tracking-[1.6px] uppercase">scroll down</p>
        <ChevronDown size={24} className="animate-bounce" />
      </div>
    </div>
  );
}
