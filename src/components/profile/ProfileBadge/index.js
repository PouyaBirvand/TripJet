'use client';

import { useState, useRef } from 'react';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import WalletInfo from './WalletInfo';
import ProfileImageModal from './ProfileImageModal';
import LoadingBadge from './LoadingBadge';
import { useUserProfile } from '../../../hooks/ProfileHooks/useUserProfile';

export default function ProfileBadge() {
  const { profile, uploadAvatar, isProfileLoading, isUploadingAvatar } = useUserProfile();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [scale, setScale] = useState(1);
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewImage(URL.createObjectURL(file));
      setModalIsOpen(true);
    }
  };

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      canvas.toBlob(blob => {
        const file = new File([blob], 'profile.png', { type: 'image/png' });
        uploadAvatar(file);
        setModalIsOpen(false);
      }, 'image/png');
    }
  };

  const removeImage = () => {
    uploadAvatar(null);
    setModalIsOpen(false);
  };

  if (isProfileLoading) {
    return <LoadingBadge />;
  }

  return (
    <div className="border pb-5 pl-5 pr-5 pt-3 rounded-xl border-base-300 bg-white w-full max-w-xs mx-auto">
      <ProfileImage
        profile={profile}
        fileInputRef={fileInputRef}
        onImageChange={handleImageChange}
        isUploadingAvatar={isUploadingAvatar}
      />
      <ProfileInfo profile={profile} />
      <WalletInfo profile={profile} />
      <ProfileImageModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        newImage={newImage}
        editorRef={editorRef}
        scale={scale}
        setScale={setScale}
        onSave={handleSave}
        onRemove={removeImage}
      />
    </div>
  );
}
