import { useState } from "react";
import Image from "next/image";
import Stars from "./Stars";

const CommentsBox = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const maxLength = 150;

    const isTextLong = item.message.length > maxLength;

    const displayText = isExpanded || !isTextLong
        ? item.message
        : `${item.message.substring(0, maxLength)}...`;

    return (
        <div className="bg-base-100 p-4 rounded-xl flex flex-col relative min-h-60">
            <div className="flex justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                    <Image
                        width={50}
                        height={50}
                        className="rounded-full"
                        src="/pfp.png"
                        alt="pfp"
                    />
                    <span className="font-medium">{item.username}</span>
                </div>
                <div>
                    <Stars filled={item.stars} />
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-4 text-end not-:">تاریخ سفر: {item.date}</p>
                </div>
            </div>

            <div className="flex flex-col flex-grow justify-between">
                <p className="text-base-content">{displayText}</p>

                {isTextLong && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-primary self-start"
                    >
                        {isExpanded ? 'نمایش کمتر' : 'نمایش بیشتر...'}
                    </button>
                )}
            </div>

            {isTextLong && !isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-16 from-base-100 to-transparent pointer-events-none rounded-xl"></div>
            )}
        </div>
    );
};

export default CommentsBox;