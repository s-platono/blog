<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <slot/>
      </v-col>

      <feed-card
        v-for="(article, i) in articles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
      />
    </v-row>

    <Pagination :page="page" :pages="pages"/>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Feed',

  components: {
    FeedCard: () => import('@/components/FeedCard'),
    Pagination: () => import('@/components/core/Pagination'),
  },

  asyncData({$content, params, store}) {
  },

  data: () => ({
    layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
    page: 1,
  }),
  props: ['articles', 'total'],

  computed: {
    // ...mapGetters(['articles']),
    pages() {
      return Math.ceil(this.total.length / 5)
    },
    paginatedArticles() {
      const start = (this.page - 1) * 11
      const stop = this.page * 11

      return this.articles.slice(start, stop)
    },
  },

  watch: {
    page() {
      window.scrollTo(0, 0)
    },
  },
}
</script>
