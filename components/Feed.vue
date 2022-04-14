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

    <Pagination :total="total" :page-type="pageType"/>
  </v-container>
</template>

<script>
import global from "~/utils/global";
export default {
  name: 'Feed',

  components: {
    FeedCard: () => import('@/components/FeedCard'),
    Pagination: () => import('@/components/core/Pagination'),
  },

  data: () => ({
    layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
  }),
  props: ['articles', 'total', 'pageType'],

  computed: {
    pages() {
      return Math.ceil(this.total.length / global.perPage)
    },
  }
}
</script>
