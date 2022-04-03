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
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : undefined
    params.tag = tag
    const content = await getContent($content, params, error)

    // const articles = await $content('articles')
    //   .where({ tags: { $contains: tag.name } })
    //   .sortBy('createdAt', 'asc')
    //   .fetch()
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
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ru', options)
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
