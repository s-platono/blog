<template>
  <v-row align="center">
    <v-col cols="3">
      <base-btn
        v-if="page !== 1"
        class="ml-0"
        square
        title="Previous page"
        @click="page--"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </base-btn>
    </v-col>

    <v-col
      class="text-center subheading"
      cols="6"
    >
      PAGE {{ page }} OF {{ pages }}
    </v-col>

    <v-col
      class="text-right"
      cols="3"
    >
      <base-btn
        v-if="pages > 1 && page < pages"
        class="mr-0"
        square
        title="Next page"
        @click="page++"
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
      return Math.ceil(this.pages / 10);
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    },
  }
}
</script>

<style scoped>

</style>
