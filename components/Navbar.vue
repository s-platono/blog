<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" class="py-2">
    <NuxtLink to="/" class="navbar-brand">
<!--      <Logo class="mb-4"/>-->
      Senior Platono
    </NuxtLink>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav class="pt-1">
      <AppSearchInput/>
      <b-navbar-nav class="navbar-nav mb-3 mb-lg-0 ml-auto">
        <b-nav-item v-for="tag of tags" :key="tag.slug" :to="`/tag/${tag.slug}`" class="centered">
          {{ tag.name }}
        </b-nav-item>
        <b-nav-item-dropdown text="DD Test" hidden>
          <b-dropdown-item to="#">Dropdown item test</b-dropdown-item>
          <b-dropdown-item to="#">Dropdown item test 2</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import AppSearchInput from "~/components/AppSearchInput";

export default {
  name: 'Navbar',
  props: {
    tags: Array
  },
  comments: {
    AppSearchInput
  },
  mounted() {

  }
}
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@500&display=swap');

.navbar li {
  padding-right: 20px;
}
.nav-link {
  font-size: 1.1em;
  text-transform: uppercase;
}

.navbar-brand {
  font-family: 'Sansita Swashed', cursive;
  font-weight: bolder;
  font-size: 2rem;
  line-height: 2.4rem;
}
</style>
