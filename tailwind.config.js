// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    fontFamily: {
      'book': ['Book', '-apple-system', 'BlinkMacSystemFont'],
      'bol': ['Bol', '-apple-system', 'BlinkMacSystemFont']
      }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
