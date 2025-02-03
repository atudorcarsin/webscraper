import {isSessionValid} from './session.ts'
import {useEffect} from "react"
import React from "react"
import axios from "axios"
import Navbar from "./components/Navbar.tsx"
import {Group} from "./types.ts"

interface GroupsState {
    groups: Group[]
}

class Groups extends React.Component {
    state: GroupsState = {
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
            <>
                <div className="d-flex w-100 h-100 justify-content-center">
                    <div className="d-flex flex-column w-50 h-100">
                        <h1 className="mt-2">Groups</h1>
                        {this.state.groups.map(group => {
                            return (
                                <div className="card mt-2" key={group.id}>
                                    <div className="card-body">
                                        <h3 className="card-title">{group.name}</h3>
                                        <p className="card-text">{group.description}</p>
                                        <div>
                                            <a href={`/group/${group.id}/items/`} className="btn btn-primary me-3">View items</a>
                                            <a href={`/group/${group.id}/`} className="btn btn-primary">Edit</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        <div className="d-flex justify-content-center">
                            <a href="/group/create/" className="btn btn-primary mt-3">Create Group</a>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

function Index() {
    useEffect(() => {
        if (!isSessionValid()) {
            window.location.href = '/login'
        }
    }, []);

    return (
        <>
            <Navbar/>
            <Groups/>
        </>
    )
}

export default Index
