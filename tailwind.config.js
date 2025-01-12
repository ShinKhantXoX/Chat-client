// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // This will ensure Tailwind scans your JS and JSX files.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
