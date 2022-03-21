<template>
  <div>
    <Form ref="form" @submit="login" />
  </div>
</template>

<script>
import Form from '@/components/auth/LoginForm.vue'

export default {
  components: {
    Form,
  },
  methods: {
    async login(payload) {
      try {
        const {
          data: { token },
        } = await this.$axios.post('auth/login', payload)

        if (token) {
          localStorage.setItem('token', token)
          this.$router.push('/')
        }
      } catch (err) {
        console.log(err)
      }
      
      this.$refs.form.isLoading = false
    },
  },
}
</script>
