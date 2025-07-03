"use client"
import { useState } from 'react';
import Image from 'next/image';
import Stars from './Stars';

const MAX_PREVIEW_LENGTH = 120;

const CommentsBox = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsTruncation = item.message.length > MAX_PREVIEW_LENGTH;

  const displayedText =
    isExpanded || !needsTruncation
      ? item.message
      : `${item.message.substring(0, MAX_PREVIEW_LENGTH)}...`;

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image src="/profile.png" alt={item.username} fill className="object-cover" />
          </div>
          <span className="font-medium text-gray-800">{item.username}</span>
        </div>

        <div className="flex flex-col items-end">
          <Stars filled={item.stars} />
          <span className="text-gray-500 text-sm mt-2">تاریخ سفر: {item.date}</span>
        </div>
      </div>

      <div className="flex-grow mb-4 relative">
        <p className="text-gray-700 leading-relaxed">{displayedText}</p>

        {needsTruncation && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 text-sm mt-2 transition-colors"
          >
            {isExpanded ? 'نمایش کمتر' : 'نمایش بیشتر...'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentsBox;
