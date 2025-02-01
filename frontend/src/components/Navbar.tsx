import React from 'react'
import Cookies from 'js-cookie'

class Navbar extends React.Component {
    logout() {
        Cookies.remove('sessionid')
        window.location.href = '/login'
    }

    render() {
        return (
            <>
                <nav className="navbar border border-1 border-dark-subtle">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Webscraper</a>
                        <button onClick={this.logout} type="button" className="btn btn-primary">Log Out</button>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar