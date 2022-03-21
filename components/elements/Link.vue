<template>
  <nuxt-link class="link" :class="[linkClasses]" :to="data.href">{{ data.text }}</nuxt-link>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {
        text: 'Link',
        href: '#',
      },
    },
    type: String,
  },
  computed: {
    linkClasses() {
      if (this.type === 'primary') {
        return 'uppercase'
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped>
.uppercase {
  text-transform: uppercase;
}
.link {
  text-decoration: none;
  color: #777A84;
}
</style>