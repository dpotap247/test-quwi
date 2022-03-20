<template>
  <div class="form">
    <div class="form__title"> Login </div>
    <ValidationObserver ref="formValidationObserver">
      <BaseInput class="form__email" placeholder="Email" rules="required|email" v-model="form.email" />
      <BaseInput class="form__password" placeholder="Password" rules="required|min:6" v-model="form.password" />
    </ValidationObserver>
    <BaseButton class="form__button" type="primary" @click.native="submit">Login</BaseButton>
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
    }
  },
  methods: {
    submit() {
      if (this.$refs.formValidationObserver.isValid()) {
          
      }
    },
  },
}
</script>


<style scoped lang="scss">
.form {
  width: 414px;
  &__title {
    font-weight: 600;
    font-size: 21px;
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