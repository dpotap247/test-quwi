<template>
  <button class="btn" :class="[`btn_${type}`]">
    <Spinner v-if="isLoading" />
    <slot v-else />
  </button>
</template>

<script>
import Spinner from '@/components/elements/Spinner.vue'

export default {
  props: {
    type: {
      type: String,
      default: 'default',
    },
    isLoading: Boolean,
  },
  components: {
    Spinner,
  },
}
</script>

<style scoped lang="scss">
.btn {
  border: none;
  box-shadow: none;
  padding: 0 40px;
  height: 48px;
  min-width: 120px;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  &_primary {
    background: #3f5275;
    color: #fff;
  }
}
</style>
