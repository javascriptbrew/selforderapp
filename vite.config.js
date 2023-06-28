import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsonServer from "vite-plugin-simple-json-server";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    jsonServer({
      urlPrefixes: ["/api/"],
      mockDir: "mock-api",
      handlers: [
        {
          pattern: "/api/home",
          method: "GET",
          handle: (req, res) => {
            const data = {
              data: "This is Json-Server running directly on Vite",
            };
            res.setHeader("content-type", "application/json");
            res.end(JSON.stringify(data));
          },
        },
      ],
    }),
  ],
});
