<template>
  <div class="header">
    <img class="header__logo" width="30" height="30" src="https://api.quwi.com/images/logo_150.png" />
    <div class="header__links">
      <Link class="header__link" :data="item" v-for="(item, index) in links" :key="index" />
    </div>
  </div>
</template>

<script>
import Link from '@/components/elements/Link.vue'

export default {
  components: {
    Link,
  },
  data() {
    return {
      links: [
        {
          text: 'Projects',
          href: '/dashboard',
        },
        {
          text: 'Logout',
          href: '/login',
        },
      ],
    }
  },
}
</script>


<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  &__links {
    display: flex;
    align-items: center;
  }
  &__item {
    margin-right: 30px;
    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>