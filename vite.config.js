import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), //Your main entry point(e.g home page)
        about: resolve(__dirname, "about.html"),//addiyional HTML pages
        contact: resolve(__dirname, "contact.html"),
        products: resolve(__dirname, "products.html"),
        addToCart: resolve(__dirname, "addToCart.html"),
        signIn: resolve(__dirname, "signIn.html"),
      },
    },
  },
});
