import React from 'react'
import Navbar from "./components/Navbar.tsx";
import {useParams} from "react-router";
import axios from "axios";
import {formDataToObject} from "./forms.ts";

class GroupDetail extends React.Component {
    state = {
        groupId: this.props.params?.groupId,
        group: null,
        error: '',
        success: '',
    }

    componentDidMount() {
        const getGroup = async () => {
            try {
                const response = await axios.get(`/webscraper/group/${this.props.params?.groupId}/`)
                this.setState({group: response.data})
            } catch (error) {
                console.error(error)
            }
        }
        getGroup()
    }

    async updateGroup(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        this.state.error = ''
        this.state.success = ''
        try {
            await axios.put(`/webscraper/group/${this.props.params?.groupId}/`, formDataToObject(formData))
            this.setState({success: "Group updated successfully"})
        }
        catch(error: any) {
            console.error(error)
            this.setState({error: "Unable to update group"})
        }
    }

    async deleteGroup() {
        try {
            await axios.delete(`/webscraper/group/${this.props.params?.groupId}/`)
            window.location.href = '/'
        }
        catch(error: any) {
            console.error(error)
            this.setState({error: "Unable to delete group"})
        }
    }

    render() {
        return (
            <>
                <Navbar/>
                <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
                    <div className="my-3 w-50">
                        <h1>Edit Group</h1>
                    </div>

                    <form onSubmit={this.updateGroup.bind(this)} className="w-50">
                        <input type="hidden" name="id" value={this.state.group?.id} required/>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" defaultValue={this.state.group?.name} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" name="description" defaultValue={this.state.group?.description} required/>
                        </div>
                        <p className="text-danger mb-2">{this.state.error}</p>
                        <p className="text-success mb-2">{this.state.success}</p>
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">Update</button>
                            <button type="button" className="btn btn-danger" onClick={this.deleteGroup.bind(this)} >Delete</button>
                        </div>

                    </form>
                </div>
            </>
        )
    }
}

export default (props: any) => {
    return <GroupDetail {...props} params={useParams()} />
}