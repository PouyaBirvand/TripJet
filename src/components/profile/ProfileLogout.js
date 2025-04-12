'use client';
import { SquareArrowOutUpLeft } from 'lucide-react';
import { useState } from 'react';
import ProfileLogoutModal from './ProfileLogoutModal';

export default function ProfileLogout() {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(open => !open);
  };
  return (
    <>
      <button
        onClick={() => setOpenModal(open => !open)}
        className="btn btn-soft !bg-red-100 btn-error btn-lg text-md font-normal text-base !outline-none !border-none !shadow-none rounded-xl w-full max-w-xs mx-auto flex items-center flex-row-reverse gap-4 justify-center"
      >
        خروج از حساب کاربری
        <SquareArrowOutUpLeft className="rotate-90" size={20} />
      </button>

      {openModal ? <ProfileLogoutModal onClose={handleCloseModal} /> : null}
    </>
  );
}