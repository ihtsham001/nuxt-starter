// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
  app: {
    head: {
      title: "Hive",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
          type: "text/javascript",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js",
          type: "text/javascript",
          body: true,
        },
        {
          src: "https://player.vimeo.com/api/player.js",
          type: "text/javascript",
        },
      ],
    },
  },

  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],

  css: ["@/assets/scss/global.scss"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  plugins: ["~/plugins/ably"],
});
