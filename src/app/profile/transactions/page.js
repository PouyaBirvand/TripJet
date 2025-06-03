'use client';

import { useUserTransactions } from '../../../hooks/ProfileHooks/useUserTransactions';
import TransactionRow from '../../../components/profile/ProfileTransactions/TransactionRow';
import TransactionSkeleton from '../../../components/profile/ProfileTransactions/TransactionSkeleton';

export default function TransactionPage() {
  const { transactions, isTransactionsLoading, transactionsError } = useUserTransactions();

  if (isTransactionsLoading) {
    return <TransactionSkeleton />;
  }

  if (transactionsError) {
    return <div className="p-4 text-center text-red-500">خطا در بارگذاری تراکنش‌ها</div>;
  }

  return (
    <div className="bg-white border-slate-200 border rounded-xl p-4 md:p-6" dir="rtl">
      <h3 className="font-medium mb-4 md:mb-8 text-xl md:text-2xl text-gray-800">
        تاریخچه تراکنش ها
      </h3>
      <div className="overflow-x-auto -mx-4 md:mx-0">
        <table className="w-full border-collapse">
          <thead className="hidden md:table-header-group">
            <tr className="border-b border-gray-200">
              <th className="py-5 text-center font-medium text-gray-700 whitespace-nowrap">
                زمان تراکنش
              </th>
              <th className="py-5 text-center font-medium text-gray-700 whitespace-nowrap">
                شناسه تراکنش
              </th>
              <th className="py-5 text-center font-medium text-gray-700 whitespace-nowrap">مبلغ</th>
              <th className="py-5 text-center font-medium text-gray-700 whitespace-nowrap">
                نوع تراکنش
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions &&
              transactions.map(transaction => (
                <TransactionRow key={transaction.id} transaction={transaction} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
