import {isSessionValid} from './session.ts'
import {useNavigate} from 'react-router'
import {useEffect} from "react";

function Index() {

    const navigate = useNavigate();
    useEffect(() => {
        if (!isSessionValid()) {
            navigate('/login')
        }
    }, [navigate]);


    return (
        <>
            <p>
                hello
            </p>

        </>
    )
}

export default Index
