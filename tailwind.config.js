/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        colors: {
            'base-black': '#000',
            'snow-white': '#fff',
            'alto-gray': '#DADFEA',
            'gull-gray': '#9DA6B8',
            'shuttle-gray': '#5A617O',
            'cornflower-blue': '#6C63FF',
            'lavender-gradient': {
                from: '#6C63FF',
                to: '#F8A4D8',
            },
        },
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
