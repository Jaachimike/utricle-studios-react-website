/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system']
    },

    extend: {
      colors: {
        // Configure your color palette here
        'utricleBlack': '#0C0F16',
        'utricleGrey': '#777777',
        'utricleBrown': '#BE6D5C'
        // 'cerebralGrey': {
        //   500: '#5B5B5B',
        //   600: '#1D3444',
        //   700: '#0D1317',
        // },
        // 'cerebralBlue': {
        //   200: '#EDF7FF',
        //   400: '#DCEEFD',
        //   500: '#C1E4FF',
        //   700: '#063255'
        // }
      },
    },
  },
  plugins: [],
}

