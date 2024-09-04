"use client";

import { Task } from "@/types";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-secondaryBg text-primaryText rounded-lg shadow-lg p-6 w-full max-w-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
