module.exports = {
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Nuxt.js starter',
    meta: [

      // Base
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#000000' },
      { name: 'description', name: 'description', content: 'Nuxt.js starter' },

      // Facebook
      { name: 'og:site_name', property: 'og:site_name', content: 'Nuxt.js starter' },
      { name: 'og:title', property: 'og:title', content: 'Nuxt.js starter' },
      { name: 'og:image', property: 'og:image', content: 'https://i.imgur.com/bFml4f6.png' },
      { name: 'og:image:width', property: 'og:image:width', content: '1200' },
      { name: 'og:image:height', property: 'og:image:height', content: '630' },
      { name: 'og:url', property: 'og:url', content: '' },
      { name: 'og:description', property: 'og:description', content: 'Nuxt.js starter' },

      // Twitter
      { name: 'twitter:title', property: 'twitter:site', content: '@bellanger_q' },
      { name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', property: 'twitter:image', content: 'https://i.imgur.com/bFml4f6.png' },
      { name: 'twitter:widgets:theme', property: 'twitter:widgets:theme', content: 'dark' },
      { name: 'twitter:widgets:link-color', property: 'twitter:widgets:link-color', content: '#000000' },
      { name: 'twitter:widgets:border-color', property: 'twitter:widgets:border-color', content: '#000000' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
  },

  css: [
    { src: '@/assets/stylesheets/reset.scss', lang: 'scss' }
  ],

  loading: { color: '#000000' },

  modules: [
    '@nuxtjs/pwa',
  ],

  manifest: {
    'name': 'Nuxt.js starter',
    'short_name': 'Nuxt.js starter',
    'start_url': '/?homescreen=true',
    'display': 'standalone',
    'orientation': 'portrait',
    'theme_color': '#000000',
    'background_color': '#fff',
    'icons': [{
      'src': '@/static/icon.png',
      'sizes': '512x512',
      'type': 'image/png'
    }]
  },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
