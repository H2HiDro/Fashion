import clsx from "clsx";
import svgPaths from "./svg-ndr5hcmsyv";
import imgImage2 from "figma:asset/c79e549e4a5cbbb7a2872090fd113d687389bfe3.png";
import imgImage3 from "figma:asset/5157bb615183dc4808d1acccb071406f898bb050.png";
import imgImage4 from "figma:asset/7ac8620af4a0ef26113733ba9b155715318b151c.png";
import imgImage5 from "figma:asset/cf37bc6023b7021f9872ca71e91b6c825707a841.png";

function Frame94869CartProduct({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative w-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row justify-center size-full">
      <div className="content-stretch flex gap-[8px] items-start justify-center p-[12px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none" />
      <Wrapper1>{children}</Wrapper1>
    </div>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
};

function Helper2({ text, text1 }: Helper2Props) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[200px]">
      <p className="font-['Lato:Regular',sans-serif] relative shrink-0 text-[#b4b4b4] text-[12px] w-full">{text}</p>
      <p className="font-['Lato:Medium',sans-serif] relative shrink-0 text-[#8b4513] text-[16px] uppercase w-full">{text1}</p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] gap-[8px] items-start justify-center leading-[1.35] min-h-px min-w-px not-italic relative">
      <p className="relative shrink-0 text-[#3e3e3e] text-[20px] w-full">{text}</p>
      <p className="relative shrink-0 text-[#757575] text-[16px] w-full">{text1}</p>
    </div>
  );
}

function Helper() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ImageImage() {
  return (
    <div className="h-[149px] relative shrink-0 w-[112px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[8px] items-start relative shrink-0 uppercase w-full", additionalClassNames)}>
      <p className="font-['Lato:Medium',sans-serif] relative shrink-0 text-[#3e3e3e] text-[20px] w-full">{text}</p>
      <div className="content-stretch flex font-['Lato:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#757575] text-[16px] w-full whitespace-nowrap">
        <p className="relative shrink-0">{"1"}</p>
        <p className="relative shrink-0">{"x"}</p>
        <p className="relative shrink-0">{"IDR 100.000"}</p>
      </div>
    </div>
  );
}

