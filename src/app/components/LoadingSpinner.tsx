export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-[#8b4513] border-t-transparent rounded-full animate-spin"></div>
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium text-[24px] text-[#8b4513]">
          Loading...
        </p>
      </div>
    </div>
  );
}
