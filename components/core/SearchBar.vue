<template>
  <v-text-field
    append-icon="mdi-magnify"
    flat
    hide-details
    solo-inverted
    :style="`max-width: ${$vuetify.breakpoint.xs ? '220px' : '300px'};`"
    class="col-sm-2 col-md-2 col-9"
  />
</template>

<script>
export default {
  name: "SearchBar"
}
</script>

<style scoped>

</style>
