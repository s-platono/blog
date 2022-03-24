<template>
<!--  <b-navbar toggleable="lg" type="light" variant="light" fixed="top" class="py-2 col-lg-10 offset-lg-1 navigation" id="nav" >
    <NuxtLink to="/" class="navbar-brand">
      &lt;!&ndash;      <Logo class="mb-4"/>&ndash;&gt;
      Senior Platono
    </NuxtLink>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav class="pt-1">
      &lt;!&ndash;      <AppSearchInput/>&ndash;&gt;
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
  </b-navbar>-->
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <NuxtLink v-for="tag of tags" :key="tag.slug" class="navbar-item" :to="`/tag/${tag.slug}`">
          {{ tag.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
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
    this.$nextTick(function () {
      window.addEventListener("scroll", function () {
        let navbar = document.getElementById("nav")
        let nav_classes = navbar.classList
        if (document.documentElement.scrollTop >= 150) {
          if (nav_classes.contains("shrink") === false) {
            nav_classes.toggle("shrink");
            nav_classes.toggle("py-2");
            nav_classes.remove("bg-light");
            nav_classes.remove("navbar-light");
            nav_classes.toggle("bg-dark");
            nav_classes.toggle("navbar-dark");
            nav_classes.remove("col-lg-10");
            nav_classes.remove("offset-lg-1");
          }
        } else {
          if (nav_classes.contains("shrink") === true) {
            nav_classes.toggle("shrink");
            nav_classes.toggle("py-2");
            nav_classes.toggle("bg-dark");
            nav_classes.toggle("navbar-dark");
            nav_classes.add("bg-light");
            nav_classes.add("navbar-light");
            nav_classes.add("col-lg-10");
            nav_classes.add("offset-lg-1");
          }
        }
      })
    })
  },
}
</script>
<style scoped lang="scss">

</style>
