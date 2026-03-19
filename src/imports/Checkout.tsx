import clsx from "clsx";
import svgPaths from "./svg-atremn9b4b";
import imgImage2 from "figma:asset/c79e549e4a5cbbb7a2872090fd113d687389bfe3.png";
type Input1Props = {
  additionalClassNames?: string;
};

function Input1({ children, additionalClassNames = "" }: React.PropsWithChildren<Input1Props>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Frame94869CartProduct({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative w-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[31.25%_15.63%_31.25%_15.62%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 9">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[64px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <Wrapper>
      <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
        <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#b4b4b4] text-[20px]">{text}</p>
        <HeroiconsSolidChevronDown className="overflow-clip relative shrink-0 size-[24px]" />
      </div>
    </Wrapper>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 text-[#b4b4b4] w-[200px]">
      <p className="font-['Lato:Regular',sans-serif] relative shrink-0 text-[12px] w-full">{text}</p>
      <p className="font-['Lato:Medium',sans-serif] relative shrink-0 text-[16px] uppercase w-full">{text1}</p>
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
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
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
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center p-[12px] relative size-full", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#b4b4b4] text-[20px]">{text}</p>
    </div>
  );
}

function Vector335Stroke() {
  return (
    <Wrapper1>
      <path clipRule="evenodd" d={svgPaths.p53fc380} fill="var(--fill-0, #0F172A)" fillRule="evenodd" id="Vector 335 (Stroke)" />
    </Wrapper1>
  );
}

function HeroiconsSolidChevronDown({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="heroicons-solid/chevron-down">
      <Vector335Stroke />
    </div>
  );
}
type InputProps = {
  className?: string;
  dropdown?: boolean;
  variant?: "Phone" | "Text" | "Password" | "Address";
};

function Input({ className, dropdown = false, variant = "Text" }: InputProps) {
  const isAddress = variant === "Address";
  const isPassword = variant === "Password";
  const isPhone = variant === "Phone";
  const isTextOrAddressOrPassword = ["Text", "Address", "Password"].includes(variant);
  return (
    <div className={className || "relative w-[705px]"}>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <p className="font-['Lato:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#3e3e3e] text-[20px] uppercase w-full">{isPassword ? "Password" : isPhone ? "Phone Number" : isAddress ? "Address" : "Name"}</p>
        <div className={`relative shrink-0 w-full ${isPhone ? "content-stretch flex gap-[12px] items-start" : isAddress ? "h-[94px]" : "h-[64px]"}`}>
          <div aria-hidden={isTextOrAddressOrPassword ? "true" : undefined} className={isPhone ? "content-stretch flex h-[64px] items-center justify-between p-[12px] relative shrink-0 w-[150px]" : "absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none"}>
            {isPhone && (
              <>
                <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-[24px]" data-name="Flag">
                    <div className="bg-[#ff0101] flex-[1_0_0] min-h-px min-w-px w-full" />
                    <div className="bg-white flex-[1_0_0] min-h-px min-w-px w-full" />
                  </div>
                  <p className="font-['Lato:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#3e3e3e] text-[20px] whitespace-nowrap">(+62)</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/chevron-down">
                  <Wrapper1>
                    <path clipRule="evenodd" d={svgPaths.p53fc380} fill="var(--fill-0, #3E3E3E)" fillRule="evenodd" id="Vector 335 (Stroke)" />
                  </Wrapper1>
                </div>
              </>
            )}
          </div>
          <div className={isPhone ? "flex-[1_0_0] h-[64px] min-h-px min-w-px relative" : "flex flex-row items-center size-full"}>
            <div aria-hidden={isPhone ? "true" : undefined} className={isPassword ? "content-stretch flex gap-[40px] items-center p-[12px] relative size-full" : isPhone ? "absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none" : isAddress ? "content-stretch flex items-center p-[12px] relative size-full" : "content-stretch flex gap-[8px] items-center p-[12px] relative size-full"}>
              {isTextOrAddressOrPassword && <p className={`flex-[1_0_0] font-["Lato:Regular",sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#b4b4b4] text-[20px] ${isAddress ? "h-full" : ""}`}>{isPassword ? "********" : isAddress ? "Eg: ABC Street 12A, West Java, Indonesia" : "Eg: John Doe"}</p>}
              {variant === "Text" && dropdown && (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/chevron-down">
                  <Vector335Stroke />
                </div>
              )}
              {isPassword && (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/eye-slash">
                  <div className="absolute inset-[12.5%_8.06%]" data-name="Vector">
                    <div className="absolute inset-[-4.17%_-3.73%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6304 19.5">
                        <path d={svgPaths.p2bdf1760} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {isPhone && (
              <div className="flex flex-row items-center size-full">
                <Text text="111-2222-33333" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Checkout() {
  return (
    <div className="bg-white relative size-full" data-name="Checkout">
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
                  <Text1 text="White casual t-shirt" />
                  <p className="font-['Lato:Regular',sans-serif] relative shrink-0 text-[#353535] text-[16px] w-full">Please recheck the size before send to me :)</p>
                </div>
              </div>
            </Frame94869CartProduct>
            <Frame94869CartProduct>
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                <ImageImage />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
                  <Text1 text="White casual t-shirt" additionalClassNames="leading-[1.35] not-italic" />
                </div>
              </div>
            </Frame94869CartProduct>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-between leading-[1.35] not-italic relative shrink-0 text-[20px] w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
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
      <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] left-[42px] text-[#3e3e3e] text-[76px] top-[174px] uppercase whitespace-nowrap">Checkout Form</p>
      <div className="absolute left-[42px] top-[313px]" data-name="Stepper">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative">
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[498px]">
              <div className="bg-[#ede5e1] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[40px] shrink-0 size-[40px]">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="heroicons-solid/user">
                  <div className="absolute inset-[6.25%_15.63%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9985 14">
                      <g id="Vector">
                        <path clipRule="evenodd" d={svgPaths.p6d27100} fill="var(--fill-0, #8B4513)" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p27696480} fill="var(--fill-0, #8B4513)" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-[#efefef] flex-[1_0_0] h-[4px] min-h-px min-w-px" />
              <div className="bg-white content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[40px] shrink-0 size-[40px]">
                <div aria-hidden="true" className="absolute border-[#b4b4b4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px]" />
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="heroicons-solid/truck">
                  <div className="absolute inset-[18.75%_6.39%_12.5%_6.25%]" data-name="Union">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9784 11">
                      <g id="Union">
                        <path d={svgPaths.p4727100} fill="var(--fill-0, #B4B4B4)" />
                        <path d={svgPaths.p3a5f8000} fill="var(--fill-0, #B4B4B4)" />
                        <path d={svgPaths.p28e5b100} fill="var(--fill-0, #B4B4B4)" />
                        <path d={svgPaths.p3cce9400} fill="var(--fill-0, #B4B4B4)" />
                        <path d={svgPaths.p1c9e5a80} fill="var(--fill-0, #B4B4B4)" />
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
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[200px]">
                <p className="font-['Lato:Regular',sans-serif] relative shrink-0 text-[#b4b4b4] text-[12px] w-full">Step 1</p>
                <p className="font-['Lato:Medium',sans-serif] relative shrink-0 text-[#8b4513] text-[16px] uppercase w-full">Personal Info</p>
              </div>
              <Helper text="Step 2" text1="Shipping Delivery" />
              <Helper text="Step 3" text1="confirmation" />
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[0] left-[42px] text-[#3e3e3e] text-[0px] text-[48px] top-[48px] uppercase whitespace-nowrap">
        <span className="leading-[1.3] text-[#8b4513]">M</span>
        <span className="leading-[1.3]">odeva</span>
      </p>
      <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[42px] top-[443px] w-[756px]">
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
          <p className="font-['Lato:SemiBold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#3e3e3e] text-[32px] uppercase w-full">COntact Person</p>
          <div className="content-stretch flex flex-col gap-[32px] items-end relative shrink-0 w-full">
            <Input className="relative shrink-0 w-full" />
            <Input className="relative shrink-0 w-full" variant="Phone" />
            <Input1 additionalClassNames="shrink-0 w-full">
              <p className="font-['Lato:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#3e3e3e] text-[20px] uppercase w-full">Email</p>
              <Wrapper>
                <Text text="Eg: example@example.com" additionalClassNames="gap-[8px]" />
              </Wrapper>
            </Input1>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-end relative shrink-0 w-full">
          <p className="font-['Lato:SemiBold',sans-serif] leading-[1.35] min-w-full not-italic relative shrink-0 text-[#3e3e3e] text-[32px] uppercase w-[min-content]">Address Detail</p>
          <div className="content-stretch flex flex-col gap-[32px] items-end relative shrink-0 w-full">
            <Input className="relative shrink-0 w-full" variant="Address" />
            <Input1 additionalClassNames="shrink-0 w-full">
              <p className="font-['Lato:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#3e3e3e] text-[20px] uppercase w-full">Country</p>
              <Text2 text="--Choose Country--" />
            </Input1>
            <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0 w-full">
              <Input1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                <p className="font-['Lato:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#3e3e3e] text-[20px] uppercase w-full">State/Province</p>
                <Text2 text="--Choose Province--" />
              </Input1>
              <Input1 additionalClassNames="shrink-0 w-[238px]">
                <p className="font-['Lato:Medium',sans-serif] leading-[1.35] min-w-full not-italic relative shrink-0 text-[#3e3e3e] text-[20px] uppercase w-[min-content]">ZIP COde</p>
                <div className="content-stretch flex gap-[8px] h-[64px] items-center p-[12px] relative shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none" />
                  <p className="font-['Lato:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#b4b4b4] text-[20px] whitespace-nowrap">--Choose ZIP Code--</p>
                  <HeroiconsSolidChevronDown className="overflow-clip relative shrink-0 size-[24px]" />
                </div>
              </Input1>
            </div>
          </div>
          <div className="bg-[#8b4513] relative shrink-0" data-name="Button">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center p-[16px] relative">
                <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1.6px] uppercase whitespace-nowrap">COntinue to Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}