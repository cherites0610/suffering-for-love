/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['12px', '18px'], //盡量不要用
      base: ['14px', '20px'], //內文
      lg: ['16px', '22px'], //區塊標題
      xl: ['24px', '32px'], //頁面標題
    }
  },
  plugins: [

  ],

}

