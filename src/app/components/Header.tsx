import { useNavigate, useLocation } from 'react-router';
import svgPaths from '../../imports/svg-bbdfrzi9o8';

type HeaderProps = {
  theme?: 'dark' | 'light';
};

export function Header({ theme = 'dark' }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#3e3e3e]';
  const searchBg = isDark ? 'bg-[#fafafa]' : 'bg-[#fafafa]';
  const strokeColor = isDark ? 'white' : '#3e3e3e';

  // Determine active menu item based on current path
  const getActiveClass = (path: string) => {
    const isActive = location.pathname === path || 
                     (path === '/products' && location.pathname.startsWith('/product'));
    return isActive ? 'font-bold underline decoration-2 underline-offset-4' : '';
  };

  return (
    <div className="absolute content-stretch flex items-center justify-between left-[42px] top-[64px] w-[1345px] z-50" data-name="HeaderNav">
      <p 
        className={`font-['Playfair_Display:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-[48px] ${textColor} uppercase whitespace-nowrap cursor-pointer`}
        onClick={() => navigate('/')}
      >
        <span className="leading-[1.3] text-[#8b4513]">M</span>
        <span className="leading-[1.3]">odeva</span>
      </p>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer">
          <p 
            className={`font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] ${textColor} whitespace-nowrap ${getActiveClass('/products')}`}
            onClick={() => navigate('/products')}
          >
            Catalog
          </p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="heroicons-outline/chevron-down">
            <div className="absolute flex inset-[34.38%_18.75%_34.37%_18.75%] items-center justify-center">
              <div className="flex-none h-[7.5px] rotate-180 w-[15px]">
                <div className="relative size-full">
                  <div className="absolute inset-[-12%_-6%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7.75">
                      <path d="M0.75 7L7 0.75L13.25 7" id="Vector 335" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p 
          className={`font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] ${textColor} whitespace-nowrap cursor-pointer ${getActiveClass('/sale')}`}
          onClick={() => navigate('/sale')}
        >
          Sale
        </p>
        <p 
          className={`font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] ${textColor} whitespace-nowrap cursor-pointer ${getActiveClass('/new-arrival')}`}
          onClick={() => navigate('/new-arrival')}
        >
          New Arrival
        </p>
        <p 
          className={`font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] ${textColor} whitespace-nowrap cursor-pointer ${getActiveClass('/about')}`}
          onClick={() => navigate('/about')}
        >
          About
        </p>
      </div>
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
        <div className={`${searchBg} content-stretch flex gap-[8px] items-start p-[8px] relative shrink-0 w-[214px]`}>
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
        <div 
          className="overflow-clip relative shrink-0 size-[24px] cursor-pointer" 
          data-name="heroicons-outline/user"
          onClick={() => navigate('/login')}
        >
          <div className="absolute inset-[9.38%_18.75%]" data-name="Vector">
            <div className="absolute inset-[-3.85%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4977 21">
                <g id="Vector">
                  <path d={svgPaths.p35b96c00} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p3b68d280} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div 
          className="overflow-clip relative shrink-0 size-[24px] cursor-pointer" 
          data-name="heroicons-outline/shopping-cart"
          onClick={() => navigate('/cart')}
        >
          <div className="absolute inset-[12.5%_9.83%_12.5%_9.38%]" data-name="Vector">
            <div className="absolute inset-[-4.17%_-3.87%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8917 19.5">
                <path d={svgPaths.p1210300} id="Vector" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}