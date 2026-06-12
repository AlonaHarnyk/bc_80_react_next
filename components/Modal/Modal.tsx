'use client';

import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const close = () => {
    router.back();
  };
  return (
    <div className="backdrop">
      <div className="modal">
        <button type="button" onClick={close}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}
