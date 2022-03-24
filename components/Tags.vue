<template>
  <v-container class="pa-0">
    <base-subheading>Tags</base-subheading>

    <v-chip
      v-for="(tag, i) in tags"
      :key="i"
      class="mx-1 my-1 v-btn"
      color="secondary"
      label
      small
      tag
      text-color="white"
      :to="`/tag/${tag.slug}`"
    >
      {{ tag.name }}
    </v-chip>
  </v-container>
</template>

<script>
// Utilities
import {mapGetters} from 'vuex'

export default {
  name: 'Tags',

  computed: {
    ...mapGetters(['tags']),
  },
}
</script>
