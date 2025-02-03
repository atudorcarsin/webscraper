import React from "react";
import Navbar from "./components/Navbar.tsx";
import axios from "axios";
import {formDataToObject} from "./forms.ts";

class GroupCreate extends React.Component {
    state = {
        error: '',
        success: '',
    }

    async createGroup(event) {
        event.preventDefault()
        this.state.error = ''
        this.state.success = ''
        const formData = new FormData(event.target)
        try {
            await axios.post('/webscraper/', formDataToObject(formData))
            this.setState({success: 'Successfully created group'})
        }
        catch(error: any) {
            console.error(error)
            this.setState({error: 'Failed to create group'})
        }
    }

    render() {
        return (
            <>
                <Navbar/>
                <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
                    <div className="my-3 w-50">
                        <h1>Create Group</h1>
                    </div>

                    <form onSubmit={this.createGroup.bind(this)} className="w-50">
                        <input type="hidden" name="id" required/>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" name="description" required/>
                        </div>
                        <p className="text-danger mb-2">{this.state.error}</p>
                        <p className="text-success mb-2">{this.state.success}</p>
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>

                    </form>
                </div>
            </>
        )
    }
}

export default GroupCreate