export default function TransactionSkeleton() {
    return (
      <div className="bg-white border-slate-200 border rounded-xl p-4 md:p-6" dir="rtl">
        <h3 className="font-medium mb-4 md:mb-8 text-xl md:text-2xl text-gray-800">
          تاریخچه تراکنش ها
        </h3>
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <table className="w-full border-collapse">
            <thead className="hidden md:table-header-group">
              <tr className="border-b border-gray-200">
                <th className="py-5 relative left-1 text-center font-medium text-gray-700 whitespace-nowrap">
                  زمان تراکنش
                </th>
                <th className="py-5 relative left-6 text-center font-medium text-gray-700 whitespace-nowrap">
                  شناسه تراکنش
                </th>
                <th className="py-5 relative left-4 text-center font-medium text-gray-700 whitespace-nowrap">مبلغ</th>
                <th className="py-5 relative left-4 text-center font-medium text-gray-700 whitespace-nowrap">
                  نوع تراکنش
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {Array(5).fill(0).map((_, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-2">
                    <div className="skeleton h-4 w-24 md:w-32"></div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="skeleton h-4 w-20 md:w-28"></div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="skeleton h-4 w-16 md:w-24"></div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="skeleton h-4 w-20 md:w-28"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  