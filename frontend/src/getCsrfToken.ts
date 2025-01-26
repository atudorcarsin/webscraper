import axios from 'axios'

async function getCsrfToken() {
    try {
        await axios.get('/ping/')
        axios.defaults.headers.common['X-CSRFToken'] = document.cookie
            .split("; ")
            .find((row) => row.startsWith("csrftoken="))
            ?.split("=")[1];
    }
    catch (error) {
        console.error(error)
    }
}

getCsrfToken()