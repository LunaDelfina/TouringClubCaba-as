const FeatureChipsMobile = ({ features, onHover }) => {

    return (
        <div className="md:hidden grid grid-cols-3 gap-2 mt-4">
      {features.map(({ icon, label }, i) => (
        <div
          key={label}
          className="bg-white/20 backdrop-blur-sm border border-[#6E6E6E]/25 rounded-[12px] flex items-center gap-2 px-2 py-1"
        >
          <img src={icon} className="w-[18px] h-[18px] object-contain flex-shrink-0" alt={label} />
          <p className="text-[10px] text-[#6E6E6E] font-medium leading-snug">{label}</p>
        </div>
      ))}
    </div>
    );
}
export default FeatureChipsMobile;