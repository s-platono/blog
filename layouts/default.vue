<template>
  <v-app>
    <core-app-bar/>
    <core-drawer/>
    <core-view/>
    <!--      <social />-->
    <core-footer/>
  </v-app>
</template>
<script>
export default {
  components: {
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreFooter: () => import('@/components/core/Footer'),
    CoreAppBar: () => import('@/components/core/AppBar'),
    CoreView: () => import('@/components/core/View'),
    Social: () => import('@/components/home/Social')
  },
}
</script>
<style lang="scss">
.v-application--wrap {
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
}
</style>
