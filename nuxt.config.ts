import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Gerador de Assinatura - CBYK",
      htmlAttrs: {
        lang: "pt-br",
      },
      meta: [
        { charset: "utf-8" },
        // { name: "viewport", content: "width=1440" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap",
        },
      ],
    },
  },
  plugins: [{ src: "@/directives", ssr: false }],
  styleResources: { scss: ["~/styles/global.scss"] },
  css: ["~/styles/global.scss", "animate.css/animate.min.css"],
});
