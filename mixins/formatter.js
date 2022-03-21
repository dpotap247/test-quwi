export default {
  methods: {
    formatDate(val) {
      const date = new Date(0)
      date.setSeconds(val)
      const value = date.toISOString().substr(11, 8)
      return value
    },
  },
}
