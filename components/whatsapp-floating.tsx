"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloating() {
  return (
    <Link
      href="https://wa.me/9779841246023" 
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-6 
        right-6 
        z-50 
        bg-green-500 
        text-white 
        p-4 
        rounded-full 
        shadow-xl 
        hover:bg-green-600 
        transition-all 
        duration-300 
        flex 
        items-center 
        justify-center
      "
    >
      <FaWhatsapp size={28} />
    </Link>
  );
}
