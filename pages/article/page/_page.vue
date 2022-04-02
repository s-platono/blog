<template>
  <articles :articles="articles" :total="total">

  </articles>
</template>

<script>
import getContent from "~/utils/getContent";

export default {
  components: {
    Articles: () => import('@/components/home/Articles'),
  },
  async asyncData({ $content, app, params, error }) {
    const content = await getContent($content, params, error)
    /*await $content('articles')
    .only(['title', 'description', 'img', 'slug', 'author'])
    .sortBy('createdAt', 'desc')
    .fetch()
  const tags = await $content('tags')
    .only(['name', 'description', 'img', 'slug'])
    .sortBy('createdAt', 'asc')
    .fetch()*/
    return {
      total: content.allArticles,
      articles: content.paginatedArticles,
    }
  },
  head() {
    return {
      title: `Articles Page ${this.$route.params.page} `, //todo - change title for page
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/articles/page/${this.$route.params.page}`,
        },
      ],
    };
  },
}
</script>

<style scoped>

</style>
