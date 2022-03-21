export const state = () => ({
  isAuthorized: false,
})
export const mutations = {
  updateAuthorized(state, value) {
    state.isAuthorized = value
  },
}
