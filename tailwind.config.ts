import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "tertiary-900": "hsl(240, 67%, 8%)",
        "tertiary-800": "hsl(240, 17%, 26%)",
        "tertiary-600": "hsl(240, 6%, 54%)",
        "tertiary-500": "hsl(10, 63%, 51%)",
        "tertiary-100": "hsl(0, 0%, 100%)",
        "primary-800": "hsl(17, 73%, 46%)",
        "primary-700": "hsl(2, 68%, 53%)",
        "primary-500": "hsl(12, 100%, 64%)",
        "primary-400": "hsl(33, 82%, 61%)",
        "primary-300": "hsl(27, 75%, 70%)",
        "primary-200": "hsl(39, 88%, 73%)",
        "primary-100": "hsl(40, 96%, 70%)",
        "secondary-700": "hsl(222, 95%, 63%)",
        "secondary-600": "hsl(194, 48%, 49%)",
        "secondary-500": "hsl(263, 67%, 51%)",
        "secondary-400": "hsl(238, 99%, 66%)",
        "secondary-300": "hsl(169, 73%, 44%)",
        "secondary-200": "hsl(168, 82%, 67%)",
        "secondary-100": "hsl(196, 83%, 93%)",
      },
    },
  },
  plugins: [],
};
export default config;
