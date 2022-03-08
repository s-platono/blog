<template>
  <div>
    <Header/>
    <b-card no-body class="overflow-hidden"
            v-for="article of articles"
            :key="article.slug"
            :title="article.title"
            img-top
            :img-src="article.img"
    >
      <!--      <b-row no-gutters>-->
      <!--        <b-col md="6">
                <b-card-img-lazy
                  v-if="article.img"
                  class="rounded-9"
                  :alt="article.title"
                  :src="article.img"
                />
              </b-col> -->
      <b-col md="6">
        <NuxtLink
          :to="{ name: 'article-slug', params: { slug: article.slug } }"
        >
          <b-card-body>
            <b-card-text>
              {{ article.description }}
            </b-card-text>
            <template #footer>
              <small class="text-muted">{{ article.author.name }}, {{ formatDate(article.updatedAt) }}</small>
            </template>
          </b-card-body>
        </NuxtLink>
      </b-col>
      <!--      </b-row>-->
    </b-card>
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
    <footer class="footer">
      <div class="container">
        <p class="mt-4">
          Created by
          <a
            href="https://twitter.com/el_platono"
            class="font-bold hover:underline"
          >Senior Platono</a
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from "~/components/Header";

export default {
  components: {
    Header
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
  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('ru', options)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
