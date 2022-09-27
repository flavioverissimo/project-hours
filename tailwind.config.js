module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme,
        mainColor: "#10625D",
        mainColorLight: "#e7efef",
        mainColorMedium: "#cfe0df",
        backColor: "#fafafa",
      }),
      textColor: (theme) => ({
        ...theme,
        mainColor: "#10625D",
        mainColorLight: "#e7efef",
        mainColorMedium: "#cfe0df",
      }),
      borderColor: (theme) => ({
        ...theme,
        mainColor: "#10625D",
        mainColorLight: "#e7efef",
        mainColorMedium: "#cfe0df",
      }),
    },
  },
  variants: {
    backgroundColor: ["responsive", "focus", "active", "hover"],
  },
  plugins: [],
};
