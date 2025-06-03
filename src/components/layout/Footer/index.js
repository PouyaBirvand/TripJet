import ContactInfo from './ContactInfo';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';
import Copyright from './Copyright';
import Certifications from './Certifications ';

const Footer = () => {
  const linksData = [
    {
      title: 'تریپ جت',
      links: [
        { href: '/about-us', label: 'درباره ما' },
        { href: '/contact-us', label: 'تماس با ما' },
        { href: '/insurance', label: 'بیمه مسافرتی' },
        { href: '/faq', label: 'پرسش و پاسخ' },
      ],
    },
    {
      title: 'خدمات مشتریان',
      links: [
        { href: '/purchase-guide', label: 'راهنمای خرید' },
        { href: '/terms', label: 'قوانین و مقررات' },
        { href: '/refund', label: 'راهنمای استرداد' },
        { href: '/support', label: 'پشتیبانی آنلاین' },
      ],
    },
    {
      title: 'تورهای پرطرفدار',
      links: [
        { href: '/tours/dubai', label: 'تور دبی' },
        { href: '/tours/kish', label: 'تور کیش' },
        { href: '/tours/antalya', label: 'تور آنتالیا' },
        { href: '/tours/istanbul', label: 'تور استانبول' },
      ],
    },
    {
      title: 'اطلاعات تکمیلی',
      links: [
        { href: '/corporate', label: 'فروش سازمانی' },
        { href: '/careers', label: 'فرصت‌های شغلی' },
        { href: '/feedback', label: 'سنجش رضایتمندی' },
        { href: '/partnership', label: 'همکاری با آژانس‌ها' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <ContactInfo />
          {linksData.map(section => (
            <FooterLinks key={section.title} title={section.title} links={section.links} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8 gap-6">
          <SocialLinks />
          <Certifications />
        </div>

        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
