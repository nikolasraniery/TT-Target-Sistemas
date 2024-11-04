/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#334A65',
                secondary: '#303543',
                background: '#0C142B',
                text: '#B5BECB'
            },
        },
    },
    plugins: [],
}
