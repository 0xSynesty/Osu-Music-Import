/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {colors: {
      // flowbite-svelte
      primary: '#f062a1',
      secondary: '#c04e80',
    }},
  },

  plugins: [require('flowbite/plugin')],
};

module.exports = config;
