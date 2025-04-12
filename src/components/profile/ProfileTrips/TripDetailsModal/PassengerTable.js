const PassengerTable = ({ passengers }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-base-200">
      <h3 className="text-lg font-bold mb-4">مشخصات مسافران</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-base-100 border-b border-base-200">
              <th className="text-right py-4 font-medium text-gray-600">نام مسافر</th>
              <th className="text-right py-4 font-medium text-gray-600">نوع مسافر</th>
              <th className="text-right py-4 font-medium text-gray-600">تاریخ تولد</th>
              <th className="text-right py-4 font-medium text-gray-600">جنسیت</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((passenger, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-base-300' : 'bg-base-100/50'}>
                <td className="py-4 border-b border-base-200">{passenger.name}</td>
                <td className="py-4 border-b border-base-200">{passenger.type}</td>
                <td className="py-4 border-b border-base-200">{passenger.birthDate}</td>
                <td className="py-4 border-b border-base-200">{passenger.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  export default PassengerTable;
  