<template>
  <article class="col-lg-8 offset-lg-2" style="background-color: #c7c7c7;">
    <header>
      {{ article.title }}
      {{ article.author.name }}
      {{ formatDate(article.createdAt) }}
      <nav class="pb-6">
        <ul>
          <li v-for="link of article.toc" :key="link.id"
            :class="{
              'font-semibold': link.depth === 2
            }">
            <nuxtLink :to="`#${link.id}`" class="hover:underline"
              :class="{
                'py-2': link.depth === 2,
                'ml-2 pb-2': link.depth === 3
              }">
              {{ link.text }}
            </nuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <nuxt-content :document="article"/>
    </main>
    <footer>
      <author :author="article.author"/>
    </footer>
  </article>
</template>
<script>
export default {
  async asyncData({$content, params, store}) {
    // const article = await $content('articles', params.slug).fetch()
    const article = store.getters.article(params.slug)
    /* const tagsList = await $content('tags')
       .only(['name', 'slug'])
       .where({ name: { $containsAny: article.tags } })
       .fetch()*/
    const tagsList = store.getters.tagList(article.tags)
    const tags = Object.assign({}, ...tagsList.map((s) => ({[s.name]: s})))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next
    }
  },
  head() {
    return {
      title: this.article.title
    }
  },
  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('ru', options)
    }
  }
}
</script>
<style>
.nuxt-content p {
  margin-bottom: 20px;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}

.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
