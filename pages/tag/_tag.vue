<template>
  <articles :articles="articles" :total="total" page-type="tag">

  </articles>
</template>

<script>
import getContent from "~/utils/getContent";

export default {
  components: {
    Articles: () => import('@/components/home/Articles'),
  },
  watchQuery: ['page'],
  async asyncData({ $content, app, params, error, route }) {
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : undefined
    params.tag = tag
    const content = await getContent($content, params, error, route)

    return {
      total: content.allArticles,
      articles: content.paginatedArticles,
      tag: tag
    }
  },
  head() {
    return {
      title: this.capitalizeFirstLetter(this.tag.name)
    }
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
