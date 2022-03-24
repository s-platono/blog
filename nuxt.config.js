export default {
  target: 'static',
  // router: {
  //   base: '/blog/'
  // },
  head: {
    title: 'Senior Platono',
    meta: [
      {
        name: 'google-site-verification', content: '77qBeffz9yf3f50UxQ2bUcYsJmbqyOD6q5n1QRUbXNk'
      },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {rel: 'manifest', href: '/site.webmanifest'},
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'}
    ],
    script: []
  },

  css: [
    // { src: '~/assets/css/styles.scss', lang: 'scss'}
  ],
  loading: {
    color: '#083759',
    height: '10px',
    continuous: true,
    duration: 3000
  },

  plugins: [
    '@/plugins/my_plugin.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
    '@nuxt/content',
  ],

  modules: [
    '@nuxtjs/vuetify',
  ],

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },

  build: {

  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  styleResources: {
    // scss: ['./assets/css/styles.scss']
  },
  googleAnalytics: {
    id: 'G-Z0PKRYK0KZ'
  },
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#CBAA5C',
          secondary: '#083759',
        },
      },
    },
  }
}
