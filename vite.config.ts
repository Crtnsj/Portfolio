import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
base: "/Portfolio/";

export default defineConfig({
  plugins: [react()],
});
