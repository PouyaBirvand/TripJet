"use client"
import { usePathname } from 'next/navigation';
const Hero = () => {
  const pathname = usePathname();
  return (
    <div
      className="hero absolute top-20 lg:top-16 right-0 brightness-125"
      style={{
        backgroundImage: 'url(/hero.png)',
      }}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-content text-neutral-content text-right justify-start pt-10 pb-30 min-h-[20rem]">
        {pathname === '/' &&
          <div>
            <h1 className="mb-5 text-4xl sm:text-5xl font-bold">با تریپ جت جهان در جیب شماست!</h1>
            <p className="mb-5 text-xl">پیشنهادات ویژه متناسب با هدف شما.</p>
          </div>
        }
      </div>
    </div>
  );
};

export default Hero;
