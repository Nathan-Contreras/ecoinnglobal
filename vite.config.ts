import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => ({
  // 👇 Servidor local de desarrollo
  server: {
    host: "::", // Permite conexiones IPv4/IPv6
    port: 8080,
    open: true, // Abre el navegador automáticamente
  },

  // 👇 Plugins que usas
  plugins: [react()],

  base: "/ecoinnglobal/",

  // 👇 Alias de rutas
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./"), 
    },
  },

  // 👇 Opcional: optimización de dependencias
  optimizeDeps: {
    include: ["react", "react-dom"],
  },

  // 👇 Opcional: build limpio y claro
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: mode === "development",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
