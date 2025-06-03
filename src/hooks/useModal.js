'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function useModal(initialState = true) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(initialState);

  const handleClose = () => {
    router.back();
    setIsOpen(false);
  };

  const handleLastClose = () => {
    setIsOpen(false);
    router.push('/');
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    setIsOpen,
    handleClose,
    handleLastClose,
    handleOpen,
  };
}
