 
 const SectionEyebrow = ({ label }) => (
 
 <div className="flex items-center gap-[0.625rem] mb-5">
    <div className="w-[3px] h-4 bg-[#f5c518] rounded-[2px] shrink-0" />
    <span className="text-[0.66rem] font-bold tracking-[0.18em] uppercase text-[#d97706]">
      {label}
    </span>
    <div className="flex-1 h-px bg-[linear-gradient(to_right,rgba(245,197,24,0.35),transparent)]" />
  </div>
);

export default SectionEyebrow;