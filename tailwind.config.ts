import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        exo: ["var(--font-exo)"],
      },
      boxShadow: {
        elementGlow: "0 0 151px #01E2AB",
        elementGlow2: "0 0 88px #01E2AB",
        customMd: "0 4px 4px rgba(0, 0, 0, 0.25)",
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
        lightElement: "rgba(217, 217, 217, 0.10)",
        elementBorder: "#0C6870",
        helperStart: "#053234",
        helperEnd: "rgb(6,58,59)",
        glassTexture: "rgba(50, 50, 50, 0.19)",

        //stick border colors

        stick1: "#",
      },
      animation: {
        floatUp: "floatUp 10s linear infinite",
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
      },
      borderRadius: {
        xg: "10px",
      },
    },
  },
  plugins: [],
} satisfies Config;
