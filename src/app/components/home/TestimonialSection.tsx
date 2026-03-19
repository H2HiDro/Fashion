import { Star } from 'lucide-react';

export function TestimonialSection() {
  const testimonials = Array(5).fill({
    name: 'Cynthia Caroline',
    date: '15 July 2023',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.'
  });

  return (
    <section className="bg-[#f2f2f2] w-full py-[96px] overflow-hidden mt-[64px]">
      <div className="max-w-[1440px] mx-auto px-[42px]">
        <h2 className="font-['Playfair_Display',serif] font-medium text-[48px] text-[#3e3e3e] mb-[48px] text-center uppercase tracking-wide">
          Best Outfit For Your Happiness
        </h2>
        
        {/* Testimonial slider container */}
        <div className="flex gap-[24px] overflow-x-auto pb-4 scrollbar-hide snap-x">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white min-w-[400px] w-[400px] h-auto p-[24px] flex flex-col gap-[16px] shrink-0 snap-start shadow-sm">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-[12px]">
                  <div className="w-[36px] h-[36px] bg-[#4d0e0e] rounded-full shrink-0" />
                  <div className="flex flex-col font-['Lato',sans-serif] text-[12px] leading-[1.35]">
                    <span className="text-[#3e3e3e] uppercase font-bold">{t.name}</span>
                    <span className="text-[#757575]">{t.date}</span>
                  </div>
                </div>
                <div className="flex gap-[2px]">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={14} fill={i < t.rating ? "#FFE605" : "none"} color="#FFE605" />
                  ))}
                </div>
              </div>
              <p className="font-['Lato',sans-serif] text-[13px] text-[#757575] leading-[1.5] mt-2">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
