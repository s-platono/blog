<template>
  <div class="">
    <articles :articles="articles" :total="total">
<!--      <banner />-->
    </articles>
<!--    <about />-->
<!--    <subscribe />-->

  </div>
</template>

<script>
import getContent from '@/utils/getContent';

export default {
  components: {
    About: () => import('@/components/home/About'),
    Articles: () => import('@/components/home/Articles'),
    Banner: () => import('@/components/home/Banner'),
    Subscribe: () => import('@/components/home/Subscribe'),
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
}
</script>

<style lang="scss" scoped>

</style>
