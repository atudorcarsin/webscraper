import axios from 'axios'

axios.defaults.baseURL = process.env.BACKEND_PROTOCOL ?? 'http' + '://' +
    process.env.BACKEND_HOST ?? 'backend' +
    ':' + process.env.BACKEND_PORT ?? '8000'
axios.defaults.withCredentials = true
