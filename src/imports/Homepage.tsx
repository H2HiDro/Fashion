import image_47cb86094f1dcc656b3aeb92ba777d18c2adb1df from 'figma:asset/47cb86094f1dcc656b3aeb92ba777d18c2adb1df.png'
import image_dd8636e27d9b61dbdc69c74c475667097c4a9ad5 from 'figma:asset/dd8636e27d9b61dbdc69c74c475667097c4a9ad5.png'
import image_3dfc5a08dd675e4b709851238a5b18b5fba80863 from 'figma:asset/3dfc5a08dd675e4b709851238a5b18b5fba80863.png'
import image_b66d9197d57bd168fa29c854fea92768b0f9d4be from 'figma:asset/b66d9197d57bd168fa29c854fea92768b0f9d4be.png'
import image_f08af141e39379526083762555e7988bcbf033cd from 'figma:asset/f08af141e39379526083762555e7988bcbf033cd.png'
import image_c36d31d93f54f43807109eed47ab5c0be93ede65 from 'figma:asset/c36d31d93f54f43807109eed47ab5c0be93ede65.png'
import clsx from "clsx";
import svgPaths from "./svg-bbdfrzi9o8";
import imgFrame1361 from "figma:asset/f43a681d7b8898aabfd20ba4cce7738f6423baa8.png";
import imgRectangle3 from "figma:asset/d35567818222b2286b78df3d7b03f99b6c046725.png";

// New category images from Unsplash
const imgFormalWoman = "https://images.unsplash.com/photo-1771730896851-d20644961c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBicm93biUyMGNhcmRpZ2FuJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzM3MjE5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgFormalMen = "https://images.unsplash.com/photo-1712773663204-9dce38ddae57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBicm93biUyMHN1aXQlMjBmb3JtYWx8ZW58MXx8fHwxNzczNzIxOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgCasualStyle = "https://images.unsplash.com/photo-1758532758701-49b79820ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdoaXRlJTIwZHJlc3MlMjBjYXN1YWwlMjBzdHlsZXxlbnwxfHx8fDE3NzM3MjE5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

import imgRectangle133 from "figma:asset/41e09ff70dac848d36b787163f2d6fc87b806080.png";
import imgRectangle134 from "figma:asset/c821e3b385057f30e8a04b4124732d426c8d0332.png";
import imgRectangle135 from "figma:asset/e38106164a677189095f3e59f420ccfd8728c180.png";
import imgRectangle132 from "figma:asset/c05927889e75dfeb63aa44a306abb8341db0136b.png";
import imgRectangle136 from "figma:asset/f74a6267bf8881a449eb9503e71f59dfafadb519.png";
import imgRectangle137 from "figma:asset/8ca7acecfad1d6cc2cf1efa9c94a34a079c166b6.png";
import imgRectangle138 from "figma:asset/3ef3b7dba337cfedf7f78ee0f538ba139995478f.png";
import imgRectangle139 from "figma:asset/e801d089fbd6e677a1f328357e49b69f04251af1.png";
import imgRectangle140 from "figma:asset/96cf55fdb8126b98038135333b3464a2da0db086.png";
import imgRectangle141 from "figma:asset/63c4bb7ad567426b11730338b2f846512f74bf79.png";
import imgRectangle142 from "figma:asset/23cc111a5bbbd7de37b2b5a69adff9a04f860c44.png";
import imgRectangle143 from "figma:asset/a0f7c050fc685b903b63ef01361934b1332e54c0.png";

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[24px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[6.25%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        {children}
      </svg>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {children}
      </div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f2f2f2] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f2f2f2] flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Product({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative">
        <div className="h-[420px] relative shrink-0 w-[315px]">{children}</div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[12px] uppercase w-full">{"Product Category"}</p>
            <p className="capitalize font-['Playfair_Display:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#3e3e3e] text-[28px] w-full">{"Product Name"}</p>
          </div>
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[16px] w-full">{"IDR XXX"}</p>
        </div>
        <div className="absolute bg-[#8b4513] content-stretch flex gap-[4px] items-center justify-center left-[239px] px-[8px] py-[4px] rounded-[100px] top-[12px]">
          <Wrapper>
            <path clipRule="evenodd" d={svgPaths.p360e8170} fill="var(--fill-0, #FFE605)" fillRule="evenodd" id="Star 5 (Stroke)" />
          </Wrapper>
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{"4.95"}</p>
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute inset-[10.01%_8.72%_10.93%_8.72%]" data-name="Star 5 (Stroke)">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2099 12.6494">
          {children}
        </svg>
      </div>
    </div>
  );
}
type ButtonHeroiconsMiniArrowRightProps = {
  additionalClassNames?: string;
};

