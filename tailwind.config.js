/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
          {
        mytheme: {
          primary: "#6ed648",

          secondary: "#4da6cc",

          accent: "#f78fb9",

          neutral: "#16161d",

          "base-100": "#383857",

          info: "#a1daf2",

          success: "#29c79f",

          warning: "#f99e43",

          error: "#ed2c62",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-flip"),
    require("@tailwindcss/forms"),
  ],
};
