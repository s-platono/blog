import global from './utils/global';
import getRoutes from './utils/getRoutes';
import getSiteMeta from './utils/getSiteMeta';

const meta = getSiteMeta();

export default {
  target: 'static',
  // router: {
  //   base: '/blog/'
  // },
  head: {
    title: 'El Platono',
    htmlAttrs: {
      lang: 'ru-RU',
      // class: 'bg-black',
    },
    meta: [
      ...meta,
      {
        name: 'google-site-verification', content: '77qBeffz9yf3f50UxQ2bUcYsJmbqyOD6q5n1QRUbXNk'
      },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || '',
      },
      { property: 'og:site_name', content: global.siteName || '' },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || '',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: global.siteName || '' },
      { name: 'twitter:card', content: 'summary_large_image' },
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
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'},
      {
        hid: 'canonical',
        rel: 'canonical',
        href: global.siteUrl,
      },
    ],
    script: []
  },

  css: [
    { src: '~/assets/css/styles.scss', lang: 'scss'}
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
    '@nuxtjs/vuetify',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap',
  ],

  modules: [

  ],

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },

  build: {},

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
  },

  sitemap: {
    hostname: global.siteUrl,
    routes() {
      return getRoutes();
    },
  },

  // RSS Feed Configuration (https://github.com/nuxt-community/feed-module)
  feed() {
    const baseUrlArticles = `${global.siteUrl}/article`;
    const baseLinkFeedArticles = '/article';
    const feedFormats = {
      rss: { type: 'rss2', file: 'rss.xml' },
      json: { type: 'json1', file: 'feed.json' },
    };
    const { $content } = require('@nuxt/content');

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: global.siteName || '',
        description: global.siteDesc || '',
        link: baseUrlArticles,
      };
      const articles = await $content('articles').fetch();

      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.slug}`;

        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          date: new Date(article.createdAt),
          description: article.description,
          content: article.description,
          author: global.twitterHandle,
        });
      });
    };

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedArticles}/${file}`,
      type,
      create: createFeedArticles,
    }));
  },
}
