<template>
  <v-sheet elevation="2" class="mt-0">
    <v-parallax :src="article.img" dark height="400">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h3 font-weight-bold mb-4">
            {{ article.title }}
          </h1>
          <h4 class="subheading">
            {{ article.author.name }}
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
export default {
  components: {
    ArticleHeader: () => import('~/components/core/article/Header'),
  },
  async asyncData({$content, params, store}) {
    const article = await $content('articles', params.slug).fetch()
    // const article = Object.assign({}, ...store.getters.article(params.slug))

    let lastParent = 0
    let result = []
    for (let key in article.toc) {
      let link = article.toc[key]
      if(link.depth === 2) {
        link.child = []
        lastParent = result.push(link) - 1
      } else {
        result[lastParent].child.push(link)
      }
    }
    article.tableOfContent = result


    /* const tagsList = await $content('tags')
       .only(['name', 'slug'])
       .where({ name: { $containsAny: article.tags } })
       .fetch()*/
    const tagsList = store.getters.tagList(article.tags)
    const tags = Object.assign({}, ...tagsList.map((s) => ({[s.name]: s})))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next
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
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('ru', options)
    }
  }
}
</script>
<style>
/*.nuxt-content p {
  margin-bottom: 20px;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}*/

/*.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}*/
</style>
