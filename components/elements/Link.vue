<template>
  <nuxt-link :class="[linkClasses]" :to="data.href">{{ data.text }}</nuxt-link>
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
      if (type === 'primary') {
        return 'underline'
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped>
.underline {
  text-transform: underline;
}
</style>