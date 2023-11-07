import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
base: "https://crtnsj.github.io/Portfolio/";

export default defineConfig({
  plugins: [react()],
});
