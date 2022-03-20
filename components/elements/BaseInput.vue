<template>
  <div class="base-input" :class="{ error: errors.length }">
    <div class="base-input__label">
      <span v-if="label">{{ label }}</span>
    </div>
    <input
      class="base-input__input"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @blur="showValidation"
      @focus="hiddenValidation"
    />
    <div class="base-input__error" v-if="errors && errors.length && !untouched">{{ errors[0] }}</div>
  </div>
</template>

<script>
import validationMixin from '@/mixins/validation.js'
export default {
  props: {
    label: String,
    placeholder: String,
    rules: String,
    value: String,
    type: {
      type: String,
      default: 'text',
    },
  },
  mixins: [validationMixin],
}
</script>

<style scoped lang="scss">
.base-input {
  width: 100%;
  &__label {
    margin-bottom: 3px;
  }
  &__error {
    margin-top: 3px;
    color: red;
  }
  &__input {
    width: 100%;
    height: 48px;
    font-size: 16px;
    padding: 0 12px;
    border-radius: 2px;
    border: 2px solid #cecece;
    &:focus {
      outline: none;
    }
  }
}
.error {
  &.base-input {
    &__input {
      border: 1px solid red;
    }
  }
}
</style>