import axios from 'axios'
import {useState} from 'react'
import {formDataToObject} from "./forms.ts";
import {useNavigate} from "react-router";

function Login() {
    const navigate = useNavigate()

    const [error, setError] = useState('')

    async function sendCredentials(formData: FormData) {
        try {
            await axios.post('/login/', formDataToObject(formData))
            navigate('/')
        }
        catch (error: any) {
            console.log(error)
            if (error instanceof Error) {
                setError(error.message)
            }
            setError("Unable to log in")
        }
    }

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center">
            <form action={sendCredentials} className="d-flex flex-column border border-primary4 rounded-3 p-3">
                <h1 className="align-self-center">Log In</h1>
                <div className="form-group mb-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="username" required/>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="password" required/>
                </div>
                <p className="text-danger align-self-center">{error}</p>
                <button type="submit" className="btn btn-primary align-self-center">Submit</button>
            </form>
        </div>
    )
}

export default Login