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
      className={`w-full ${pressed ? "translate-y" : "hover:-translate-y-1"} rounded-xg from-buttonGradientStart to-buttonGradientEnd inner-border inner-border-white/50 cursor-pointer whitespace-nowrap bg-gradient-to-t px-7 py-4 font-bold text-black transition ease-in-out ${className}`}
    >
      <div className="">{text}</div>
    </button>
  );
};

export default GreenButton;
