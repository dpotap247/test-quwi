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
  background: #F5F4F3;
}
.page {
  padding: 20px;
  height: calc(100% - 45px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
