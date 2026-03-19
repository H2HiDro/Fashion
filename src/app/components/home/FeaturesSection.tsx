import { ThumbsUp, Phone, Rocket, CreditCard } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-[42px] py-[64px]">
      <div className="flex gap-[32px] w-full items-stretch">
        
        {/* Left Column (Satisfaction) */}
        <div className="bg-[#f2f2f2] flex-1 p-[24px]">
          <div className="bg-white h-full flex flex-col items-center p-[24px] text-center gap-[16px]">
            <div className="w-[64px] h-[64px] rounded-[32px] bg-[#8b4513] text-white flex items-center justify-center shrink-0">
              <ThumbsUp fill="currentColor" size={24} />
            </div>
            <h3 className="font-['Playfair_Display',serif] font-normal text-[28px] text-[#3e3e3e] leading-[1.3] whitespace-pre-line mt-[8px]">
              {`100% Satisfaction\nGuaranteed`}
            </h3>
            <p className="font-['Lato',sans-serif] text-[12px] text-[#757575] leading-[1.35] mt-auto">
              Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.
            </p>
          </div>
        </div>

        {/* Middle Column (Service & Delivery) */}
        <div className="w-[619px] flex flex-col gap-[32px] shrink-0">
          <div className="bg-[#f2f2f2] p-[24px]">
            <div className="bg-white p-[24px] flex items-start gap-[16px]">
              <div className="w-[64px] h-[64px] rounded-[32px] bg-[#8b4513] text-white flex items-center justify-center shrink-0">
                <Phone fill="currentColor" size={24} />
              </div>
              <div className="flex flex-col gap-[16px] flex-1 text-left mt-[12px]">
                <h3 className="font-['Playfair_Display',serif] font-normal text-[28px] text-[#3e3e3e] leading-[1.3]">24/7 Online Service</h3>
                <p className="font-['Lato',sans-serif] text-[12px] text-[#757575] leading-[1.35]">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#f2f2f2] p-[24px]">
            <div className="bg-white p-[24px] flex items-start gap-[16px]">
              <div className="w-[64px] h-[64px] rounded-[32px] bg-[#8b4513] text-white flex items-center justify-center shrink-0">
                <Rocket fill="currentColor" size={24} />
              </div>
              <div className="flex flex-col gap-[16px] flex-1 text-left mt-[12px]">
                <h3 className="font-['Playfair_Display',serif] font-normal text-[28px] text-[#3e3e3e] leading-[1.3]">Fast Delivery</h3>
                <p className="font-['Lato',sans-serif] text-[12px] text-[#757575] leading-[1.35]">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Payment) */}
        <div className="bg-[#f2f2f2] flex-1 p-[24px]">
          <div className="bg-white h-full flex flex-col items-center p-[24px] text-center gap-[16px]">
            <div className="w-[64px] h-[64px] rounded-[32px] bg-[#8b4513] text-white flex items-center justify-center shrink-0">
              <CreditCard fill="currentColor" size={24} />
            </div>
            <h3 className="font-['Playfair_Display',serif] font-normal text-[28px] text-[#3e3e3e] leading-[1.3] whitespace-pre-line mt-[8px]">
              {`Payment With\nSecure System`}
            </h3>
            <p className="font-['Lato',sans-serif] text-[12px] text-[#757575] leading-[1.35] mt-auto">
              Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
