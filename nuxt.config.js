export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  router: {
    base: '/blog/'
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Senior Platono',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/blog/favicon.ico'},
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/blog/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/blog/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/blog/favicon-16x16.png'
      },
      {rel: 'manifest', href: '/blog/site.webmanifest'},
    ],
    script: [
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    { src: '~/assets/css/styles.scss', lang: 'sass'}
  ],
  loading: {
    color: 'DodgerBlue',
    height: '10px',
    continuous: true,
    duration: 3000
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
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
    '@nuxtjs/fontawesome',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'bootstrap-vue/nuxt'
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  }
}
