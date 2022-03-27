<template>
  <v-list>
    <v-list-group prepend-icon="mdi-format-list-bulleted-square">
      <template v-slot:activator>
        <v-list-item-title>Table of content</v-list-item-title>
      </template>

      <component
        :is="link.child.length === 0 ? 'v-list-item' : 'v-list-group'"
        v-for="link in toc"
        :key="link.id"
        :no-action="link.child.length > 0"
        :sub-group="link.child.length > 0"
        :link="link.child.length === 0"
        :to="link.child.length === 0 ? `#${link.id}` : ''"
      >
        <template v-slot:activator v-if="link.child.length > 0">
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-else link>
          <v-list-item-title v-text="link.text"></v-list-item-title>
          <v-list-item-icon>
<!--            <v-icon v-text="icon"></v-icon>-->
          </v-list-item-icon>
        </v-list-item>

        <v-list-item v-if="link.child.length > 0"
                     v-for="child in link.child" :key="child.id" link
                     :to="`#${child.id}`"
        >
          <v-list-item-title v-text="child.text"></v-list-item-title>
          <v-list-item-icon>
<!--            <v-icon v-text="icon"></v-icon>-->
          </v-list-item-icon>
        </v-list-item>
      </component>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  name: "Header",
  props: {
    toc: Array
  },
}
</script>

<style scoped>
a {
  padding-left: 0;
}
.v-list-group__header {
  padding-left: 0;
}
</style>
