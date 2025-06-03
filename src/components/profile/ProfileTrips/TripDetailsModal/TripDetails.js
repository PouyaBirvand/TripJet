const TripDetails = ({ details }) => (
  <div className="bg-white rounded-lg p-6 mt-6 shadow-sm border border-base-200">
    <h3 className="text-lg font-bold mb-4">جزئیات خدمات تور</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {details.hotel && (
        <div>
          <div className="text-sm text-gray-500 mb-1">هتل</div>
          <div className="font-medium">{details.hotel}</div>
        </div>
      )}
      {details.transportation && (
        <div>
          <div className="text-sm text-gray-500 mb-1">حمل و نقل</div>
          <div className="font-medium">{details.transportation}</div>
        </div>
      )}
      {details.meals && (
        <div>
          <div className="text-sm text-gray-500 mb-1">وعده‌های غذایی</div>
          <div className="font-medium">{details.meals}</div>
        </div>
      )}
      {details.guide && (
        <div>
          <div className="text-sm text-gray-500 mb-1">راهنمای تور</div>
          <div className="font-medium">{details.guide}</div>
        </div>
      )}
      {details.insurance && (
        <div>
          <div className="text-sm text-gray-500 mb-1">بیمه</div>
          <div className="font-medium">{details.insurance}</div>
        </div>
      )}
    </div>
  </div>
);

export default TripDetails;
