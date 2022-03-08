<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <NuxtLink to="/" class="navbar-brand">
      <Logo class="mb-4"/>
    </NuxtLink>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="navbar-nav mr-auto mb-3 mb-lg-0">
        <b-nav-item
          v-for="tag of tags"
          :key="tag.slug"
          :to="`/tag/${tag.slug}`"
        >
          {{ tag.name }}
        </b-nav-item>
        <b-nav-item-dropdown text="DD Test">
          <b-dropdown-item to="#">Dropdown item test</b-dropdown-item>
          <b-dropdown-item to="#">Dropdown item test 2</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <AppSearchInput/>
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
  }
}
</script>
<style scoped lang="scss">
nav {
  background-color: black;
}

.navbar-dark .navbar-nav .nav-link {
  color: white;

  &:hover {
    color: rgba(255, 255, 255, .64);
  }
}
</style>
