export default function ({ store, app: { $axios }, redirect }) {
  $axios.onRequest((config) => {
    if (process.client) {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  })
  $axios.onError((err) => {
    const statusCode = err.response.status
    switch (statusCode) {
      case 401: {
        redirect('/login')
        break
      }
    }
  })
}
