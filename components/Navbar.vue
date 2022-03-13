<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
    <NuxtLink to="/" class="navbar-brand">
      <Logo class="mb-4"/>
    </NuxtLink>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="navbar-nav mr-auto mb-3 mb-lg-0">
        <b-nav-item v-for="tag of tags" :key="tag.slug" :to="`/tag/${tag.slug}`">
          {{ tag.name }}
        </b-nav-item>
        <b-nav-item-dropdown text="DD Test" hidden>
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
  },
  mounted() {

  }
}
</script>
<style scoped lang="scss">

.navbar-dark .navbar-nav .nav-link {
  font-weight: 800;
  font-size: 1.4rem;

  .navbar-brand {
    color: #999;
    font-weight: bolder;
    font-size: 2.2rem;
    letter-spacing: 1px;
  }

  &:hover {
    color: rgba(255, 255, 255, .64);
  }
}
</style>
