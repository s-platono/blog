<template>
  <articles :articles="articles">

  </articles>
</template>

<script>
export default {
  name: "_page",
  components: {
    Articles: () => import('@/components/home/Articles'),
  },
  asyncData(ctx) {
    let articles = ctx.store.getters.paginatedPages(ctx.params.page);
    return {
      articles
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
