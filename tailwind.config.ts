import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        xxs: "0.65rem",
      },
      fontFamily: {
        exo: ["var(--font-exo)"],
      },
      boxShadow: {
        elementGlow: "0 0 151px #01E2AB",
        elementGlow2: "0 0 88px #01E2AB",
        customMd: "0 4px 4px rgba(0, 0, 0, 0.25)",
        elementGlow3: "0px 0px 20px 10px #07FEF0",
      },
      colors: {
        mainBg: "#001110",
        buttonGradientStart: "#00A478",
        buttonGradientEnd: "#00FFF0",
        bannerGradientStart: "#00E8AF",
        bannerGradientEnd: "#008262",
        elementDarkBlue: "rgba(15, 23, 42, 0.34)",
        complementaryGlow: "#00FFF0",
        brightBorder: "#02FFC5",
        lightElement: "rgba(217, 217, 217, 0.1)",
        elementBorder: "#0C6870",
        helper: "#0C1C1C",
        glassTexture: "rgba(50, 50, 50, 0.19)",
        footerColor: "#022325",
        glassElementGlowHelper: "rgba(0, 232, 175, 0.5)",

        movingGlow: "#07FEF0",
      },
      animation: {
        horizontalFloat: "horizontalFloat 100s linear infinite",
        horizontalFloatPartial: "horizontalFloatPartial 100s linear infinite",
        floatDown: "floatDown 10s linear infinite",
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translateY(100px)" },
          "50%": { transform: "translateY(0)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(90px)" },
          "50%": { transform: "translateY(0)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(80px)" },
          "50%": { transform: "translateY(0)" },
        },
        float4: {
          "0%, 100%": { transform: "translateY(70px)" },
          "50%": { transform: "translateY(0)" },
        },
        horizontalFloat: {
          "0%, 100%": { transform: "translateX(100vw)" },
          "50%": { transform: "translateX(0)" },
        },
        horizontalFloatPartial: {
          "0%, 100%": { transform: "translateX(60vw)" },
          "50%": { transform: "translateX(0)" },
        },
      },
      borderRadius: {
        xg: "10px",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
