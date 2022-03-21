<template>
  <div class="form">
    <div class="form__title"> Login </div>
    <ValidationObserver ref="formValidationObserver">
      <BaseInput class="form__email" placeholder="Email" rules="required|email" v-model="form.email" />
      <BaseInput
        class="form__password"
        type="password"
        placeholder="Password"
        rules="required|min:6"
        v-model="form.password"
      />
    </ValidationObserver>
    <BaseButton class="form__button" :isLoading="isLoading" type="primary" @click.native="submit">Login</BaseButton>
  </div>
</template>

<script>
import BaseInput from '@/components/elements/BaseInput.vue'
import BaseButton from '@/components/elements/BaseButton.vue'
import ValidationObserver from '@/components/elements/ValidationObserver.vue'

export default {
  components: {
    BaseInput,
    BaseButton,
    ValidationObserver,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      isLoading: false,
    }
  },
  methods: {
    submit() {
      if (this.$refs.formValidationObserver.isValid()) {
        this.isLoading = true
        this.$emit('submit', this.form)
      }
    },
  },
}
</script>


<style scoped lang="scss">
.form {
  width: 415px;
  box-sizing: content-box;
  padding: 24px;
  background: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 4px;
  &__title {
    font-weight: 600;
    font-size: 22px;
  }
  &__email {
    margin-top: 24px;
  }
  &__password {
    margin-top: 12px;
  }
  &__button {
    margin-top: 24px;
  }
}
</style>