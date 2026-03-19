import clsx from "clsx";
import svgPaths from "./svg-s1pi15u1j1";
import imgImage2 from "figma:asset/c79e549e4a5cbbb7a2872090fd113d687389bfe3.png";
import imgRectangle1 from "figma:asset/3bc6eb76aad40f5804dcda507f94ff9a770ebc7f.png";
import imgRectangle2 from "figma:asset/76e2b0a8cd58cf75ed5df6a54b856dc8a674b6a4.png";
import imgRectangle3 from "figma:asset/444530a074c3e7a17a50249b25d0953babd3e109.png";
import imgRectangle4 from "figma:asset/d0d1ec469615ba1dea4ef91fb18e06477d1dd42c.png";
import imgRectangle5 from "figma:asset/510976c0f6bbd5ea4f0eff6dcfe05870ef9f07e0.png";

function Frame94835Helper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-[112.8px] min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {children}
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
    <div className={clsx("content-stretch flex items-center justify-center p-[12px] relative shrink-0 w-[64px]", additionalClassNames)}>
      <p className="font-['Lato:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function ProductDetail() {
  return (
    <div className="bg-white relative size-full" data-name="Product Detail">
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
      <div className="absolute bg-[#8b4513] content-stretch flex flex-col gap-[36px] items-center left-0 px-[42px] py-[48px] text-white top-[1255px]">
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
      <div className="absolute h-[875px] left-0 top-[190px] w-[656px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute content-stretch flex gap-[23px] items-start left-0 top-[1094px] w-[656px]">
        <Frame94835Helper>
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle1} />
        </Frame94835Helper>
        <Frame94835Helper>
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle2} />
        </Frame94835Helper>
        <Frame94835Helper>
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle3} />
        </Frame94835Helper>
        <Frame94835Helper>
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle4} />
        </Frame94835Helper>
        <Frame94835Helper>
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle5} />
        </Frame94835Helper>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[calc(50%+8px)] top-[190px] w-[670px]">
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#757575] text-[24px] uppercase">man t-Shirt</p>
              <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[100px] shrink-0">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/star">
                  <div className="absolute inset-[10.01%_8.72%_10.93%_8.72%]" data-name="Star 5 (Stroke)">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8148 18.974">
                      <path clipRule="evenodd" d={svgPaths.pc6486c0} fill="var(--fill-0, #FFE605)" fillRule="evenodd" id="Star 5 (Stroke)" />
                    </svg>
                  </div>
                </div>
                <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#3e3e3e] text-[24px] uppercase whitespace-nowrap">4.95</p>
              </div>
            </div>
            <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#3e3e3e] text-[76px] uppercase w-full">White casual t-shirt</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <p className="[text-decoration-skip-ink:none] decoration-solid font-['Lato:Medium',sans-serif] leading-[1.35] line-through not-italic relative shrink-0 text-[#b4b4b4] text-[24px] uppercase whitespace-nowrap">IDR 200.000</p>
              <div className="bg-[#e90000] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
                <p className="font-['Lato:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">50%</p>
              </div>
            </div>
            <p className="font-['Lato:Medium',sans-serif] leading-[1.35] min-w-full not-italic relative shrink-0 text-[#e90000] text-[32px] uppercase w-[min-content]">IDR 100.000</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col font-['Lato:Medium',sans-serif] gap-[32px] items-start leading-[1.35] not-italic relative shrink-0 text-[#b4b4b4] text-[20px]" data-name="description">
            <p className="relative shrink-0 w-[678px]">Lorem ipsum dolor sit amet consectetur. Metus nibh dictum vel enim sollicitudin. Metus nibh a leo orci aliquam diam. Metus pretium purus augue malesuada metus. Nec suspendisse proin aliquam dolor ipsum. Quis id enim viverra et.</p>
            <p className="relative shrink-0 w-[678px]">Lorem ipsum dolor sit amet consectetur. Metus nibh dictum vel enim sollicitudin. Metus nibh a leo orci aliquam diam. Metus pretium purus augue malesuada metus. Nec suspendisse proin aliquam dolor ipsum. Quis id enim viverra et. Lorem ipsum dolor sit amet consectetur. Metus nibh dictum vel enim sollicitudin. Metus nibh a leo orci aliquam diam. Metus pretium purus augue malesuada metus. Nec suspendisse proin aliquam dolor ipsum. Quis id enim viverra et.</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="size">
            <Text text="xxs" additionalClassNames="bg-[#c7b8b0]" />
            <Text text="xs" additionalClassNames="bg-[#c7b8b0]" />
            <Text text="s" additionalClassNames="bg-[#c7b8b0]" />
            <Text text="m" additionalClassNames="bg-[#8b4513]" />
            <Text text="l" additionalClassNames="bg-[#c7b8b0]" />
            <Text text="xl" additionalClassNames="bg-[#c7b8b0]" />
            <Text text="xxl" additionalClassNames="bg-[#ebebeb]" />
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Lato:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#b4b4b4] text-[24px] whitespace-nowrap">Quantity</p>
            <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full">
              <div className="flex flex-row items-end self-stretch">
                <div className="h-full relative shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[40px] h-full items-center px-[8px] py-[12px] relative">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/minus">
                        <div className="absolute inset-[46.88%_17.71%]" data-name="Vector 615 (Stroke)">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 1.5">
                            <path clipRule="evenodd" d={svgPaths.p3408a00} fill="var(--fill-0, #3E3E3E)" fillRule="evenodd" id="Vector 615 (Stroke)" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Lato:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#3e3e3e] text-[24px] uppercase whitespace-nowrap">1</p>
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/plus">
                        <div className="absolute inset-[15.63%_15.63%_15.62%_15.63%]" data-name="Vector (Stroke)">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
                            <path clipRule="evenodd" d={svgPaths.p2f0c7f00} fill="var(--fill-0, #3E3E3E)" fillRule="evenodd" id="Vector (Stroke)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#8b4513] flex-[1_0_0] min-h-px min-w-px relative" data-name="Button">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center p-[24px] relative w-full">
                    <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-center text-white tracking-[2px] uppercase">Add To Cart</p>
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-mini/shopping-cart">
                      <div className="absolute inset-[5%_4.33%_5%_5%]" data-name="Union">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7613 21.6">
                          <g id="Union">
                            <path d={svgPaths.p2a709c00} fill="var(--fill-0, white)" />
                            <path d={svgPaths.p3c300400} fill="var(--fill-0, white)" />
                            <path d={svgPaths.p1cfd4300} fill="var(--fill-0, white)" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#8b4513] h-[40px] left-1/2 top-0 w-[1440px]" data-name="OSM Banner">
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