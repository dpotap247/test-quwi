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
  mounted() {
    this.$cookies.remove('token')
    this.$store.commit('updateAuthorized', false)
  },
  methods: {
    async login(payload) {
      try {
        const {
          data: { token },
        } = await this.$axios.post('auth/login', payload)

        if (token) {
          this.$cookies.set('token', 'token')
          this.$store.commit('updateAuthorized', !!token)
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
