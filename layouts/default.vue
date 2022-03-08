<template>
  <div class="container-fluid">
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
html {
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  font-weight: 300;
  font-size: 10px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Raleway";
  font-weight: 300;
  color: #333;
}
</style>
