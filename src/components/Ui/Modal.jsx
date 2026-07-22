import React from "react";
import { X } from "lucide-react";

const Modal = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-black"
        >
          <X size={20} />
        </button>

        <img
          src={image}
          alt="Project Preview"
          className="max-h-[85vh] w-full rounded-xl border border-white/10 object-contain shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Modal;
