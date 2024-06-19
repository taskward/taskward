import type { Config } from 'tailwindcss'

const config: Config = {
  // eslint-disable-next-line global-require
  presets: [require('@bit-ocean/tailwind')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
export default config
