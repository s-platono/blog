<template>
  <v-row align="center">
    <v-col cols="3">
      <base-btn
        v-if="currentPage !== 1"
        class="ml-0"
        square
        title="Previous page"
        :to="{ name: 'article-page-page', params: { page: prevPage } }"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </base-btn>
    </v-col>

    <v-col
      class="text-center subheading"
      cols="6"
    >
      PAGE {{ currentPage }} OF {{ pages }}
    </v-col>

    <v-col
      class="text-right"
      cols="3"
    >
      <base-btn
        v-if="pages > 1 && currentPage < pages"
        class="mr-0"
        square
        title="Next page"
        :to="{ name: 'article-page-page', params: { page: nextPage } }"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </base-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Pagination",
  props: ['page', 'pages'],
  computed: {
    totalPages() {
      console.log(this.pages)
      return Math.ceil(this.pages / 5);
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.pages
        ? this.currentPage + 1
        : this.pages;
    },
  }
}
</script>

<style scoped>

</style>