function ButtonHeroiconsMiniArrowRight({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonHeroiconsMiniArrowRightProps>) {
  return (
    <div className={clsx("overflow-clip relative shrink-0", additionalClassNames)}>
      <div className="absolute flex inset-[20%_15%] items-center justify-center">
        <div className="-rotate-90 flex-none h-[14px] w-[12px]">
          <div className="relative size-full" data-name="Vector (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
              {children}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroiconsSolidStar() {
  return (
    <Wrapper>
      <path clipRule="evenodd" d={svgPaths.p9494730} fill="var(--fill-0, #FFE605)" fillRule="evenodd" id="Star 5 (Stroke)" />
    </Wrapper>
  );
}

function StarContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <HeroiconsSolidStar />
      <HeroiconsSolidStar />
      <HeroiconsSolidStar />
      <HeroiconsSolidStar />
      <HeroiconsSolidStar />
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic relative text-[12px]">
      <p className="relative shrink-0 text-[#3e3e3e] uppercase w-full">{text}</p>
      <p className="relative shrink-0 text-[#757575] w-full">{text1}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#3e3e3e] text-[28px] w-full">{text}</p>
      <Helper />
    </div>
  );
}

function Helper() {
  return <p className="font-['Lato:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#757575] text-[12px] w-full">{`Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. `}</p>;
}

function Image() {
  return (
    <div className="relative shrink-0 size-[200px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={image_c36d31d93f54f43807109eed47ab5c0be93ede65} />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col h-full items-start justify-between py-[16px] relative", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
        <p className="font-['Playfair_Display:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#3e3e3e] text-[28px] w-[210px]">{"Product Name in Here"}</p>
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[16px] w-[210px]">{"IDR 300.000"}</p>
      </div>
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3e3e3e] text-[14px] tracking-[1.4px] underline w-[210px]">{text}</p>
    </div>
  );
}
type ButtonProps = {
  className?: string;
  icon?: boolean;
  size?: "Large" | "Default";
  text?: string;
};

