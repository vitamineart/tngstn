const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/pug/**/*.pug", "./src/js/**/*.js", "./src/**/*.html"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#338bc8",
          link: "#2581d0",
          DEFAULT: "#185599",
          dark: "#071f51",
        },
        indigo: {
          light: "#76769f",
          DEFAULT: "#121341",
        },
        gray: {
          light: "#ebebeb",
          dark: "#bcbcbc",
        },
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        8: "8px",
        12: "12px",
      },
      boxShadow: {
        cardshadow:
          "0 1px 45px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        proxima: "ProximaNovaA-Regular, sans-serif",
        "proxima-bold": "ProximaNovaA-Bold, sans-serif",
      },
      willChange: {
        "transform-opacity": "transform, opacity",
        opacity: "opacity",
      },
      transitionProperty: {
        "transform-opacity": "transform, opacity",
      },
      spacing: {
        12.5: "3.125rem",
        13: "3.25rem",
        16:	"4rem", /* 64px */
        18:	"4.5rem", /* 72px */
        20:	"5rem", /* 80px */
        24:	"6rem", /* 96px */
        26:	"6.5rem", /* 104px */
        28:	"7rem", /* 112px */
        30:	"7.5rem", /* 120px */
        32:	"8rem", /* 128px */
        34:	"8.5rem", /* 136px */
        36:	"9rem", /* 144px */
        82: "20.5rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        90: "22.5rem",
        92: "23rem",
        94: "23.5rem",
      },
    },
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
