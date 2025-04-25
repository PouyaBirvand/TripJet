'use client';
import Image from 'next/image';
import { BookOpen } from 'lucide-react';
import StoryParagraph from './StoryParagraph';
import SectionTitle from './SectionTitle';

export default function OurStory() {
  return (
    <div className="mb-16 mt-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-2/3">
          <SectionTitle icon={<BookOpen className="text-blue-600" size={25} />} title="داستان ما" />
          
          <StoryParagraph>
            سفر، همیشه بخش مهمی از زندگی ما بوده است. از همان روزهای کودکی که اولین
            ماجراجویی‌هایمان را با خانواده تجربه کردیم، رویای کشف دنیا در ذهنمان شکل گرفت. این
            اشتیاق به سفر، ما را به این باور رساند که هر سفر می‌تواند فراتر از یک تجربه عادی باشد؛
            فرصتی برای شناخت فرهنگ‌ها، ایجاد خاطرات ناب و ارتباط با انسان‌های متفاوت.
          </StoryParagraph>
          
          <StoryParagraph>
            سال‌ها پیش، وقتی برای اولین بار یک تور کوچک را با چند دوست ترتیب دادیم، متوجه شدیم که
            می‌توانیم به دیگران هم کمک کنیم تا دنیای اطرافشان را کشف کنند. همین ماجراجویی ساده،
            تبدیل به پایه‌ای برای تأسیس شرکت مسافرتی ما شد. با عشق به کشف و خلق تجربیات جدید، ما
            تصمیم گرفتیم که به مردم کمک کنیم تا سفرهایشان را به بهترین شکل ممکن برنامه‌ریزی کنند.
          </StoryParagraph>
          
          <StoryParagraph noMargin>
            امروز، با تیمی از کارشناسان مجرب و پرشور، ما افتخار می‌کنیم که هر روز به هزاران نفر
            کمک می‌کنیم تا به مقصدهای رویایی خود سفر کنند. هدف ما فقط ارائه تور نیست؛ ما در کنار
            شما هستیم تا هر لحظه از سفرتان را تبدیل به خاطره‌ای شیرین کنیم.
          </StoryParagraph>
        </div>
        <div className="md:w-1/3">
          <Image
            src="/tourism-day.png"
            alt="روز جهانی گردشگری"
            width={400}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}



