import clsx from "clsx";
import svgPaths from "./svg-hx3p89laik";
import imgFrame1031 from "figma:asset/39607da99bd22b41752a8594e0150923aee9b40f.png";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#3e3e3e] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full">
      <Wrapper>
        <path clipRule="evenodd" d={svgPaths.p1f77ea00} fill="var(--fill-0, #787878)" fillRule="evenodd" id="Subtract" />
      </Wrapper>
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#787878] text-[12px]">{children}</p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute inset-[9.38%]" data-name="Subtract">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
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
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return <Wrapper1>{text}</Wrapper1>;
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
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 16.8">
                <path clipRule="evenodd" d={svgPaths.p3031d800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </ButtonHeroiconsMiniArrowRight>
          )}
          {isDefault && <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1.6px] uppercase whitespace-nowrap">{text}</p>}
          {isDefault && icon && (
            <ButtonHeroiconsMiniArrowRight additionalClassNames="size-[20px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
                <path clipRule="evenodd" d={svgPaths.pf84d000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </ButtonHeroiconsMiniArrowRight>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-white relative size-full" data-name="Login">
      <div className="absolute h-[1024px] left-0 overflow-clip top-0 w-[720px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame1031} />
          <div className="absolute bg-[rgba(199,184,176,0.2)] inset-0" />
        </div>
        <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[0] left-[42px] text-[0px] text-[48px] text-white top-[24px] uppercase whitespace-nowrap">
          <span className="leading-[1.3] text-[#8b4513]">M</span>
          <span className="leading-[1.3]">odeva</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[48px] h-[1024px] items-start left-[720px] px-[64px] py-[160px] top-1/2">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] min-w-full relative shrink-0 text-[#3e3e3e] text-[76px] uppercase w-[min-content]">Sign in</p>
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0">
          <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-[592px]">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Lato:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#3e3e3e] text-[16px] uppercase w-full">Email</p>
              <Wrapper2 additionalClassNames="h-[64px]">
                <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
                  <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#bdbdbd] text-[18px]">example@mail.com</p>
                </div>
              </Wrapper2>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Lato:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#3e3e3e] text-[16px] uppercase w-full">Password</p>
              <Wrapper2 additionalClassNames="h-[56px]">
                <div className="content-stretch flex gap-[10px] items-center justify-center p-[16px] relative size-full">
                  <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#bdbdbd] text-[18px]">********</p>
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/eye-slash">
                    <div className="absolute inset-[12.5%_8.06%]" data-name="Vector">
                      <div className="absolute inset-[-4.17%_-3.73%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6304 19.5">
                          <path d={svgPaths.p2bdf1760} id="Vector" stroke="var(--stroke-0, #BDBDBD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Wrapper2>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <Wrapper1>{`Minimum 8 characters `}</Wrapper1>
                <Text text="Must contain at least 1 number" />
                <Text text="Must contain at least 1 capital case and 1 small case" />
                <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full">
                  <Wrapper>
                    <path clipRule="evenodd" d={svgPaths.p4b0b280} fill="var(--fill-0, #787878)" fillRule="evenodd" id="Subtract" />
                  </Wrapper>
                  <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#787878] text-[12px]">Must contain at least 1 symbol</p>
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-[#8b4513] relative shrink-0 w-full" />
          <p className="font-['Playfair_Display:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#3e3e3e] text-[28px] w-[min-content]">
            <span className="leading-[36px]">{`Don’t have account? `}</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[36px] underline">Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
}