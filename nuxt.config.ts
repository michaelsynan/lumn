// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/fonts"],

  fonts: {
    families: [
      { name: "Cinzel", provider: "google" },
      { name: "Cormorant Garamond", provider: "google" },
      { name: "Geist", provider: "google" },
    ],
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      link: [
        // Light mode favicons
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon-light.ico",
          media: "(prefers-color-scheme: light)",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-light-32.png",
          media: "(prefers-color-scheme: light)",
        },
        // Dark mode favicons
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon-dark.ico",
          media: "(prefers-color-scheme: dark)",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-dark-32.png",
          media: "(prefers-color-scheme: dark)",
        },
        // Apple Touch Icons (with light/dark variants)
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon-light.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon-dark.png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
  },

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2026-06-30",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
