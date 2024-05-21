"use client";

import { useState } from "react";

export const OutlineButton = ({
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
      className={`${pressed ? "translate-y" : "hover:-translate-y-1"} inner-border inner-border-white/50 bg-muted h-max w-52 cursor-pointer whitespace-nowrap rounded-xg border border-bannerGradientStart px-7 py-4 font-bold text-black transition ease-in-out ${className}`}
    >
      <div className="">{text}</div>
    </button>
  );
};

export default OutlineButton;
