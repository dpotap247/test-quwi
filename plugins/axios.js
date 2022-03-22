export default function ({ store, app: { $axios, $cookies }, redirect }) {
  $axios.onRequest((config) => {
    if (process.client) {
      const token = $cookies.get('token')
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
