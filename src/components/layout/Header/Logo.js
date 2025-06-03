import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ mobile = false }) => {
  return (
    <Link href="/" className="flex-shrink-0">
      <Image
        width={mobile ? 110 : 130}
        height={mobile ? 40 : 45}
        src="/logo.svg"
        alt="Logo"
        className={`w-auto ${mobile ? 'h-10' : 'h-12'}`}
        priority
      />
    </Link>
  );
};

export default Logo;
