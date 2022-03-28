<template>
  <section id="feed">
    <feed :articles="articles">
      <slot />
    </feed>
  </section>
</template>

<script>
  export default {
    name: 'HomeAbout',

    components: {
      Feed: () => import('@/components/Feed'),
    },

    props: ['articles']
  }
</script>
