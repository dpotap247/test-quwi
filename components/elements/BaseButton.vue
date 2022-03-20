<template>
  <button class="btn" :class="[`btn_${type}`]"><slot /></button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
}
</script>

<style scoped lang="scss">
.btn {
  border: none;
  box-shadow: none;
  padding: 16px 40px;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  &_primary {
      background: #3F5275;
      color: #fff;
  }
}
</style>
