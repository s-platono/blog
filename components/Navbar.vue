<template>
  <b-navbar toggleable="lg" type="light" variant="light" fixed="top" class="py-2 col-lg-10 offset-lg-1 navigation" id="nav" >
    <NuxtLink to="/" class="navbar-brand">
      <!--      <Logo class="mb-4"/>-->
      Senior Platono
    </NuxtLink>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav class="pt-1">
      <!--      <AppSearchInput/>-->
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
@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@500&display=swap');

.navigation {
  border-bottom: 1px solid $brand-secondary;
  transition: all 0.5s;
}

.navbar li {
  padding-right: 20px;
}

.nav-link {
  font-size: 1.1em;
  text-transform: uppercase;
  color: $brand-darker;
}

.navbar-brand {
  font-weight: bolder;
  font-size: 2rem;
  line-height: 2.4rem;
  color: $brand-primary!important;
}

nav.shrink {
  padding: 0 1rem;
  box-sizing: border-box;
  border: none;

  .nav-link {
    font-size: .8em;
    text-transform: uppercase;
    color: $brand-white;
  }

  .navbar-brand {
    font-weight: bolder;
    font-size: 1.5rem;
    line-height: 2.4rem;
    color: $brand-white!important;
  }
}
</style>
