module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Flex"', "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      backgroundImage: {
        "sand-gradient":
          "linear-gradient(180deg, #F3FEFF 0%, #EFE6D8 49.52%, #D8C4A5 90.38%)",
      },
      animation: {
      'spin-slow': 'spin 20s linear infinite',
      'spin-slow-reverse': 'spin 25s linear infinite reverse',
    },
    },
  },

  plugins: [],
};
