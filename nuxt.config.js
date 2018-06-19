module.exports = {
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Word game',
    meta: [

      // Base
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0097a7' },
      { name: 'description', name: 'description', content: 'Word game' },

      // Facebook
      { name: 'og:site_name', property: 'og:site_name', content: 'Word game' },
      { name: 'og:title', property: 'og:title', content: 'Word game' },
      { name: 'og:image', property: 'og:image', content: 'https://i.imgur.com/K7C2qgZ.png' },
      { name: 'og:image:width', property: 'og:image:width', content: '1200' },
      { name: 'og:image:height', property: 'og:image:height', content: '630' },
      { name: 'og:url', property: 'og:url', content: '' },
      { name: 'og:description', property: 'og:description', content: 'Word game' },

      // Twitter
      { name: 'twitter:title', property: 'twitter:site', content: '@bellanger_q' },
      { name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', property: 'twitter:image', content: 'https://i.imgur.com/bFml4f6.png' },
      { name: 'twitter:widgets:theme', property: 'twitter:widgets:theme', content: 'dark' },
      { name: 'twitter:widgets:link-color', property: 'twitter:widgets:link-color', content: '#0097a7' },
      { name: 'twitter:widgets:border-color', property: 'twitter:widgets:border-color', content: '#0097a7' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
  },

  css: [
    { src: '@/assets/stylesheets/reset.scss', lang: 'scss' }
  ],

  loading: { color: '#0097a7' },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  manifest: {
    'name': 'Word game',
    'short_name': 'Word game',
    'start_url': '/?homescreen=true',
    'display': 'standalone',
    'orientation': 'portrait',
    'theme_color': '#0097a7',
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
