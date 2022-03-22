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
  created() {
    this.logout()
  },
  methods: {
    async login(payload) {
      try {
        const {
          data: { token },
        } = await this.$axios.post('auth/login', payload)

        if (token) {
          this.$cookies.set('token', token)
          this.$store.commit('updateAuthorized', !!token)
          this.$router.push('/')
        }
      } catch (err) {
        console.log(err)
      }
      this.$refs.form.isLoading = false
    },
    logout() {
      if (this.$cookies.get('token')) {
        this.$cookies.remove('token')
        this.$store.commit('updateAuthorized', false)
      }
    },
  },
}
</script>
