/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         keyframes: {
            bgTranslateKey: {
               "0%": { backgroundPosition: "0% 50%" },
               "50%": { backgroundPosition: "100% 50%" },
               "100%": { backgroundPosition: "0% 50%" },
            },
         },
         animation: {
            bgTranslate: "bgTranslateKey 5s infinite linear",
         },
         width: {
            128: "32rem",
            150: "45rem",
         },
         colors: {
            palette: {
               DEFAULT: "#0077C0",
               50: "#FAFAFA",
               100: "#C7EEFF",
               500: "#0077C0",
               900: "#1D242B",
            },
         },
      },
   },
   plugins: [],
};
