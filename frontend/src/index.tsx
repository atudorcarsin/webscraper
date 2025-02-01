import {isSessionValid} from './session.ts'
import {useNavigate} from 'react-router'
import {useEffect} from "react";
import React from "react";
import axios from "axios";

class Groups extends React.Component {
    state = {
        groups: []
    }
    componentDidMount() {
        const getGroups = async () => {
            try {
                const response = await axios.get('/webscraper/')
                this.setState({groups: response.data})
            }
            catch (error) {
                console.error(error)
            }
        }
        getGroups()
    }
    render() {
        return (
            <div>
                {this.state.groups.map(group => {
                    return (
                        <div key={group.id}>
                            <h1>{group.name}</h1>
                            <p>{group.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function Index() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isSessionValid()) {
            navigate('/login')
        }
    }, [navigate]);

    return (
        <>
            <Groups/>
        </>
    )
}

export default Index
