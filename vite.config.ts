import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [react()],
});
