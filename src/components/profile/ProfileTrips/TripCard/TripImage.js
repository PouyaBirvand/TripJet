import Image from 'next/image';
const TripImage = ({ src, alt }) => (
  <Image src={src} alt={alt} width={90} height={120} className="rounded-lg object-cover" />
);

export default TripImage;
