import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(async ({ mode }) => {
  const plugins: PluginOption[] = [react()];

  // ✅ Load `lovable-tagger` dynamically only during development
  if (mode === "development") {
    try {
      const mod = await import("lovable-tagger");
      const tagger = mod.componentTagger(); // ⬅️ safely get plugin
      plugins.push(tagger); // ✅ push single Plugin object
    } catch (error) {
      console.warn("⚠️ Failed to load lovable-tagger in development mode:", error);
    }
  }

  return {
    base: "/Liquor_Tap/", // ✅ Required for GitHub Pages
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
