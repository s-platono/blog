<template>
    <header id="main-header" role="banner" data-stellar-background-ratio="0.5">
      <Navbar :tags="tags"/>
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
<style lang="scss">

</style>
