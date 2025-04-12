const Countresult = ({ count = 0, onClearFilters }) => {
  return (
    <div className="flex h-12 flex-wrap justify-between w-full font-normal items-center rounded-xl border border-base-300 bg-white px-4 whitespace-nowrap">
      <span className="flex items-center text-md">
        {' '}
        تعداد نتایج: {count.toLocaleString('fa-IR')}
      </span>
      <button
        onClick={onClearFilters}
        className="flex items-center text-sm !text-blue-600 hover:!text-blue-600-focus"
      >
        پاک کردن فیلتر‌ها
      </button>
    </div>
  );
};

export default Countresult;
