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
  }
}
</script>

<style scoped>

</style>
