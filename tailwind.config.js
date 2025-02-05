module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust based on your project structure
  theme: {
    extend: {
      colors: {
          primary: '#0d6efd',
          lightText: '#97a2b7',
          iconBg: '#0ce0ff'
      },
      keyframes: {
        customBounce: {
          "0%, 100%": {
            transform: "translateX(-0.2%)",
            // animationTimingFunction: "cubic-bezier(20, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            // animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
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
