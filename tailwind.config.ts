import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
center:true,
padding:{
  default:"1rem",
  sm:"0"

}
    },
    extend: {
     colors:{
      red:"#D9114A",
      orange:"#FCAB01",
      pink:"#5A0F61",
      light:"#FFFFFF",
      dark:"#111618"
     }
    },
  },
  plugins: [],
}
export default config
