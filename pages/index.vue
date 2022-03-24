<template>
  <div class="">
    <articles>
<!--      <banner />-->
    </articles>
<!--    <about />-->
<!--    <subscribe />-->
    <social />
  </div>
<!--  <div class="col-lg-12 d-flex justify-content-between flex-wrap">
    <ArticleCard v-for="article of articles" :key="article.slug" :article="article" />
  </div>-->
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
    Social: () => import('@/components/home/Social'),
    Subscribe: () => import('@/components/home/Subscribe'),
  },
  computed: {
    ...mapGetters({
      tags: 'tags',
      articles: 'articles'
    })
  },
  /*async asyncData({$content, params}) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tags
    }
  }*/

}
</script>

<style lang="scss" scoped>

</style>
