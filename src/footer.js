import React from 'react'

const Footer = ({copyright = "2018"}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">&copy; {copyright}</a>
        </nav>
    )
}


export default Footer