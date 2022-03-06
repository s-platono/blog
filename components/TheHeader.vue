<template>
  <header class="flex">
    <NuxtLink to="/"><Logo class="mb-4" /></NuxtLink>
    <Navbar/>
    <AppSearchInput class="ml-8" />
  </header>
</template>
<script>
import Navbar from "~/components/Navbar";
export default {
  comments: {
    Navbar
  }
}
</script>
