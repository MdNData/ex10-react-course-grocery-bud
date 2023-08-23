import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ex10-react-course-grocery-bud",
  plugins: [react()],
});
