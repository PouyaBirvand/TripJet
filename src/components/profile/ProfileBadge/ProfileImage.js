import Image from 'next/image';
import { User, Upload } from 'lucide-react';

export default function ProfileImage({ profile, fileInputRef, onImageChange, isUploadingAvatar }) {
  const hasImage = !!profile?.avatar;

  return (
    <div className="relative">
      {hasImage ? (
        <div className="relative w-[50px] h-[50px]">
          <Image
            src={profile.avatar}
            alt="user-profile"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </div>
      ) : (
        <div className="w-[50px] h-[50px] rounded-full bg-gray-200 flex items-center justify-center">
          <User size={30} className="text-gray-400" />
        </div>
      )}
      <button
        onClick={() => fileInputRef.current.click()}
        className="absolute -bottom-1 -right-1 bg-blue-600 text-white text-white rounded-full p-1 shadow-md hover:bg-blue-600 text-white-dark"
        title="تغییر تصویر پروفایل"
        disabled={isUploadingAvatar}
      >
        <Upload size={14} />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={onImageChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
