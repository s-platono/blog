<template>
  <header class="flex">
    <NuxtLink to="/"><Logo class="mb-4" /></NuxtLink>
    <Navbar :tags="tags"/>
    <AppSearchInput class="ml-8" />
  </header>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters ({
      tags: 'tags'
    })
  }
}
</script>
