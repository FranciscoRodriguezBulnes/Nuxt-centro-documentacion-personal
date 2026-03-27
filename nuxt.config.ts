export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  ssr: true, // o simplemente no poner nada, pero lo dejamos explícito

  nitro: {
    preset: "node-server",
    prerender: {
      routes: ["/"],
    },
  },

  routeRules: {
    "/": { prerender: true },
  },
});
