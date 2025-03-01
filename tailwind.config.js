/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Verifique se está correto
  theme: {
    extend: {
      colors: {
        'surfie-green': {
          '50': '#f3faf8',
          '100': '#d8efea',
          '200': '#b0dfd6',
          '300': '#81c7bc',
          '400': '#56ab9f',
          '500': '#3d8f85',
          '600': '#327b74',
          '700': '#295c58',
          '800': '#244b48',
          '900': '#223f3d',
          '950': '#0f2424',
},
        'cognac': {
            '50': '#fff2ed',
            '100': '#ffdfd4',
            '200': '#ffbea8',
            '300': '#ff9471',
            '400': '#ff6a38',
            '500': '#fe4c11',
            '600': '#ef4107',
            '700': '#c63808',
            '800': '#a83610',
            '900': '#7e2c10',
            '950': '#441506',
},
        boxShadow: {
          'md-green': '0 4px 6px -1px rgba(43, 201, 110, 0.5), 0 2px 4px -1px rgba(43, 201, 110, 0.5)',
        },
      }
    },
  },
  plugins: [],
};

