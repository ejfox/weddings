import pkg from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Hudson Valley Wedding Photography | EJ Fox & Ben Durland',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Timeless, heartfelt wedding photography in the Hudson Valley. Film photographers EJ Fox & Ben Durland capture authentic moments with intention & artistry. Starting at $1,500.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  ssr: false, // for netlify deploy
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/supabase',
    '@vueuse/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Newsreader: {
            wght: [400, 700],
            ital: [400, 700]
          },
          'IBM Plex Sans': [400, 600]
        },
        display: 'swap'
      }
    ]
  ],
  runtimeConfig: {
    public: {
      OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      PRODUCTION: process.env.PRODUCTION
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
