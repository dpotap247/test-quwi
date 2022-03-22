import { parseServerError } from "@/helpers/parseError"

export default function ({ store, app: { $axios, $cookies, $toast }, redirect }) {
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
    const response = err.response
    const errorData = response.data
    const statusCode = response.status
    
    $toast.error(parseServerError(errorData))

    switch (statusCode) {
      case 401: {
        redirect('/login')
        break
      }
    }
  })
}
