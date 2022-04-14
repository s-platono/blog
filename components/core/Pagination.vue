<template>

<!--    <v-col cols="3">
      <base-btn
        v-if="currentPage !== 1"
        class="ml-0"
        square
        title="Previous page"
        :to="{ name: `${type}-page-page`, params: { page: prevPage, tag: this.$route.params.tag } }"
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
        :to="{ name: `${type}-page-page`, params: { page: nextPage, tag: this.$route.params.tag } }"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </base-btn>
    </v-col>-->
    <div class="text-center mt-3" v-show="pages > 1">
      <v-pagination
        v-model="currentPage"
        :length="pages"
        :total-visible="5"
        @input="handlePageChange"
      ></v-pagination>
    </div>
</template>

<script>
import global from "~/utils/global";
export default {
  name: "Pagination",
  props: ['total', 'pageType'],
  data () {
    return {
      currentPage: parseInt(this.$route.query.page) || 1,
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.total.length / global.perPage);
    },
    /*currentPage() {
      return
    },*/
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.pages
        ? this.currentPage + 1
        : this.pages;
    },
  },
  methods: {
    handlePageChange(page) {
      this.$router.push({
        query: {
          page: page,
        },
      })
    }
  }
}
</script>

<style scoped>

</style>
