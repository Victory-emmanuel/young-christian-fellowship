import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        ycf: {
          primary: "#FFFFFF",
          secondary: "#282B26",
          accent: "#D9ABBC",
          highlight: "#A94C6E",
        },
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Custom breakpoints
        'mobile': {'max': '639px'},
        'tablet': {'min': '640px', 'max': '1023px'},
        'desktop': {'min': '1024px'},
        'landscape': {'raw': '(orientation: landscape)'},
        'portrait': {'raw': '(orientation: portrait)'},
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px",
        disabledOpacity: 0.45,
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem",
          small: "1.25rem",
          medium: "1.5rem",
          large: "1.75rem",
        },
        radius: {
          small: "8px",
          medium: "12px",
          large: "16px",
        },
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "2px",
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              50: "#fdf2f6",
              100: "#fbe6ed",
              200: "#f9ccd9",
              300: "#f4a3bc",
              400: "#ec7096",
              500: "#e04a7a",
              600: "#cf2a5e",
              700: "#ad1e4a",
              800: "#911c42",
              900: "#7d1c3c",
              DEFAULT: "#A94C6E",
              foreground: "#FFFFFF"
            },
            secondary: {
              50: "#f6f7f6",
              100: "#e2e4e1",
              200: "#c5c9c2",
              300: "#a2a89e",
              400: "#81887c",
              500: "#666d61",
              600: "#4f544a",
              700: "#40443c",
              800: "#343731",
              900: "#282B26",
              DEFAULT: "#282B26",
              foreground: "#FFFFFF"
            },
          },
        },
      },
    }),
  ],
};
