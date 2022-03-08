<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand">
        <Logo class="mb-4"/>
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navContent"
              aria-controls="navContent"
              aria-expanded="false" aria-label="toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navContent">
        <ul class="navbar-nav mr-auto mb-3 mb-lg-0">
          <li
            v-for="tag of tags"
            :key="tag.slug"
            class="nav-item"
          >
            <NuxtLink :to="`/tag/${tag.slug}`" class="nav-link">
              <p
                class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"
              >
                {{ tag.name }}
              </p>
            </NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" id="navDrop" role="button" data-toggle="dropdown" aria-expanded="true">dropdown</a>
            <ul class="dropdown-menu" aria-labelledby="navDrop">
              <li><a href="#" class="dropdown-item">Dropdown item test</a></li>
              <li><a href="#" class="dropdown-item">Dropdown item test 2</a></li>
            </ul>
          </li>
        </ul>
        <AppSearchInput />
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
      color: rgba(255,255,255, .64);
    }
  }
</style>
