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
      className={`${pressed ? "translate-y" : "hover:-translate-y-1"} inner-border inner-border-white/50 bg-muted rounded-xg border-bannerGradientStart h-max w-full cursor-pointer whitespace-nowrap border py-4 font-bold text-black transition ease-in-out ${className}`}
    >
      <div className="w-full">{text}</div>
    </button>
  );
};

export default OutlineButton;
