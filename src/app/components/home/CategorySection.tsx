const imgFormalWoman = "https://images.unsplash.com/photo-1771730896851-d20644961c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBicm93biUyMGNhcmRpZ2FuJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzM3MjE5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgFormalMen = "https://images.unsplash.com/photo-1712773663204-9dce38ddae57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBicm93biUyMHN1aXQlMjBmb3JtYWx8ZW58MXx8fHwxNzczNzIxOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgCasualStyle = "https://images.unsplash.com/photo-1758532758701-49b79820ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdoaXRlJTIwZHJlc3MlMjBjYXN1YWwlMjBzdHlsZXxlbnwxfHx8fDE3NzM3MjE5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function CategorySection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto pt-[64px] px-[42px] pb-[64px]">
      <div className="flex gap-[32px] w-full">
        {/* Left Column (Stacked) */}
        <div className="flex flex-col gap-[32px] shrink-0">
          <div className="relative w-[666px] h-[374px] overflow-hidden group cursor-pointer">
            <img src={imgFormalWoman} alt="Formal Woman" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#8b4513]/20 transition-colors duration-500 group-hover:bg-[#8b4513]/10" />
            <h2 className="absolute top-[156px] left-[30px] font-['Playfair_Display',serif] font-medium text-[48px] text-white uppercase leading-[1.3] z-10 transition-transform duration-500 group-hover:-translate-y-2">Formal Woman</h2>
          </div>
          <div className="relative w-[666px] h-[374px] overflow-hidden group cursor-pointer">
            <img src={imgFormalMen} alt="Formal Men" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#8b4513]/25 transition-colors duration-500 group-hover:bg-[#8b4513]/10" />
            <h2 className="absolute top-[156px] left-[30px] font-['Playfair_Display',serif] font-medium text-[48px] text-white uppercase leading-[1.3] z-10 transition-transform duration-500 group-hover:-translate-y-2">Formal Men</h2>
          </div>
        </div>

        {/* Right Column (Single Large) */}
        <div className="relative flex-1 min-w-0 overflow-hidden group cursor-pointer">
          <img src={imgCasualStyle} alt="Casual Style" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[#8b4513]/20 transition-colors duration-500 group-hover:bg-[#8b4513]/10" />
          <h2 className="absolute top-[359px] left-[55px] font-['Playfair_Display',serif] font-medium text-[48px] text-white uppercase leading-[1.3] z-10 transition-transform duration-500 group-hover:-translate-y-2">Casual Style</h2>
        </div>
      </div>
    </section>
  );
}
