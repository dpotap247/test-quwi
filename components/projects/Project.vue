<template>
  <div class="item" v-if="data">
    <Spinner v-if="!data || time.all_time_spent_sec === null" />
    <template v-else>
      <div class="item__main-info">
        <img class="item__logo" :src="data.logo_url" alt="company logo" />
        <span class="item__name"> {{ data.name }} </span>
      </div>

      <div class="item__status" :class="`status_${checkStatus(data.is_active)}`">{{ checkStatus(data.is_active) }}</div>

      <div class="item__time">
        <div class="time__item">
          time this week
          <span>{{ time.last_30_days_spent_sec}}</span>
        </div>
        <div class="time__item">
          this month
          <span>{{ time.this_month_spent_sec }}</span>
        </div>
        <div class="time__item">
          total
          <span>{{ time.all_time_spent_sec }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import formatter from '@/mixins/formatter.js'
import Spinner from '@/components/elements/Spinner.vue'

export default {
  mixins: [formatter],
  components: {
    Spinner,
  },
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      time: {
        all_time_spent_sec: null,
        last_30_days_spent_sec: null,
        this_month_spent_sec: null,
      },
    }
  },
  created() {
    this.loadTime()
  },
  methods: {
    checkStatus(num) {
      switch (num) {
        case 1: {
          return 'active'
        }
        case 0: {
          return 'passive'
        }
      }
    },
    async loadTime() {
      const params = {
        id_project: this.data.id,
      }

      try {
        const {
          data: {
            task: { all_time_spent_sec, last_30_days_spent_sec, this_month_spent_sec },
          },
        } = await this.$axios.get('/stats-bugtracker/issues-bugs-times', { params })

        this.time.all_time_spent_sec = this.formatDate(all_time_spent_sec)
        this.time.last_30_days_spent_sec = this.formatDate(last_30_days_spent_sec)
        this.time.this_month_spent_sec = this.formatDate(this_month_spent_sec)

        this.$emit('updateTime', this.time)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>


<style scoped lang="scss">
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-radius: 4px;
  border: 1px solid hsl(0, 0%, 95%);
  background: #fff;
  margin-bottom: 6px;
  cursor: pointer;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  &:last-of-type {
    margin-bottom: 0;
  }
  &__name {
    font-weight: 600;
  }
  &__logo {
    width: 34px;
    margin-right: 20px;
  }
  &__status {
    text-transform: capitalize;
    font-weight: 600;
  }
  &__main-info {
    display: flex;
    align-items: center;
  }
  &__time {
    span {
      display: inline-block;
      margin-left: 20px;
      font-weight: bold;
    }
  }
}
.time {
  &__item {
    white-space: nowrap;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.status {
  &_active {
    color: #699452;
  }
  &_passive {
    color: red;
  }
}
</style>