<template>
  <v-col
    cols="12"
    :md="size === 2 ? 6 : size === 3 ? 4 : undefined"
  >
    <base-card
      :height="value.prominent ? 450 : 350"
      color="grey lighten-1"
      dark
      :to="{ name: 'article-slug', params: { slug: value.slug } }"
    >
      <!--        :src="require(`@/assets/articles/${value.img}`)"-->
      <v-img
        :src="value.img"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-row
          v-if="!value.prominent"
          class="fill-height text-right ma-0"
        >
          <v-col cols="12">
            <v-chip v-for="tag in tags" :key="tag.slug"
                    label
                    class="mx-1 mb-2 text-uppercase"
                    color="grey darken-3"
                    text-color="white"
                    small
                    @click.stop=""
                    :to="`/tag/${tag.slug}`"
            >
              {{ tag.name }}
            </v-chip>

            <h3 class="title font-weight-bold mb-2">
              {{ value.title }}
            </h3>

            <div class="caption">
              {{ value.description }}<br>{{ formatDate(value.createdAt) }}
            </div>
          </v-col>

          <v-col align-self="end">
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              :to="{ name: 'article-slug', params: { slug: value.slug } }"
            >
              Read More
            </v-chip>
          </v-col>
        </v-row>
      </v-img>
    </base-card>
  </v-col>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'FeedCard',

  props: {
    size: {
      type: Number,
      required: true,
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    ...mapGetters({
      tagsList: 'tagList'
    }),
    tags() {
      const list = this.tagsList(this.value.tags)
      return Object.assign({}, ...list.map((s) => ({[s.name]: s})))
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
.v-image__image {
  transition: .3s linear;
}
</style>
