<template>
  <div id="page" class="container-fluid">
    <Header/>
    <main class="mt-5 pt-5">
      <Nuxt/>
    </main>
    <footer class="footer">
      <div class="container">
        <p class="mt-4">
          <a href="https://twitter.com/el_platono" class="font-bold hover:underline">
            <font-awesome-icon :icon="['fa-brands', 'twitter']"/>
          </a>
          {{new Date().getFullYear()}}
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.container-fluid {
  padding: 0;
  margin: 0;
}
</style>
