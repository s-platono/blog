<template>
  <NuxtLink class="article col-xs-12 col-sm-6 col-md-5 col-lg-3 mb-4"
    :to="{ name: 'article-slug', params: { slug: article.slug } }"
  >
    <b-card class="overflow-hidden p-0"
            overlay
            :img-src="article.img"
            text-variant="white"
            :title=" article.title "
            :sub-title="`${article.author.name}, ${formatDate(article.updatedAt)}`"
            sub-title-text-variant="white"
            img-height="300px"
            img-width="300px"
    >
      <b-card-text>
        {{ article.description }}
      </b-card-text>
    </b-card>
  </NuxtLink>
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

<style scoped lang="scss">
.article {
  &:hover {
    & .card {
      border: none;
      box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.4);
      -webkit-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.4);
      -moz-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.4);
    }
  }
}
</style>
