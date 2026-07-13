import React from "react";
import Link from "next/link";

export const Button = ({ children, variant = "primary", className = "", href, onClick }: any) => {
  const baseStyle = "px-6 py-3 font-medium transition-colors duration-200 flex items-center justify-center text-center";
  const variants: any = {
    primary: "bg-[#165a4a] text-white hover:bg-[#104236]",
    secondary: "bg-white text-[#165a4a] border border-[#165a4a] hover:bg-gray-50",
    accent: "bg-[#d4f64d] text-black hover:bg-[#c3e53d]",
  };
  
  if (href) {
    return (
      <Link href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
