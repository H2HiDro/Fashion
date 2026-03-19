export function Footer() {
  return (
    <footer className="bg-[#8b4513] w-full text-white py-[64px] pb-[32px]">
      <div className="max-w-[1440px] mx-auto px-[42px] flex flex-col items-center">
        <div className="w-full flex justify-between items-start">
          <div className="flex flex-col gap-[8px] items-start w-[320px]">
             <p className="font-['Playfair_Display',serif] font-medium text-[48px] uppercase leading-[1.3]">
               Modeva
             </p>
             <div className="flex font-['Lato',sans-serif] text-[12px] leading-[1.35] mt-[16px]">
               <div className="flex flex-col gap-[4px] w-[80px]">
                 <p>WhatsApp</p>
                 <p>Email</p>
                 <p>Address</p>
               </div>
               <div className="flex flex-col gap-[4px] flex-1 text-gray-200">
                 <p>: +62 859 9999 999</p>
                 <p>: hello@modeva.com</p>
                 <p>: Lorem ipsum street Block B Number 08, Jakarta, Indonesia, 12345</p>
               </div>
             </div>
          </div>
          
          <div className="flex gap-[42px] justify-end">
             <div className="flex flex-col gap-[12px] w-[173px]">
               <p className="font-['Lato',sans-serif] font-bold text-[14px]">Menu</p>
               <div className="flex flex-col gap-[8px] text-[12px] text-gray-200 cursor-pointer">
                 <p className="hover:underline">Sale</p>
                 <p className="hover:underline">New Arrivals</p>
                 <p className="hover:underline">Formal Men</p>
                 <p className="hover:underline">Formal Woman</p>
                 <p className="hover:underline">Casual Men</p>
                 <p className="hover:underline">Casual Woman</p>
               </div>
             </div>
             <div className="flex flex-col gap-[12px] w-[173px]">
               <p className="font-['Lato',sans-serif] font-bold text-[14px]">Get Help</p>
               <div className="flex flex-col gap-[8px] text-[12px] text-gray-200 cursor-pointer">
                 <p className="hover:underline">FAQ</p>
                 <p className="hover:underline">Customer Service</p>
                 <p className="hover:underline">Refund and Return</p>
                 <p className="hover:underline">Terms and Conditions</p>
                 <p className="hover:underline">Shipping</p>
               </div>
             </div>
             <div className="flex flex-col gap-[12px] w-[173px]">
               <p className="font-['Lato',sans-serif] font-bold text-[14px]">Account</p>
               <div className="flex flex-col gap-[8px] text-[12px] text-gray-200 cursor-pointer">
                 <p className="hover:underline">My Account</p>
                 <p className="hover:underline">My Orders</p>
                 <p className="hover:underline">Vouchers and Discounts</p>
               </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center font-['Lato',sans-serif] text-[12px] font-light opacity-80 mt-[64px]">
          <p>All rights reserved</p>
          <p>Copyright 2023 By Modeva Fashion</p>
        </div>
      </div>
    </footer>
  );
}
