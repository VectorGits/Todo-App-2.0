module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // if using other directories or pages, list them here
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', "sans-serif"],
      },
      colors: {
        // Primary
        BrightBlue: 'hsl(220, 98%, 61%)',
        CheckBlue: 'hsl(192, 100%, 67%)',
        CheckPurple: 'hsl(280, 87%, 65%)',

        // Light Theme
        VeryLightGray: 'hsl(0, 0%, 98%)',
        VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        LightGrayishBlue: 'hsl(233, 11%, 84%)',
        DarkGrayishBlue: 'hsl(236, 9%, 61%)',
        VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',

        // Dark Theme
        VeryDarkBlue: 'hsl(235, 21%, 11%)',
        VeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        LightGrayishBlue: 'hsl(234, 39%, 85%)',
        LightGrayishBlueHover: 'hsl(236, 33%, 92%)',
        DarkGrayishBlue: 'hsl(234, 11%, 52%)',
        VeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
        VeryDarkGrayishBlue2: 'hsl(237, 14%, 26%)',
      },
    },
  },
  plugins: [],
};
