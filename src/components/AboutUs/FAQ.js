'use client';
import { HelpCircle } from 'lucide-react';
import SecHeader from '../home/Slider/Components/SecHeader';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqItems = [
    {
      title: '1. چگونه می‌توانم یک تور رزرو کنم؟',
      content: 'برای رزرو تور، کافی است وارد حساب کاربری خود شوید، تور مورد نظر خود را انتخاب کنید، و سپس گزینه "رزرو" را فشار دهید. شما می‌توانید از طریق درگاه‌های پرداخت آنلاین، هزینه تور را به‌راحتی پرداخت کنید.'
    },
    {
      title: '2. آیا امکان لغو یا تغییر تاریخ تور وجود دارد؟',
      content: 'بله، امکان لغو یا تغییر تاریخ تور با توجه به شرایط و قوانین هر تور متفاوت است. معمولاً تا ۷۲ ساعت قبل از شروع تور، امکان لغو با کسر درصدی از هزینه به عنوان جریمه وجود دارد. برای اطلاعات دقیق‌تر، لطفاً با پشتیبانی ما تماس بگیرید.'
    },
    {
      title: '3. آیا هزینه تور شامل بلیط هواپیما و اقامت می‌شود؟',
      content: 'بله، در اکثر تورهای ما، هزینه بلیط هواپیما، اقامت در هتل، صبحانه، و گشت‌های تفریحی در قیمت نهایی محاسبه شده است. برای اطلاع از جزئیات دقیق هر تور، لطفاً به صفحه توضیحات آن تور مراجعه کنید.'
    },
    {
      title: '4. آیا تورهای شما راهنما دارند؟',
      content: 'بله، تمامی تورهای ما دارای راهنمایان مجرب هستند که در طول سفر همراه شما خواهند بود تا تجربه‌ای بهتر و به‌یادماندنی‌تر داشته باشید.'
    },
    {
      title: '5. آیا می‌توانم برای تور خود بیمه مسافرتی تهیه کنم؟',
      content: 'بله، ما به تمامی مسافران خود توصیه می‌کنیم که بیمه مسافرتی تهیه کنند. شما می‌توانید هنگام رزرو تور، گزینه بیمه مسافرتی را نیز انتخاب کنید یا از طریق شرکت‌های بیمه معتبر، بیمه مسافرتی خود را تهیه نمایید.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="mb-16">
      <div className="mb-8">
        <SecHeader lTitle="سوالات پرتکرار">
          <HelpCircle size={28} className="text-blue-600 relative mt-1" />
        </SecHeader>
      </div>
      
      <div>
        {faqItems.map((item, index) => (
          <div key={index} className="rounded-lg border border-slate-200 bg-white mt-3 p-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex w-full justify-between items-center text-lg font-normal transition-colors"
            >
              {item.title}
                <ChevronUp size={33} strokeWidth={1} className={` duration-100  transition-all ${openIndex === index ? "rotate-180" : "rotate-0"}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 pt-3' : 'max-h-0'
              }`}
            >
              <p className="text-slate-500 leading-7 border-t-slate-200 pt-4 border-t">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
