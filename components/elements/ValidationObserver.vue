<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isValidationVisible: false,
    }
  },
  methods: {
    isValid() {
      if(this.isValidationVisible) {
        return
      }

      let isValid = true
      this.$children.forEach((input) => {
        input.showValidation()
        if (input.errors.length) {
          isValid = false
        }
      })
      setTimeout(() => {
        if (this.isValidationVisible) {
          this.hiddenValidation()
        }
      }, 3000)

      this.isValidationVisible = !isValid
      return isValid
    },
    hiddenValidation() {
      this.isValidationVisible = false
      this.$children.forEach((input) => {
        input.hiddenValidation()
      })
    },
  },
}
</script>
