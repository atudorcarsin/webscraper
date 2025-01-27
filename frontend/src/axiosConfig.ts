import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_PROTOCOL + '://' +
    import.meta.env.VITE_CLIENT_HOST +
    ':' + import.meta.env.VITE_BACKEND_PORT
axios.defaults.withCredentials = true
