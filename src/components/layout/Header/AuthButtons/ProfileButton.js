import Image from 'next/image';

const ProfileButton = ({ className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn flex gap-2 relative bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-6 transition-colors duration-200 ${className}`}
    >
      <Image alt="profile" src={'/profile.png'} width={35} height={35} />
      <span className="absolute w-2 border border-white h-2 rounded-full bg-success right-7 top-8"></span>
      <span className="font-normal">کوروش صفایی</span>
    </button>
  );
};

export default ProfileButton;
