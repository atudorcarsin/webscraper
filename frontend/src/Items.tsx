import React from 'react'
import Navbar from "./components/Navbar.tsx"
import {useParams} from "react-router"
import axios from "axios"

class Items extends React.Component {
    state = {
        groupId: this.props.params?.groupId,
        items: [],
    }
    componentDidMount() {
        const getItems = async () => {
            try {
                const response = await axios.get(`/webscraper/group/${this.props.params?.groupId}/items/`)
                this.setState({items: response.data})
            } catch (error) {
                console.error(error)
            }
        }
        getItems()
    }
    render() {
        return (
            <>
                <Navbar/>
                <div className="d-flex w-100 h-100 justify-content-center">
                    <div className="d-flex flex-column w-50 h-100">
                        <h1 className="mt-2">Items</h1>
                        {this.state.items.map(item => {
                            return (
                                <div className="card mt-2" key={item.id}>
                                    <div className="card-body">
                                        <h3 className="card-title">{item.name}</h3>
                                        <p className="card-text">{item.url}</p>
                                        <div>
                                            <a href={`/item/${item.id}/`} className="btn btn-primary">Edit</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default (props: any) => {
    return <Items {...props} params={useParams()} />
}