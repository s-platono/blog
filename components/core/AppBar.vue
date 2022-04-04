<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer"/>

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <NuxtLink :to="`/`">
          <v-img
            :src="require('@/assets/logo.png')"
            class="mr-5"
            contain
            height="48"
            width="48"
            max-width="48"

          />
        </NuxtLink>
        <v-btn
          v-for="(tag, i) in tags"
          :key="i"
          v-bind="tag"
          class="hidden-sm-and-down"
          text
          :to="`/tag/${tag.slug}`"
        >
          {{ tag.name }}
        </v-btn>

        <v-spacer />

        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          :max-width="$vuetify.breakpoint.xs ? '220px' : '300px'"
          class="col-sm-2 col-md-2 col-9"
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreAppBar',

    computed: {
      ...mapGetters(['tags']),
    },

    data() {
      return {
        searchQuery: '',
        articles: []
      }
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
    },

    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.articles = []
          return
        }
        this.articles = await this.$content('articles')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    }
  }
</script>
<style lang="scss">
</style>
