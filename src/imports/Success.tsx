import clsx from "clsx";
import svgPaths from "./svg-2nnhjtu8k2";
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

export default function Success() {
  return (
    <div className="bg-white relative size-full" data-name="Success">
      <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[0] left-[42px] text-[#3e3e3e] text-[0px] text-[48px] top-[48px] uppercase whitespace-nowrap">
        <span className="leading-[1.3] text-[#8b4513]">M</span>
        <span className="leading-[1.3]">odeva</span>
      </p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-1/2 top-[calc(50%-0.5px)]">
        <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-[88px]" data-name="heroicons-solid/check-circle">
            <div className="absolute inset-[9.38%]" data-name="Subtract">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.5 71.5">
                <path clipRule="evenodd" d={svgPaths.p326ec900} fill="var(--fill-0, #00ED5F)" fillRule="evenodd" id="Subtract" />
              </svg>
            </div>
          </div>
          <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#3e3e3e] text-[76px] uppercase whitespace-nowrap">Payment Success!</p>
          <p className="font-['Lato:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#757575] text-[16px] text-center w-[1184px]">{`Lean back and relax, knowing our team is hard at work preparing and shipping your package swiftly. Feel free to browse our diverse product selection during this time – you might discover another item you'd like to add to your collection!`}</p>
        </div>
        <Button className="bg-[#8b4513] relative shrink-0 w-[592px]" icon={false} text="Back To Home" />
      </div>
    </div>
  );
}