"use client";

import { useState } from "react";

export const GreenButton = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className={`${pressed ? "translate-y" : "hover:-translate-y-1"} inner-border inner-border-white/50 h-max ${!className.includes("w-") ? "max-w-52" : ""} rounded-xg from-buttonGradientStart to-buttonGradientEnd cursor-pointer whitespace-nowrap bg-gradient-to-t py-4 font-bold text-black transition ease-in-out ${className}`}
    >
      <div className="">{text}</div>
    </button>
  );
};

export default GreenButton;
