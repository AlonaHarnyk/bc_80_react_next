import React, { useEffect } from "react";
import css from "./Modal.module.css";
interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    const closeByEscape = (e: KeyboardEvent) => {
      if (e.code === "Escape") onClose();
    };
      document.addEventListener("keydown", closeByEscape);
      document.body.style.overflow = `hidden`;
      
      return () => {
          document.removeEventListener("keydown", closeByEscape); 
          document.body.style.overflow = ``;
      }
  }, [onClose]);

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button
          className={css.closeButton}
          onClick={() => onClose()}
          type="button"
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
