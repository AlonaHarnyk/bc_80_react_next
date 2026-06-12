'use client';

import { useRouter } from 'next/navigation';
import css from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const close = () => {
    router.back();
  };

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button type="button" onClick={close}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}
