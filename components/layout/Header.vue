<template>
  <div class="header">
    <img class="header__logo" width="30" height="30" src="https://api.quwi.com/images/logo_150.png" />
    <div class="header__links" v-if="links && links.length">
      <Link class="header__link" type="primary" :data="item" v-for="(item, index) in links" :key="index" />
    </div>
  </div>
</template>

<script>
import Link from '@/components/elements/Link.vue'

export default {
  components: {
    Link,
  },
  computed: {
    isAuthorized() {
      return this.$store.state.isAuthorized
    },
    links() {
      if (!this.isAuthorized) {
        return [
          {
            text: 'Login',
            href: '/login',
          },
        ]
      }
      return [
        {
          text: 'Projects',
          href: '/',
        },
        {
          text: 'Logout',
          href: '/login',
        },
      ]
    },
  },
}
</script>


<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 45px;
  background: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  &__links {
    display: flex;
    align-items: center;
  }
  &__link {
    margin-right: 30px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  &__item {
    margin-right: 30px;
    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>