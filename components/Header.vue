<template>
  <header id="header" class="fixed-top">
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
