import clsx from "clsx";
import svgPaths from "./svg-mus7gqg3ah";
import imgImage2 from "figma:asset/c79e549e4a5cbbb7a2872090fd113d687389bfe3.png";
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[24px] items-start relative shrink-0", additionalClassNames)}>
      <p className="font-['Lato:Regular',sans-serif] relative shrink-0 text-[#757575] w-full">{text}</p>
      <p className="font-['Lato:SemiBold',sans-serif] relative shrink-0 text-[#3e3e3e] w-full">{text1}</p>
    </div>
  );
}
type CartProductProps = {
  className?: string;
  amount?: string;
  beforeDic?: string;
  discount?: boolean;
  notes?: boolean;
  percent?: string;
  price?: string;
  productName?: string;
};

function CartProduct({ className, amount = "1", beforeDic = "IDR 200.000", discount = false, notes = true, percent = "50%", price = "IDR 100.000", productName = "White casual t-shirt" }: CartProductProps) {
  const isDiscount = discount;
  const isNotesAndNotDiscount = notes && !discount;
  const isNotNotesAndDiscount = !notes && discount;
  const isNotNotesAndNotDiscount = !notes && !discount;
  return (
    <div className={className || "relative w-[700px]"}>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
          <div className={`relative shrink-0 ${isDiscount || isNotNotesAndNotDiscount ? "h-[187px] w-[140px]" : "h-[155px] w-[116px]"}`} data-name="image 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
          <div className={`content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative ${isNotNotesAndNotDiscount ? "gap-[24px]" : "gap-[16px]"}`}>
            <div className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${isNotNotesAndNotDiscount ? "gap-[16px] leading-[1.35] not-italic text-[24px] uppercase" : isDiscount ? "gap-[12px]" : "gap-[12px] leading-[1.35] not-italic uppercase"}`}>
              {isDiscount && (
                <>
                  <p className="font-['Lato:Medium',sans-serif] leading-[1.35] min-w-full not-italic relative shrink-0 text-[#3e3e3e] text-[24px] uppercase w-[min-content]">{productName}</p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Lato:Regular',sans-serif] leading-[1.35] line-through not-italic relative shrink-0 text-[#757575] text-[20px] uppercase whitespace-nowrap">{beforeDic}</p>
                      <div className="bg-[#e90000] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
                        <p className="font-['Lato:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">{percent}</p>
                      </div>
                    </div>
                    <p className="font-['Lato:Medium',sans-serif] leading-[1.35] min-w-full not-italic relative shrink-0 text-[#e90000] text-[20px] uppercase w-[min-content]">{price}</p>
                  </div>
                </>
              )}
              {isNotesAndNotDiscount && (
                <>
                  <p className="font-['Lato:Medium',sans-serif] relative shrink-0 text-[#3e3e3e] text-[24px] w-full">{productName}</p>
                  <p className="font-['Lato:Regular',sans-serif] relative shrink-0 text-[#757575] text-[20px] w-full">{price}</p>
                </>
              )}
              {isNotNotesAndNotDiscount && (
                <>
                  <p className="font-['Lato:Medium',sans-serif] relative shrink-0 text-[#3e3e3e] w-full">{productName}</p>
                  <p className="font-['Lato:Regular',sans-serif] relative shrink-0 text-[#757575] w-full">IDR 100.000</p>
                </>
              )}
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[40px] h-[56px] items-center p-[8px] relative shrink-0">
                <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none" />
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-mini/minus">
                  <div className="absolute inset-[46.25%_20%]" data-name="Rectangle 4922 (Stroke)">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isNotNotesAndDiscount ? "0 0 12 1.5" : "0 0 14.4 1.8"}>
                      <path clipRule="evenodd" d={isNotNotesAndDiscount ? svgPaths.pa8b1200 : svgPaths.p60c3640} fill={isNotNotesAndDiscount ? "var(--fill-0, #0F172A)" : "var(--fill-0, #DADADA)"} fillRule="evenodd" id="Rectangle 4922 (Stroke)" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Lato:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#3e3e3e] text-[20px] uppercase whitespace-nowrap">{amount}</p>
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/plus">
                  <div className="absolute inset-[15.63%_15.63%_15.62%_15.63%]" data-name="Vector (Stroke)">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
                      <path clipRule="evenodd" d={svgPaths.p2f0c7f00} fill={isNotNotesAndDiscount ? "var(--fill-0, #0F172A)" : "var(--fill-0, #3E3E3E)"} fillRule="evenodd" id="Vector (Stroke)" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/trash">
                    <div className="absolute inset-[9.38%_15.63%]" data-name="Vector">
                      <div className="absolute inset-[-3.85%_-4.55%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0002 21">
                          <path d={svgPaths.p8f1c600} id="Vector" stroke={isNotNotesAndDiscount ? "var(--stroke-0, #0F172A)" : "var(--stroke-0, #929292)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Lato:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#929292] text-[20px] whitespace-nowrap">Delete</p>
                </div>
                <div className="bg-[#929292] h-px shrink-0 w-full" />
              </div>
            </div>
          </div>
        </div>
        {notes && (
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <p className="font-['Lato:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#b4b4b4] text-[20px] w-full">{`Notes: `}</p>
            <div className="h-[64px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-[12px] relative size-full">
                  <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#b4b4b4] text-[20px]">Eg: Please double check before packing.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {!notes && <p className="[text-decoration-skip-ink:none] decoration-solid font-['Lato:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#8b4513] text-[20px] underline w-full">Notes</p>}
      </div>
    </div>
  );
}

export default function Cart() {
  return (
    <div className="bg-white relative size-full" data-name="Cart">
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
      <div className="absolute bg-[#8b4513] content-stretch flex flex-col gap-[36px] items-center left-0 px-[42px] py-[48px] text-white top-[1275px]">
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
      <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] left-[43px] text-[#3e3e3e] text-[76px] top-[190px] uppercase whitespace-nowrap">Cart</p>
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[42px] top-[321px] w-[756px]">
        <CartProduct className="relative shrink-0 w-full" />
        <CartProduct className="relative shrink-0 w-full" notes={false} />
        <CartProduct className="relative shrink-0 w-full" discount />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[62.5%] top-[289px] w-[498px]">
        <p className="font-['Lato:SemiBold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#3e3e3e] text-[32px] uppercase w-[541px]">Shopping Info</p>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#ede5e1] relative shrink-0 w-full" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[#dfd1c8] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
                <div className="content-stretch flex font-['Lato:Regular',sans-serif] gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[16px] whitespace-nowrap">
                  <p className="relative shrink-0 text-[#3e3e3e]">Hooray! You have promo code!</p>
                  <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 text-[#8b4513] underline">Use promo code</p>
                </div>
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
          <div className="content-stretch flex items-start justify-between leading-[1.35] not-italic relative shrink-0 text-[24px] w-full">
            <Helper text="Subtotal" text1="Total" additionalClassNames="w-[88px]" />
            <Helper text="IDR 300.000" text1="IDR 250.000" additionalClassNames="uppercase w-[136px]" />
          </div>
        </div>
        <div className="bg-[#8b4513] relative shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[24px] relative w-full">
              <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-center text-white tracking-[2px] uppercase">PROCEED TO CHECKOUT</p>
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