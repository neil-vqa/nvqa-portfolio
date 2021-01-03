
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Neil Van Alino | Web Development Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Learn about Neil Van's skills and projects. Contact for a web development project." },
      { hid: 'og:title', name: 'og:title', content: 'Neil Van Alino | Web Development Portfolio' },
      { hid: 'og:description', name: 'og:description', content: "Learn about Neil Van's skills and projects. Contact for a web development project." },
      { hid: 'og:image', name: 'og:image', content: '/coding_isometric.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  	'~/assets/transition.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  	'~plugins/vue-final-modal.js',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  	'@nuxtjs/axios',
  	'@nuxt/content',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  	transpile: ['vue-final-modal'],
  },
  
  generate: {
    exclude: [
      /^\/admin/ // path starts with /admin
    ]
  },
  
  optimizedImages: {
    optimizeImages: true
  },
}
