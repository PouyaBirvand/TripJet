"use client"
import { ChevronDown } from "lucide-react";
import DetailBox from "./DetailBox";
import { useState } from "react";
import { formatPrice } from "../../../lib/utils/numbers";

function TransactionRow({ transaction }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <tr
        className="hover:bg-gray-50 transition-colors cursor-pointer md:table-row flex flex-col border-b"
        onClick={() => setIsOpen(!isOpen)}
      >
        <td className="py-6 text-center text-gray-600 md:table-cell flex justify-between px-4 before:content-['زمان_تراکنش'] before:font-medium before:text-gray-700 md:before:content-none">
          <span>{transaction.date}</span>
        </td>
        <td className="py-4 text-center font-medium text-gray-800 md:table-cell flex justify-between px-4 before:content-['شناسه_تراکنش'] before:font-medium before:text-gray-700 md:before:content-none">
          <span>{transaction.id}</span>
        </td>
        <td
          className={`py-4 text-center font-medium md:table-cell flex justify-between px-4 before:content-['مبلغ'] before:font-medium before:text-gray-700 md:before:content-none ${
            transaction.amount.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'
          }`}
        >
          <span>{formatPrice(transaction.amount)}</span>
        </td>
        <td className="py-4 text-center text-gray-700 md:table-cell flex justify-between px-4 before:content-['نوع_تراکنش'] before:font-medium before:text-gray-700 md:before:content-none">
          <span>{transaction.type}</span>
          <ChevronDown
            size={20}
            strokeWidth={1.5}
            className={`text-gray-500 transition-transform duration-300 md:hidden ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </td>
        <td className="py-4 text-center hidden md:table-cell">
          <ChevronDown
            size={20}
            strokeWidth={1.5}
            className={`text-gray-500 transition-transform duration-300 mx-auto ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </td>
      </tr>

      {/* Expanded content */}
      <tr className={`md:table-row flex flex-col`}>
        <td colSpan="5" className={`py-5 px-6 bg-gray-50/7 ${isOpen ? '' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <DetailBox label="نام مسافر" value={transaction.details.passengerName || '-'} />
            <DetailBox label="درگاه بانک" value={transaction.details.bank} />
            <DetailBox label="شماره ارجاع" value={transaction.details.referenceNumber} />
          </div>
        </td>
      </tr>
    </>
  );
}

export default TransactionRow;

