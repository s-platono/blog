<template>
  <div class="col-lg-12 flex-lg flex-lg-wrap d-flex justify-content-between">
<!--    <b-card class="overflow-hidden col-lg-3 m-2"
            v-for="article of articles"
            :key="article.slug"
            :img-src="article.img"
    >
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

    </b-card>-->
    <ArticleCard v-for="article of articles" :key="article.slug" :article="article" />
    <!--    <h3 class="mb-4 font-bold text-2xl uppercase text-center">Topics</h3>-->
    <!--    <ul class="flex flex-wrap mb-4 text-center">
          <li
            v-for="tag of tags"
            :key="tag.slug"
            class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
          >
            <NuxtLink :to="`/tag/${tag.slug}`" class="">
              <p
                class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"
              >
                {{ tag.name }}
              </p>
            </NuxtLink>
          </li>
        </ul>-->

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from "~/components/Header";
import ArticleCard from '~/components/ArticleCard'

export default {
  components: {
    Header, ArticleCard
  },
  computed: {
    ...mapGetters({
      tags: 'tags',
      articles: 'articles'
    })
  },
  /*async asyncData({$content, params}) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tags
    }
  }*/

}
</script>

<style lang="scss" scoped>

</style>
