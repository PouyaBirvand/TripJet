const Countresult = ({ count = 0, onClearFilters }) => {
  return (
    <div className="flex h-12 flex-wrap justify-between w-full font-normal items-center rounded-lg border border-base-300 px-4 whitespace-nowrap">
      <span className="flex items-center text-sm"> تعداد نتایج: {count.toLocaleString('fa-IR')}</span>
      <button 
        onClick={onClearFilters} 
        className="flex items-center text-sm text-primary hover:text-primary-focus"
      >
        پاک کردن فیلتر‌ها
      </button>
    </div>
  );
};

export default Countresult;