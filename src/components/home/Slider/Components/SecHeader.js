const SecHeader = ({ lTitle, rTitle, children }) => {
  return (
    <div className="flex md:flex-row flex-col justify-between flex-wrap text-blue-600 mr-3">
      <div className="flex gap-3">
        {children}
        <h5 className="text-base-content text-2xl">{lTitle}</h5>
      </div>

      <div>
        <button className="text-lg ml-3 mt-1">{rTitle}</button>
      </div>
    </div>
  );
};

export default SecHeader;
