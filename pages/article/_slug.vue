<template>
  <v-sheet elevation="2" class="mt-0">
    <v-parallax :src="article.img" dark height="400">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h3 font-weight-bold mb-4">
            {{ article.title }}
          </h1>
          <h4 class="subheading">
            {{ article.description }}
          </h4>
          <h5 class="subheading">
            {{ formatDate(article.createdAt) }}
          </h5>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="mx-auto col-10">
      <article-header :toc="article.tableOfContent" class="mb-2"/>
      <v-divider class="mb-2"></v-divider>
      <nuxt-content :document="article"/>
    </div>
<!--    <footer>
      <author :author="article.author"/>
    </footer>-->
  </v-sheet>
</template>
<script>
import getSiteMeta from "~/utils/getSiteMeta";
import {formatDate, formatToc} from "~/utils/utils";
export default {
  components: {
    ArticleHeader: () => import('~/components/core/article/Header'),
  },
  async asyncData({$content, params, store}) {
    const article = await $content('articles', params.slug).fetch()
    article.tableOfContent = formatToc(article)

    /* const tagsList = await $content('tags')
       .only(['name', 'slug'])
       .where({ name: { $containsAny: article.tags } })
       .fetch()*/
    const tagsList = store.getters.tagList(article.tags)
    const tags = Object.assign({}, ...tagsList.map((s) => ({[s.name]: s})))

    return {
      article,
      tags,
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
        mainImage: this.article.image,
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          hid: "description",
          name: "description",
          content: this.article.description
        },
        // Open Graph
        {
          hid: "og:title",
          property: "og:title",
          content: this.article.title
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description
        },
        // // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.description
        },
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: global.author || '' },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
        },
      ],
    }
  },
  methods: {
    formatDate(date) {
      return formatDate(date)
    }
  }
}
</script>
<style lang="scss">
.nuxt-content h2 {
  font-weight: 500;
  font-size: 30px;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
  margin-bottom: 1rem;
}

.nuxt-content h3 {
  font-weight: 400;
  font-size: 22px;
}

.nuxt-content p {
  font-size: 16px;
  margin-bottom: 30px;
  word-spacing: 2px;
  line-height: 32px;
}

.nuxt-content p code,
.nuxt-content h2 code,
.nuxt-content h3 code {
  color: #476582;
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.85em;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-family: Consolas, Roboto Mono, monospace;
}

.nuxt-content ul {
  font-size: 16px;
  margin-bottom: 30px;
  word-spacing: 2px;
  line-height: 32px;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.v-application code {
  all: initial;
  all: unset;
}

.v-application a {
  text-decoration: none;
}

.nuxt-content-highlight {
  font-family: Consolas;
  font-size: 16px;
  position: relative;
  z-index: 1;
  border-radius: 6px;
}

.nuxt-content-highlight > .filename {
  font-family: Roboto;
  right: 0;
  top: 0;
  position: absolute;
  margin-right: 0.8rem;
  font-size: 0.8rem;
  color: rgba(203, 213, 224, 1);
  font-weight: 300;
  z-index: 10;
  margin-top: 0.5rem;
}

.nuxt-content pre {
  position: static;
  border-radius: 6px;
  font-family: Consolas;
  font-size: 16px;
  padding: 20px;
}

code[class*="language-"],
pre[class*="language-"] {
  font-size: 16px;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  color: #c3cee3;
  font-family: Consolas, Roboto Mono, monospace;
  font-size: 1em;
  line-height: 1.5em;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  margin-bottom: 15px;
}
</style>
