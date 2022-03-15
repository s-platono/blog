<template>
  <div id="page" class="container-fluid">
    <Header/>
    <main class="col-lg-12 mt-5 pt-5">
      <Nuxt/>
    </main>
    <footer class="footer">
      <div class="col-lg-8 offset-lg-2">
        <p class="col-lg- offset-lg-10">
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
