<template>
  <section id="feed">
    <feed :articles="articles" :total="total">
      <slot />
    </feed>
  </section>
</template>

<script>
  export default {
    name: 'Articles',

    components: {
      Feed: () => import('@/components/Feed'),
    },

    props: ['articles', 'total']
  }
</script>
