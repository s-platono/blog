<template>
  <v-autocomplete
    ref="bar"
    :items="items"
    :loading="isLoading"
    :search-input.sync="search"
    chips
    clearable
    hide-details
    hide-no-data
    hide-selected
    item-text="title"
    item-value="slug"
    append-icon="mdi-magnify"
    :style="`max-width: ${$vuetify.breakpoint.xs ? '220px' : '300px'};`"
    class="col-sm-2 col-md-2 col-9"
    solo-inverted
    flat
    @change="handleClick"
  >
    <template v-slot:selection="{ attr, on, item, selected }"></template>
    <template v-slot:item="{ item }">
        <v-list-item-avatar
          color="indigo"
          class="text-h5 font-weight-light white--text"
        >
          <img :src="item.img">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
        </v-list-item-content>
    </template>
  </v-autocomplete>
</template>

<script>

export default {
  name: "SearchBar",
  data: () => ({
    isLoading: false,
    items: [],
    model: null,
    search: null,
    tab: null,
  }),

  watch: {
    model(val) {
      this.model = null;
    },
    search(val) {
      this.isLoading = true

      this.$content('articles')
        .where({description: {$contains: val, ignoreCase: true}})
        .fetch()
        .then(res => this.items = res)
        .catch(err => console.error(err))
        .finally(() => (this.isLoading = false))

    },
  },
  methods: {
    handleClick(item) {
      this.$refs.bar.reset()
      this.$refs.bar.blur()
      this.$router.push({ name: 'article-slug', params: { slug: item } })
    }
  }
}
</script>

<style scoped>

</style>
