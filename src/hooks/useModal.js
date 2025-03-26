'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function useModal(initialState = true) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(initialState);

  const handleClose = () => {
    router.back();
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    setIsOpen,
    handleClose,
    handleOpen
  };
}