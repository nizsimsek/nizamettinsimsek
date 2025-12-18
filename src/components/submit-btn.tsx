import React from "react";
import { FaPaperPlane } from "react-icons/fa";

type SubmitBtnProps = {
  text: string;
  disabled: boolean;
};

export default function SubmitBtn({ text, disabled }: SubmitBtnProps) {
  return (
    <button
      type="submit"
      aria-label={text}
      className="group flex items-center justify-center gap-2 h-12 w-32 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white/10 disabled:scale-100 disabled:bg-gray-900/65"
      disabled={disabled}
    >
      {disabled ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {text}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