function Button({ className, icon = true, size = "Large", text = "Button" }: ButtonProps) {
  const isDefault = size === "Default";
  const isLarge = size === "Large";
  return (
    <div className={className || `bg-[#8b4513] relative ${isDefault ? "" : "w-[592px]"}`}>
      <div className="flex flex-row items-center size-full">
        <div className={`content-stretch flex gap-[8px] items-center relative ${isDefault ? "p-[16px]" : "p-[24px] w-full"}`}>
          {isLarge && <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-center text-white tracking-[2px] uppercase">{text}</p>}
          {isLarge && icon && (
            <ButtonHeroiconsMiniArrowRight additionalClassNames="size-[24px]">
              <path clipRule="evenodd" d={svgPaths.pf84d000} fill="var(--fill-0, #0F172A)" fillRule="evenodd" id="Vector (Stroke)" />
            </ButtonHeroiconsMiniArrowRight>
          )}
          {isDefault && <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1.6px] uppercase whitespace-nowrap">{text}</p>}
          {isDefault && icon && (
            <ButtonHeroiconsMiniArrowRight additionalClassNames="size-[20px]">
              <path clipRule="evenodd" d={svgPaths.pf84d000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
            </ButtonHeroiconsMiniArrowRight>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-white relative size-full" data-name="Homepage">
      <div className="absolute h-[1024px] left-0 top-0 w-[1440px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#820202] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame1361} />
        </div>
      </div>
      <div className="absolute content-stretch flex items-center justify-between left-[42px] top-[64px] w-[1345px]" data-name="Header">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-[48px] text-white uppercase whitespace-nowrap">
          <span className="leading-[1.3] text-[#8b4513]">M</span>
          <span className="leading-[1.3]">odeva</span>
        </p>
        <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Catalog</p>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="heroicons-outline/chevron-down">
              <div className="absolute flex inset-[34.38%_18.75%_34.37%_18.75%] items-center justify-center">
                <div className="flex-none h-[7.5px] rotate-180 w-[15px]">
                  <div className="relative size-full">
                    <div className="absolute inset-[-12%_-6%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7.75">
                        <path d="M0.75 7L7 0.75L13.25 7" id="Vector 335" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Sale</p>
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">New Arrival</p>
          <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">About</p>
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
                    <path d={svgPaths.p35b96c00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p3b68d280} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/shopping-cart">
            <div className="absolute inset-[12.5%_9.83%_12.5%_9.38%]" data-name="Vector">
              <div className="absolute inset-[-4.17%_-3.87%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8917 19.5">
                  <path d={svgPaths.p1210300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[16px] items-start left-[42px] text-white top-[calc(50%-2401.5px)] uppercase">
        <p className="font-['Lato:Regular',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[16px] tracking-[1.6px] w-[min-content]">made in Indonesia, dedicated to Indonesia</p>
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[76px] w-[870px]">Discover the Art of Dressing Up</p>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[16px] items-start left-[956px] top-[554px]">
        <Image />
        <div className="relative self-stretch shrink-0">
          <Text text="SHOP NOW" additionalClassNames="pr-[16px]" />
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[16px] items-start left-[957px] top-[777px]">
        <div className="relative self-stretch shrink-0">
          <Text text="SHOP NOW" additionalClassNames="pl-[16px]" />
        </div>
        <Image />
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-start left-1/2 top-[955px]">
        <p className="font-['Lato:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1.6px] uppercase whitespace-nowrap">scroll down</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/chevron-double-down">
          <div className="absolute inset-[21.88%_18.75%]" data-name="Vector">
            <div className="absolute inset-[-5.56%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15">
                <path d={svgPaths.p158bc600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[64px] items-end left-1/2 pt-[64px] px-[42px] top-[1024px] w-[1440px]">
        <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[1357px]">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
            <Wrapper4 additionalClassNames="h-[374px] w-[666px]">
              <img alt="Formal Woman Fashion" className="absolute max-w-none object-cover size-full" src={imgFormalWoman} />
              <div className="absolute bg-[rgba(139,69,19,0.2)] inset-0" />
            </Wrapper4>
            <Wrapper4 additionalClassNames="h-[374px] w-[666px]">
              <img alt="Formal Men Fashion" className="absolute max-w-none object-cover size-full" src={imgFormalMen} />
              <div className="absolute bg-[rgba(139,69,19,0.23)] inset-0" />
            </Wrapper4>
            <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] left-[30px] text-[48px] text-white top-[562px] uppercase whitespace-nowrap">formal Men</p>
            <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] left-[30px] text-[48px] text-white top-[156px] uppercase whitespace-nowrap">formal woman</p>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="Casual Style Fashion" className="absolute max-w-none object-cover size-full" src={imgCasualStyle} />
              <div className="absolute bg-[rgba(139,69,19,0.2)] inset-0" />
            </div>
          </div>
          <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] left-[753px] text-[48px] text-white top-[359px] uppercase whitespace-nowrap">Casual Style</p>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="products">
          <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#3e3e3e] text-[76px] uppercase w-[1356px]">the best dress for the best woman</p>
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1356px]" data-name="products-container">
            <Product>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={image_f08af141e39379526083762555e7988bcbf033cd} />
            </Product>
            <Product>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={image_b66d9197d57bd168fa29c854fea92768b0f9d4be} />
            </Product>
            <Product>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={image_3dfc5a08dd675e4b709851238a5b18b5fba80863} />
            </Product>
            <Product>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle138} />
            </Product>
          </div>
          <Button className="bg-[#8b4513] relative shrink-0" size="Default" text="SEE MORE" />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="products">
          <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#3e3e3e] text-[76px] uppercase w-[1356px]">{`Best outfit for your happiness `}</p>
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1356px]" data-name="products-container">
            <Product>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={image_dd8636e27d9b61dbdc69c74c475667097c4a9ad5} />
            </Product>
            <Product>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={image_47cb86094f1dcc656b3aeb92ba777d18c2adb1df} />
            </Product>
            <Product>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle141} />
            </Product>
            <Product>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle142} />
            </Product>
          </div>
          <Button className="bg-[#8b4513] relative shrink-0" size="Default" text="SEE MORE" />
        </div>
        <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
          <Wrapper2>
            <Wrapper1>
              <div className="bg-[#8b4513] overflow-clip relative rounded-[32px] shrink-0 size-[64px]">
                <div className="absolute left-[20px] overflow-clip size-[24px] top-[20px]" data-name="heroicons-solid/hand-thumb-up">
                  <div className="absolute inset-[8.33%_6.25%_16.67%_6.25%]" data-name="Union">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 18">
                      <g id="Union">
                        <path d={svgPaths.p3c8fdb00} fill="var(--fill-0, white)" />
                        <path d={svgPaths.pdf50480} fill="var(--fill-0, white)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
                <p className="font-['Playfair_Display:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#3e3e3e] text-[28px] text-center w-full whitespace-pre-wrap">{`100% Satisfaction Guaranteed  `}</p>
                <Helper />
              </div>
            </Wrapper1>
          </Wrapper2>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[619px]">
            <Wrapper3>
              <Wrapper6>
                <div className="bg-[#8b4513] overflow-clip relative rounded-[32px] shrink-0 size-[64px]">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] overflow-clip size-[24px] top-1/2" data-name="heroicons-solid/phone">
                    <Wrapper5>
                      <path clipRule="evenodd" d={svgPaths.p270fce00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
                    </Wrapper5>
                  </div>
                </div>
                <Text1 text="24/7 Online Service" />
              </Wrapper6>
            </Wrapper3>
            <Wrapper3>
              <Wrapper6>
                <div className="bg-[#8b4513] overflow-clip relative rounded-[32px] shrink-0 size-[64px]">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] overflow-clip size-[24px] top-1/2" data-name="heroicons-solid/rocket-launch">
                    <Wrapper5>
                      <g id="Union">
                        <path clipRule="evenodd" d={svgPaths.p33ea3b80} fill="var(--fill-0, white)" fillRule="evenodd" />
                        <path d={svgPaths.pe3dbf00} fill="var(--fill-0, white)" />
                      </g>
                    </Wrapper5>
                  </div>
                </div>
                <Text1 text="Fast Delivery" />
              </Wrapper6>
            </Wrapper3>
          </div>
          <Wrapper2>
            <Wrapper1>
              <div className="bg-[#8b4513] overflow-clip relative rounded-[32px] shrink-0 size-[64px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.25px)] overflow-clip size-[24px] top-1/2" data-name="heroicons-solid/credit-card">
                  <div className="absolute inset-[15.63%_6.25%]" data-name="Subtract">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.5">
                      <g id="Subtract">
                        <path d={svgPaths.p310b9800} fill="var(--fill-0, white)" />
                        <path clipRule="evenodd" d={svgPaths.p2bb75300} fill="var(--fill-0, white)" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
                <p className="font-['Playfair_Display:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#3e3e3e] text-[28px] text-center w-full">Payment With Secure System</p>
                <Helper />
              </div>
            </Wrapper1>
          </Wrapper2>
        </div>
        <Wrapper4 additionalClassNames="h-[763px] w-full">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle143} />
          <div className="absolute bg-[rgba(139,69,19,0.35)] inset-0" />
        </Wrapper4>
      </div>
      <div className="absolute bg-[#8b4513] h-[519px] left-0 top-[5156px] w-[1440px]" />
      <div className="-translate-x-1/2 absolute bg-[#f2f2f2] content-stretch flex flex-col items-center left-[calc(50%-0.5px)] overflow-clip py-[96px] top-[4980px] w-[1357px]">
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1568px]">
          <div className="bg-white content-stretch flex flex-col gap-[12px] h-[160px] items-start p-[16px] relative shrink-0 w-[400px]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                <div className="bg-[#4d0e0e] rounded-[18px] shrink-0 size-[36px]" />
                <Helper1 text="Cynthia caroline" text1="15 July 2023" />
              </div>
              <StarContainer />
            </div>
            <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#757575] text-[12px] w-full">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.</p>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[12px] h-[160px] items-start p-[16px] relative shrink-0 w-[400px]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                <div className="bg-[#4d0e0e] rounded-[18px] shrink-0 size-[36px]" />
                <Helper1 text="Cynthia caroline" text1="15 July 2023" />
              </div>
              <StarContainer />
            </div>
            <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#757575] text-[12px] w-full">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.</p>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[12px] h-[160px] items-start p-[16px] relative shrink-0 w-[400px]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                <div className="bg-[#4d0e0e] rounded-[18px] shrink-0 size-[36px]" />
                <Helper1 text="Cynthia caroline" text1="15 July 2023" />
              </div>
              <StarContainer />
            </div>
            <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#757575] text-[12px] w-full">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.</p>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[12px] h-[160px] items-start p-[16px] relative shrink-0 w-[400px]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                <div className="bg-[#4d0e0e] rounded-[18px] shrink-0 size-[36px]" />
                <Helper1 text="Cynthia caroline" text1="15 July 2023" />
              </div>
              <StarContainer />
            </div>
            <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#757575] text-[12px] w-full">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.</p>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative shrink-0 w-[400px]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[270px]">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                <div className="bg-[#4d0e0e] rounded-[18px] shrink-0 size-[36px]" />
                <Helper1 text="Cynthia caroline" text1="15 July 2023" />
              </div>
              <StarContainer />
            </div>
            <p className="font-['Lato:Regular',sans-serif] h-[52px] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[12px] w-full">Lorem ipsum dolor sit amet consectetur. Sit gravida porta tellus imperdiet ut diam arcu varius neque. Eu amet leo justo aliquam. Enim proin mi nisl.</p>
          </div>
        </div>
      </div>
      <div className="absolute left-[673px] overflow-clip size-[96px] top-[4487px]" data-name="heroicons-solid/play-circle">
        <div className="absolute inset-[2.34%_77.34%_77.34%_2.34%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
            <path d={svgPaths.p42ee800} fill="var(--fill-0, white)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[36px] items-center left-[42px] text-white top-[5388px]">
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