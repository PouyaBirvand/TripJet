// components/footer/Certifications.tsx
import Link from 'next/link';
import Image from 'next/image';

const certifications = [
  {
    href: 'https://enamad.ir/',
    src: '/enamad.png',
    alt: 'نماد الکترونیکی',
  },
  {
    href: 'http://samandehi.ir',
    src: '/samandehi.png',
    alt: 'ساماندهی',
  },
  {
    href: 'https://www.aira.ir/',
    src: '/aira.png',
    alt: 'انجمن صنفی کسب و کار اینترنتی',
  },
  {
    href: '#',
    src: '/airPlane.png',
    alt: 'مجوز رسمی آژانس مسافرتی',
  },
];

const Certifications = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {certifications.map(cert => (
        <Link key={cert.href} href={cert.href} className="hover:opacity-80 transition-opacity">
          <Image
            width={70}
            height={70}
            src={cert.src}
            alt={cert.alt}
            className="h-16 w-auto dark:invert"
          />
        </Link>
      ))}
    </div>
  );
};

export default Certifications;
