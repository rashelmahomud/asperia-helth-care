module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust based on your project structure
  theme: {
    extend: {
      colors: {
        dark: "#232A3C",
        medium: "#293245",
        primary: "#0d6efd",
        lightText: "#97a2b7",
        iconBg: "#0ce0ff",
      },
      keyframes: {
        customBounce: {
          "0%, 100%": {
            transform: "translateX(-1%)",
          },
          "50%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "custom-bounce": "customBounce 1s infinite",
      },
    },
  },
  plugins: [],
};
