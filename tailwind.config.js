/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{jsx,js,tsx}',
    './components/**/*.{jsx,js,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        /** sans = veut dire, c'est la typo de base */
        /** Et donc "sans" veut dire que c'est la typo "sans-serif" qui est prise par */
        sans: ['var(--font-exo2)', 'sans-serif'],
        orbitron: ['var(--font-orbitron)','sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

