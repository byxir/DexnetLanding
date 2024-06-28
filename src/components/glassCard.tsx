const GlassCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`relative grid items-center justify-items-center rounded-xg bg-glassTexture backdrop-blur-sm ${className} ${!className?.includes("w-") ? "w-64" : ""} ${!className?.includes("h-") ? "h-32" : ""}`}
    >
      {/* <div className="absolute top-4 h-6 w-32 bg-bannerGradientEnd blur-[24px] md:top-4 md:h-10 md:w-44"></div> */}
      {/* <div className="absolute inset-0 -left-[23%] z-30 h-[75%] w-[150%] rounded-b-full bg-gradient-to-r from-transparent via-glassElementGlowHelper to-transparent blur-xl"></div> */}
      <div className="z-20 h-32 w-64 rounded-xg text-bannerGradientStart">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
