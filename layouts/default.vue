<template>
  <div id="page" class="v-application v-application--is-ltr theme--light">
    <div class="v-application--wrap">
      <core-app-bar />
      <core-drawer />
      <core-view />
      <social />
      <core-footer />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreFooter: () => import('@/components/core/Footer'),
    CoreAppBar: () => import('@/components/core/AppBar'),
    CoreView: () => import('@/components/core/View'),
    Social: () => import('@/components/home/Social'),
  },
}
</script>
<style lang="scss">
</style>
