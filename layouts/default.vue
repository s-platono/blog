<template>
  <div id="page" class="v-application v-application--is-ltr theme--light">
    <!--    <Header/>
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
        </footer>-->
    <div class="v-application--wrap">
      <core-app-bar/>
      <core-drawer/>
      <core-view/>
      <core-footer/>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    CoreCta: () => import('@/components/core/Cta'),
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreFooter: () => import('@/components/core/Footer'),
    CoreAppBar: () => import('@/components/core/AppBar'),
    CoreView: () => import('@/components/core/View'),
  },
}
</script>
<style lang="scss">
</style>
