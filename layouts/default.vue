<template>
  <div id="app">
    <Header />
    <Nuxt class="page" />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
export default {
  components: {
    Header,
  },
  created() {
    const isAuthorized = !!this.$cookies.get('token')
    this.$store.commit('updateAuthorized', isAuthorized)
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
}

#app {
  width: 100%;
  height: 100vh;
  font-size: 14px;
  background: #f5f4f3;
  padding-bottom: 20px;
}
.page {
  padding: 20px;
  height: calc(100% - 45px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
}
.toasted-container.top-right {
  top: 48px!important;
  right: 16px!important;
}
</style>
