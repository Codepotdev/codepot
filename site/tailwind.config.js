module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': "656px",
      'md': "960px",
      'lg': "1369px",
      'xl': "1666px",
      "2xl": "1976px",
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    colors: {
      'primary': '#6200EE',
      'primary-variant': '#3700B3',
      'secondary': '#03DAC6',
      'secondary-variant': '#018786',
      'background': '#FFFFFF',
      'surface': '#FFFFFF',
      'error': '#B00020',
      'on-primary': '#FFFFFF',
      'on-secondary': '#000000',
      'on-background': '#000000',
      'on-surface': '#000000',
      'on-error': '#FFFFFF',
      'dark-primary': '#BB86FC',
      'dark-primary-variant': '#3700B3',
      'dark-secondary': '#03DAC6',
      'dark-secondary-variant': '#03DAC6',
      'dark-background': '#121212',
      'dark-surface': '#121212',
      'dark-error': '#CF6679',
      'dark-on-primary': '#000000',
      'dark-on-secondary': '#000000',
      'dark-on-background': '#FFFFFF',
      'dark-on-surface': '#FFFFFF',
      'dark-on-error': '#000000',

    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'),],
};