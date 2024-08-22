import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#645fc6",
        primaryText: "#feffff",
        secondaryText: "#858fa1",
        primaryBg: "#21212d",
        secondaryBg: "#2c2c38",
        statusCyan: "#4dbee3",
        statusPurple: "#8572f1",
        statusGreen: "#66e3b0",
      },
    },
  },
  plugins: [],
};
export default config;
