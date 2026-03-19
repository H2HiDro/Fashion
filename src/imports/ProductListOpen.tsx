import clsx from "clsx";
import svgPaths from "./svg-8dt6luae7b";
import imgRectangle132 from "figma:asset/fe5fa37b5fc65e910df24d90d693480ddad36f6e.png";
import imgRectangle133 from "figma:asset/af43bf5db0e46e253ef47e62a257476d50fcb546.png";
import imgRectangle134 from "figma:asset/0915c49ed2eba068ec8120debecbf56ebb8da41b.png";
import imgRectangle135 from "figma:asset/bec8c1a5ba145bcb57237449eb1e18f4c9e53702.png";
import imgRectangle136 from "figma:asset/e3ed3b1c0574c1cbf21c64891b915e49cdc214ef.png";
import imgRectangle137 from "figma:asset/8593970281d14f9536dde2b6c5f8ae7796df598c.png";
import imgRectangle138 from "figma:asset/48edbd55021a6012f23d209bed71c807f6697ae0.png";
import imgRectangle139 from "figma:asset/2ae723557f2e830421ac7bd9ad44b2748473ca88.png";
import imgRectangle140 from "figma:asset/9030ae29d35018acb216ec714936215faba7075f.png";

function Product({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Frame94827HelperProps = {
  additionalClassNames?: string;
};

function Frame94827Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Frame94827HelperProps>) {
  return (
    <div className={clsx("flex-none h-[7.5px] w-[15px]", additionalClassNames)}>
      <div className="relative size-full">
        <div className="absolute inset-[-15%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeroiconsMiniChevronRight({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute bottom-1/4 flex items-center justify-center left-[35%] right-[35%] top-1/4">
        <div className="-rotate-90 flex-none h-[6px] w-[10px]">
          <div className="relative size-full" data-name="Vector (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
              {children}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text, children }: React.PropsWithChildren<Text5Props>) {
  return (
    <Wrapper1>
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#3e3e3e] text-[16px] uppercase">{text}</p>
      <HeroiconsMiniChevronRight>{children}</HeroiconsMiniChevronRight>
    </Wrapper1>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative shrink-0 size-[24px]">
      <div aria-hidden="true" className="absolute border border-[#b4b4b4] border-solid inset-0 pointer-events-none" />
      <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#b4b4b4] text-[12px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="absolute bg-[#8b4513] content-stretch flex gap-[4px] items-center justify-center left-[239px] px-[8px] py-[4px] rounded-[100px] top-[12px]">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="heroicons-solid/star">
        <div className="absolute inset-[10.01%_8.72%_10.93%_8.72%]" data-name="Star 5 (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2099 12.6494">
            <path clipRule="evenodd" d={svgPaths.p360e8170} fill="var(--fill-0, #FFE605)" fillRule="evenodd" id="Star 5 (Stroke)" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{text}</p>
    </div>
  );
}
type InfoCategoryContainerProps = {
  text: string;
  text1: string;
};

function InfoCategoryContainer({ text, text1 }: InfoCategoryContainerProps) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[12px] uppercase w-full">{text}</p>
      <p className="capitalize font-['Playfair_Display:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#3e3e3e] text-[28px] w-full">{text1}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text, children }: React.PropsWithChildren<Text2Props>) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-solid border-t inset-0 pointer-events-none" />
      <Text5 text={text}>{children}</Text5>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text, children }: React.PropsWithChildren<Text1Props>) {
  return (
    <Wrapper additionalClassNames="bg-white">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#3e3e3e] text-[16px]">{text}</p>
      <HeroiconsMiniChevronRight>{children}</HeroiconsMiniChevronRight>
    </Wrapper>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center p-[4px] relative rounded-[10px] shrink-0 w-[26px]">
      <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3e3e3e] text-[10px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function Helper() {
  return (
    <div className="relative rounded-[2px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function HeroiconsMiniChevronDown() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute bottom-[35%] left-1/4 right-1/4 top-[35%]" data-name="Vector (Stroke)">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
          <path clipRule="evenodd" d={svgPaths.p2bf3180} fill="var(--fill-0, #3E3E3E)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

export default function ProductListOpen() {
  return (
    <div className="bg-white relative size-full" data-name="Product List/Open">
      <div className="absolute content-stretch flex items-center justify-between left-[42px] top-[64px] w-[1345px]" data-name="Header">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#3e3e3e] text-[0px] text-[48px] uppercase whitespace-nowrap">
          <span className="leading-[1.3] text-[#8b4513]">M</span>
          <span className="leading-[1.3]">odeva</span>
        </p>
        <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3e3e3e] text-[18px] whitespace-nowrap">Catalog</p>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="heroicons-outline/chevron-down">
              <div className="absolute flex inset-[34.38%_18.75%_34.37%_18.75%] items-center justify-center">
                <div className="flex-none h-[7.5px] rotate-180 w-[15px]">
                  <div className="relative size-full">
                    <div className="absolute inset-[-12%_-6%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7.75">
                        <path d="M0.75 7L7 0.75L13.25 7" id="Vector 335" stroke="var(--stroke-0, #3E3E3E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3e3e3e] text-[18px] whitespace-nowrap">Sale</p>
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3e3e3e] text-[18px] whitespace-nowrap">New Arrival</p>
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3e3e3e] text-[18px] whitespace-nowrap">About</p>
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="bg-[#fafafa] content-stretch flex gap-[8px] items-start p-[8px] relative shrink-0 w-[214px]">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="heroicons-outline/magnifying-glass">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <div className="absolute inset-[-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                    <path d={svgPaths.p109d7d70} id="Vector" stroke="var(--stroke-0, #B6B6B6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#b6b6b6] text-[14px]">Search</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/user">
            <div className="absolute inset-[9.38%_18.75%]" data-name="Vector">
              <div className="absolute inset-[-3.85%_-5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4977 21">
                  <g id="Vector">
                    <path d={svgPaths.p35b96c00} stroke="var(--stroke-0, #3E3E3E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p3b68d280} stroke="var(--stroke-0, #3E3E3E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/shopping-cart">
            <div className="absolute inset-[12.5%_9.83%_12.5%_9.38%]" data-name="Vector">
              <div className="absolute inset-[-4.17%_-3.87%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8917 19.5">
                  <path d={svgPaths.p1210300} id="Vector" stroke="var(--stroke-0, #3E3E3E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#8b4513] content-stretch flex flex-col gap-[36px] items-center left-0 px-[42px] py-[48px] text-white top-[2152px]">
        <div className="content-stretch flex gap-[96px] items-start relative shrink-0 w-[1356px]">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
            <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[0px] text-[48px] uppercase w-[min-content]">
              <span className="leading-[1.3]">M</span>
              <span className="leading-[1.3]">odeva</span>
            </p>
            <div className="content-stretch flex font-['Lato:Regular',sans-serif] items-start leading-[1.35] not-italic relative shrink-0 text-[12px]">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[67px]">
                <p className="relative shrink-0 w-full">WhatsApp</p>
                <p className="relative shrink-0 w-full">Email</p>
                <p className="relative shrink-0 w-full">Address</p>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <p className="relative shrink-0 w-[223px]">: +62 859 9999 999</p>
                <p className="relative shrink-0 w-[223px]">: hello@modeva.com</p>
                <p className="relative shrink-0 w-[223px]">: Lorem ipsum street Block B Number 08, Jakarta, Indonesia, 12345</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[42px] items-start leading-[1.35] min-h-px min-w-px not-italic relative">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[173px]">
              <p className="font-['Lato:Bold',sans-serif] relative shrink-0 text-[14px] w-full">Menu</p>
              <div className="content-stretch flex flex-col font-['Lato:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[12px] w-full">
                <p className="relative shrink-0 w-full">Sale</p>
                <p className="relative shrink-0 w-full">New Arrivals</p>
                <p className="relative shrink-0 w-full">Formal Men</p>
                <p className="relative shrink-0 w-full">Formal Woman</p>
                <p className="relative shrink-0 w-full">Casual Men</p>
                <p className="relative shrink-0 w-full">Casual Woman</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[173px]">
              <p className="font-['Lato:Bold',sans-serif] relative shrink-0 text-[14px] w-full">Get Help</p>
              <div className="content-stretch flex flex-col font-['Lato:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[12px] w-full">
                <p className="relative shrink-0 w-full">FAQ</p>
                <p className="relative shrink-0 w-full">Customer Service</p>
                <p className="relative shrink-0 w-full">Refund and Return</p>
                <p className="relative shrink-0 w-full">Terms and Conditions</p>
                <p className="relative shrink-0 w-full">Shipping</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[173px]">
              <p className="font-['Lato:Bold',sans-serif] relative shrink-0 text-[14px] w-full">Account</p>
              <div className="content-stretch flex flex-col font-['Lato:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[12px] w-full">
                <p className="relative shrink-0 w-full">My Account</p>
                <p className="relative shrink-0 w-full">My Orders</p>
                <p className="relative shrink-0 w-full">Vouchers and Discounts</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col font-['Lato:Light',sans-serif] gap-[4px] items-center leading-[1.35] not-italic relative shrink-0 text-[12px] text-center whitespace-nowrap">
          <p className="relative shrink-0">{`All rights reserved `}</p>
          <p className="relative shrink-0">Copyright 2023 By Modeva Fashion</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[48px] items-end left-[42px] top-[190px]">
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
          <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#3e3e3e] text-[76px] uppercase w-[592px]">All Products</p>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1356px]">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[323px]">
              <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
                <div className="bg-[#e8e1de] relative shrink-0 w-full">
                  <Wrapper1>
                    <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#3e3e3e] text-[16px] uppercase">category</p>
                    <HeroiconsMiniChevronDown />
                  </Wrapper1>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[299px]">
                  <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
                    <Wrapper>
                      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#3e3e3e] text-[16px]">Woman</p>
                      <HeroiconsMiniChevronDown />
                    </Wrapper>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[275px]">
                      <Wrapper>
                        <Helper />
                        <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#3e3e3e] text-[16px]">Dress</p>
                        <Text text="99+" />
                      </Wrapper>
                      <Wrapper>
                        <Helper />
                        <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#3e3e3e] text-[16px]">Shirt</p>
                        <Text text="37" />
                      </Wrapper>
                    </div>
                  </div>
                  <Text1 text="Man">
                    <path clipRule="evenodd" d={svgPaths.p2ae3a500} fill="var(--fill-0, #3E3E3E)" fillRule="evenodd" id="Vector (Stroke)" />
                  </Text1>
                  <Text1 text="Unisex">
                    <path clipRule="evenodd" d={svgPaths.p2ae3a500} fill="var(--fill-0, #3E3E3E)" fillRule="evenodd" id="Vector (Stroke)" />
                  </Text1>
                </div>
              </div>
              <Text2 text="price">
                <path clipRule="evenodd" d={svgPaths.p2ae3a500} fill="var(--fill-0, #3E3E3E)" fillRule="evenodd" id="Vector (Stroke)" />
              </Text2>
              <div className="relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#ebebeb] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
                <Text5 text="Size">
                  <path clipRule="evenodd" d={svgPaths.p2ae3a500} fill="var(--fill-0, #3E3E3E)" fillRule="evenodd" id="Vector (Stroke)" />
                </Text5>
              </div>
              <Text2 text="Color">
                <path clipRule="evenodd" d={svgPaths.p2ae3a500} fill="var(--fill-0, #3E3E3E)" fillRule="evenodd" id="Vector (Stroke)" />
              </Text2>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="products-container">
                <Product>
                  <div className="h-[420px] relative shrink-0 w-[315px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle132} />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="info-product-container">
                    <InfoCategoryContainer text="Jacket" text1="Brown Leather jacket" />
                    <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[16px] w-full">IDR 300.000</p>
                  </div>
                  <Text3 text="4.95" />
                </Product>
                <Product>
                  <div className="h-[420px] relative shrink-0 w-[315px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle133} />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="info-product-container">
                    <InfoCategoryContainer text="shirt" text1="Black Yellow Square Shirt" />
                    <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[16px] w-full">IDR 300.000</p>
                  </div>
                  <Text3 text="4.95" />
                </Product>
                <Product>
                  <div className="h-[420px] relative shrink-0 w-[315px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle134} />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="info-product-container">
                    <InfoCategoryContainer text="shirt" text1="white men formal shirt" />
                    <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[16px] w-full">IDR 300.000</p>
                  </div>
                  <Text3 text="4.95" />
                </Product>
              </div>
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="products-container">
                <Product>
                  <div className="h-[420px] relative shrink-0 w-[315px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle135} />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="info-product-container">
                    <InfoCategoryContainer text="hoodie and sweater" text1="unisex orange sweater" />
                    <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[16px] w-full">IDR 300.000</p>
                  </div>
                  <Text3 text="4.95" />
                </Product>
                <Product>
                  <div className="h-[420px] relative shrink-0 w-[315px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle136} />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="info-product-container">
                    <InfoCategoryContainer text="Hoodie and Sweater" text1="T-shirt Cotton 30S" />
                    <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[16px] w-full">IDR 300.000</p>
                  </div>
                  <Text3 text="4.95" />
                </Product>
                <Product>
                  <div className="h-[420px] relative shrink-0 w-[315px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle137} />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="info-product-container">
                    <InfoCategoryContainer text="Hoodie and Sweater" text1="White Oversize Cotton" />
                    <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[16px] w-full">IDR 300.000</p>
                  </div>
                  <Text3 text="4.95" />
                </Product>
              </div>
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="products-container">
                <Product>
                  <div className="h-[420px] relative shrink-0 w-[315px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle138} />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="info-product-container">
                    <InfoCategoryContainer text="Jacket" text1="white men formal shirt" />
                    <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[16px] w-full">IDR 300.000</p>
                  </div>
                  <Text3 text="4.95" />
                </Product>
                <Product>
                  <div className="h-[420px] relative shrink-0 w-[315px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle139} />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="info-product-container">
                    <InfoCategoryContainer text="Hoodie and Sweater" text1="white woman formal shirt" />
                    <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[16px] w-full">IDR 300.000</p>
                  </div>
                  <Text3 text="4.95" />
                </Product>
                <Product>
                  <div className="h-[420px] relative shrink-0 w-[315px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle140} />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="info-product-container">
                    <InfoCategoryContainer text="Hoodie and Sweater" text1="Formal Shirt Men" />
                    <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[16px] w-full">IDR 300.000</p>
                  </div>
                  <Text3 text="4.95" />
                </Product>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="heroicons-outline/chevron-left">
            <div className="absolute flex inset-[18.75%_34.37%_18.75%_34.38%] items-center justify-center">
              <Frame94827Helper additionalClassNames="-rotate-90">
                <path d={svgPaths.p259324a0} id="Vector 335" stroke="var(--stroke-0, #EBEBEB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </Frame94827Helper>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative shrink-0 size-[24px]">
            <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none" />
            <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3e3e3e] text-[12px] uppercase whitespace-nowrap">1</p>
          </div>
          <Text4 text="2" />
          <Text4 text="3" />
          <Text4 text="4" />
          <Text4 text="5" />
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#b4b4b4] text-[12px] uppercase whitespace-nowrap">...</p>
          <Text4 text="10" />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="heroicons-outline/chevron-right">
            <div className="absolute flex inset-[18.75%_34.38%_18.75%_34.37%] items-center justify-center">
              <Frame94827Helper additionalClassNames="rotate-90">
                <path d={svgPaths.p259324a0} id="Vector 335" stroke="var(--stroke-0, #B4B4B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </Frame94827Helper>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#8b4513] h-[40px] left-0 top-0 w-[1440px]" data-name="OSM Banner">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pr-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[0px] text-[16px] text-center text-white">
              <span className="leading-[16px]">{`Discount 20% For New Member, `}</span>
              <span className="font-['Lato:ExtraBold',sans-serif] leading-[16px]">ONLY FOR TODAY</span>
              <span className="leading-[16px]">!!</span>
            </p>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="heroicons-solid/x-mark">
              <div className="absolute inset-[21.88%]" data-name="Vector (Stroke)">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                  <path clipRule="evenodd" d={svgPaths.p38fed4b0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}