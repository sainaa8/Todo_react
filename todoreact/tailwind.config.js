/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        dogImage:
          "url('https://media.cnn.com/api/v1/images/stellar/prod/230312215912-04-oscars-winners-2023.jpg?c=original&q=h_618,c_fill')",
      },
    },
  },
  plugins: [],
};
