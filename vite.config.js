import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Copy uploaded sky background, paper sheet image, campus illustration & Aditya logo on Vite start
const skyBgPath = 'C:/Users/Charan Tej/.gemini/antigravity-ide/brain/30ee44b9-9f95-44df-a130-b7429d9dce72/media__1785409633425.jpg';
const paperPath = 'C:/Users/Charan Tej/.gemini/antigravity-ide/brain/30ee44b9-9f95-44df-a130-b7429d9dce72/media__1785411135723.png';
const collegePath = 'C:/Users/Charan Tej/.gemini/antigravity-ide/brain/30ee44b9-9f95-44df-a130-b7429d9dce72/media__1785415985510.jpg';
const adityaLogoPath = 'C:/Users/Charan Tej/.gemini/antigravity-ide/brain/30ee44b9-9f95-44df-a130-b7429d9dce72/media__1785416638020.jpg';

try {
  if (fs.existsSync(skyBgPath)) {
    fs.copyFileSync(skyBgPath, path.resolve('public/cta_sky_bg.jpg'));
  }
  if (fs.existsSync(paperPath)) {
    fs.copyFileSync(paperPath, path.resolve('public/paper_sheet_note.png'));
  }
  if (fs.existsSync(collegePath)) {
    fs.copyFileSync(collegePath, path.resolve('public/college_illustration.jpg'));
  }
  if (fs.existsSync(adityaLogoPath)) {
    fs.copyFileSync(adityaLogoPath, path.resolve('public/aditya_logo.jpg'));
    console.log('Successfully copied aditya_logo.jpg to public folder');
  }
} catch (e) {
  console.error('Failed to copy image assets', e);
}

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      ignored: ['**/public/*.mp4', '**/public/*.jpg', '**/public/*.png']
    }
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})

