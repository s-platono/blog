<template>
  <v-container class="pa-0">
    <base-subheading>Newest Blog Posts</base-subheading>

    <v-row
      v-for="(article, i) in articles.slice(articles.length - 3, articles.length)"
      :key="i"
      align="center"
      class="mb-2"
    >
      <v-col
        class="d-flex"
        cols="12"
      >
        <v-img
          :src="article.img"
          class="mr-3"
          height="36"
          max-width="36"
        />

        <div>
          <div class="subheading">
            {{ article.title }}
          </div>

          <div class="caption">
            {{ formatDate(article.createdAt) }}
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import { mapGetters } from 'vuex'

  export default {
    name: 'NewestPosts',

    computed: {
      ...mapGetters(['articles']),
    },
    methods: {
      formatDate(date) {
        const options = {year: 'numeric', month: 'long', day: 'numeric'}
        return new Date(date).toLocaleDateString('ru', options)
      }
    }
  }
</script>