export default function CheckoutShipping() {
  return (
    <div className="bg-white relative size-full" data-name="Checkout/Shipping">
      <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] left-[42px] text-[#3e3e3e] text-[76px] top-[174px] uppercase whitespace-nowrap">Checkout Form</p>
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[62.5%] top-[56px] w-[498px]">
        <p className="font-['Lato:SemiBold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#3e3e3e] text-[32px] uppercase w-full">order summary</p>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
          <div className="bg-[#ede5e1] relative shrink-0 w-full" data-name="Banner">
            <div aria-hidden="true" className="absolute border border-[#dfd1c8] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
                <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3e3e3e] text-[16px] whitespace-nowrap">Hooray! You use promo code!</p>
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="heroicons-mini/x-mark">
                  <div className="absolute inset-1/4" data-name="Union">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                      <path d={svgPaths.p1de9a600} fill="var(--fill-0, #929292)" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
            <Frame94869CartProduct>
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                <ImageImage />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start leading-[1.35] min-h-px min-w-px not-italic relative">
                  <Text text="White casual t-shirt" />
                  <p className="font-['Lato:Regular',sans-serif] relative shrink-0 text-[#353535] text-[16px] w-full">Please recheck the size before send to me :)</p>
                </div>
              </div>
            </Frame94869CartProduct>
            <Frame94869CartProduct>
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                <ImageImage />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
                  <Text text="White casual t-shirt" additionalClassNames="leading-[1.35] not-italic" />
                </div>
              </div>
            </Frame94869CartProduct>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-between leading-[1.35] not-italic relative shrink-0 text-[20px] w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col font-['Lato:Regular',sans-serif] gap-[12px] items-start relative shrink-0 text-[#757575] w-[228px]">
              <p className="relative shrink-0 w-full">Subtotal</p>
              <p className="relative shrink-0 w-full">Voucher (50KDISCOUNT)</p>
              <p className="relative shrink-0 w-full">Shipping</p>
            </div>
            <p className="font-['Lato:SemiBold',sans-serif] min-w-full relative shrink-0 text-[#3e3e3e] w-[min-content]">Total</p>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 uppercase w-[113px]">
            <div className="content-stretch flex flex-col font-['Lato:Regular',sans-serif] gap-[12px] items-start relative shrink-0 w-full">
              <p className="relative shrink-0 text-[#757575] w-full">IDR 300.000</p>
              <p className="relative shrink-0 text-[#e90000] w-full">IDR 50.000</p>
              <p className="relative shrink-0 text-[#757575] w-full">IDR -</p>
            </div>
            <p className="font-['Lato:SemiBold',sans-serif] relative shrink-0 text-[#3e3e3e] w-full">IDR 250.000</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[40px] items-end left-[42px] top-[443px] w-[756px]">
        <p className="font-['Lato:SemiBold',sans-serif] leading-[1.35] min-w-full not-italic relative shrink-0 text-[#3e3e3e] text-[32px] uppercase w-[min-content]">Shipping Delivery</p>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <div className="relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#8b4513] border-solid inset-0 pointer-events-none" />
            <Wrapper1>
              <Helper />
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start justify-center min-h-px min-w-px relative">
                <div className="bg-white h-[35px] overflow-clip relative shrink-0 w-[62px]">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[35px] left-[calc(50%+0.5px)] top-1/2 w-[47px]" data-name="image 3">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                  </div>
                </div>
                <Helper1 text="JNE" text1="IDR 39.000" />
              </div>
            </Wrapper1>
          </div>
          <Wrapper>
            <Helper />
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-center min-h-px min-w-px relative">
              <div className="bg-white h-[35px] overflow-clip relative shrink-0 w-[62px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[23px] left-1/2 top-1/2 w-[62px]" data-name="image 4">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
                </div>
              </div>
              <Helper1 text="TIKI" text1="IDR 58.000" />
            </div>
          </Wrapper>
          <Wrapper>
            <Helper />
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-center min-h-px min-w-px relative">
              <div className="bg-white h-[35px] overflow-clip relative shrink-0 w-[62px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[35px] left-[calc(50%-0.5px)] top-1/2 w-[55px]" data-name="image 5">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
                </div>
              </div>
              <Helper1 text="DHL" text1="IDR 168.000" />
            </div>
          </Wrapper>
        </div>
        <div className="bg-[#8b4513] relative shrink-0 w-[315px]" data-name="Button">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
              <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[16px] text-center text-white tracking-[1.6px] uppercase whitespace-nowrap">COntinue to Payment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[42px] top-[313px]" data-name="Stepper">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative">
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[498px]">
              <div className="bg-[#c0e4ca] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[40px] shrink-0 size-[40px]">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="heroicons-solid/check">
                  <div className="absolute inset-[18.75%_15.62%_18.75%_15.63%]" data-name="Vector 616 (Stroke)">
                    <div className="absolute inset-[-5%_-4.55%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 11.0001">
                        <path clipRule="evenodd" d={svgPaths.p167d6a30} fill="var(--fill-0, #EAEAEA)" fillRule="evenodd" id="Vector 616 (Stroke)" stroke="var(--stroke-0, #00300D)" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ede5e1] flex-[1_0_0] h-[4px] min-h-px min-w-px" />
              <div className="bg-[#ede5e1] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[40px] shrink-0 size-[40px]">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="heroicons-solid/truck">
                  <div className="absolute inset-[18.75%_6.39%_12.5%_6.25%]" data-name="Union">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9784 11">
                      <g id="Union">
                        <path d={svgPaths.p4727100} fill="var(--fill-0, #8B4513)" />
                        <path d={svgPaths.p3a5f8000} fill="var(--fill-0, #8B4513)" />
                        <path d={svgPaths.p28e5b100} fill="var(--fill-0, #8B4513)" />
                        <path d={svgPaths.p3cce9400} fill="var(--fill-0, #8B4513)" />
                        <path d={svgPaths.p1c9e5a80} fill="var(--fill-0, #8B4513)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-[#efefef] flex-[1_0_0] h-[4px] min-h-px min-w-px" />
              <div className="bg-white content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[40px] shrink-0 size-[40px]">
                <div aria-hidden="true" className="absolute border-[#b4b4b4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px]" />
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="heroicons-solid/credit-card">
                  <div className="absolute inset-[15.63%_6.25%]" data-name="Subtract">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
                      <g id="Subtract">
                        <path d={svgPaths.p2b96fd00} fill="var(--fill-0, #B4B4B4)" />
                        <path clipRule="evenodd" d={svgPaths.p11707200} fill="var(--fill-0, #B4B4B4)" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[32px] items-center leading-[1.35] not-italic relative shrink-0">
              <Helper2 text="Step 1" text1="Personal Info" />
              <Helper2 text="Step 2" text1="Shipping Delivery" />
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 text-[#b4b4b4] w-[200px]">
                <p className="font-['Lato:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Step 3</p>
                <p className="font-['Lato:Medium',sans-serif] relative shrink-0 text-[16px] uppercase w-full">confirmation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[0] left-[42px] text-[#3e3e3e] text-[0px] text-[48px] top-[48px] uppercase whitespace-nowrap">
        <span className="leading-[1.3] text-[#8b4513]">M</span>
        <span className="leading-[1.3]">odeva</span>
      </p>
    </div>
  );
}