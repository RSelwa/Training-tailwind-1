module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
      colors: {
        primary: {
          magenta: "#502050",
          pink: "#ee68a4",
          grayMagenta: "#937b92",
          lightGrayMagenta: "#f7f2f7",
        },
      },
      backgroundImage: {
        "mobile-bottom": "url(/images/bg-pattern-bottom-mobile.svg)",
        "mobile-top": "url(/images/bg-pattern-top-mobile.svg)",
        "desktop-top": "url(/images/bg-pattern-top-desktop.svg)",
        "desktop-bottom": "url(/images/bg-pattern-bottom-desktop.svg)",
      },
       minWidth: {
         '1/2':'540px',
      }
    },
  },
  variants: {},
  plugins: [],
};
