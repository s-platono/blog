<template>
  <div class="">
    <articles :articles="articles">
<!--      <banner />-->
    </articles>
<!--    <about />-->
<!--    <subscribe />-->

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from "~/components/Header";
import ArticleCard from '~/components/ArticleCard'

export default {
  components: {
    Header, ArticleCard,
    About: () => import('@/components/home/About'),
    Articles: () => import('@/components/home/Articles'),
    Banner: () => import('@/components/home/Banner'),
    Subscribe: () => import('@/components/home/Subscribe'),
  },
  async asyncData({store, params}) {
    const articles = store.getters.paginatedPages(1)
      /*await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()*/
    return {
      articles,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
