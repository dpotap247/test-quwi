<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    isValid() {
      let isValid = true
      this.$children.forEach((input) => {
        input.showValidation()
        if (input.errors.length) {
          isValid = false
        }
      })
      return isValid
    },
    hiddenValidation() {
      this.$childer.forEach((input) => {
        input.hiddenValidation()
      })
    },
  },
}
</script>
