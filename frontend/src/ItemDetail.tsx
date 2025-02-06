import React from "react";
import Navbar from "./components/Navbar.tsx"
import {useParams} from "react-router"
import axios from "axios"

class ItemDetail extends React.Component {
    state = {
        itemId: this.props.params?.itemId,
        item: null,
    }
    componentDidMount() {
        const getItem = async () => {
            try {
                const response = await axios.get(`/webscraper/item/${this.props.params?.itemId}/`)
                this.setState({item: response.data})
            } catch (error) {
                console.error(error)
            }
        }
        getItem()
    }
    render() {
        return (
            <>
                <Navbar/>
                <div className="d-flex w-100 h-100 justify-content-center">
                    <div className="d-flex flex-column w-50 h-100">
                        <h1 className="mt-2">Item</h1>
                        <div className="card mt-2">
                            <div className="card-body">
                                <h3 className="card-title">{this.state.item?.name}</h3>
                                <p className="card-text">{this.state.item?.url}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default (props: any) => {
    return <ItemDetail {...props} params={useParams()} />
}
