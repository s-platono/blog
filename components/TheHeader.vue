<template>
  <header class="flex">
    <NuxtLink to="/"><Logo class="mb-4" /></NuxtLink>
    <Navbar :tags="tags"/>
    <AppSearchInput class="ml-8" />
  </header>
</template>
<script>
import {mapGetters} from 'vuex'
import AppSearchInput from "~/components/AppSearchInput"
import Navbar from "~/components/Navbar"
import Logo from '~/components/Logo'

export default {
  components: {
    Navbar, AppSearchInput, Logo
  },
  computed: {
    ...mapGetters({
      tags: 'tags'
    })
  }
}
</script>
