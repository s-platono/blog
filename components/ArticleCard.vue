<template>
  <b-card class="overflow-hidden col-xs-12 col-sm-6 col-md-5 col-lg-3 m-md-1 m-lg-2 mb-sm-1 mb-2 p-0 " :img-src="article.img">
    <template #header>
      <NuxtLink
        :to="{ name: 'article-slug', params: { slug: article.slug } }"
      >
        {{ article.title }}
      </NuxtLink>
    </template>
    <b-card-body>
      <b-card-text>
        {{ article.description }}
      </b-card-text>
    </b-card-body>
    <template #footer>
      <small class="text-muted">{{ article.author.name }}, {{ formatDate(article.updatedAt) }}</small>
    </template>

  </b-card>
</template>

<script>

export default {
  name: "ArticleCard",
  props: {
    article: Object
  },
  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('ru', options)
    }
  }
}
</script>

<style scoped>

</style>
