<template>
  <div class="">
    <NuxtLink
      :to="`/author/${author.name}`"
      class=""
    >
      <img
        v-if="author.img"
        class="col-lg-2"
        :src="author.img"
      />
      <div class="flex flex-col m-4">
        <h4 class="font-semibold">Author</h4>
        <p>{{ author.name }}</p>
        <p>{{ author.bio }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
