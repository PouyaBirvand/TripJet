const LoadingSidebar = ({ length }) => {
    return (
      <div className="space-y-1">
        {Array.from({ length }).map((_, index) => (
          <div key={index} className="border-b border-gray-100 py-3">
            <div className="flex w-full justify-between items-center py-2 text-base font-medium">
              <div className="flex items-center">
                <div className="skeleton h-4 w-28"></div>
              </div>
              <div className="skeleton h-4 w-4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default LoadingSidebar;
  