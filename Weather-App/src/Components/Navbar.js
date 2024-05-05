import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <section className='navbar_section'>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <NavLink className=" navbar-brand text-center" to="/"><img src="asset/img/navbar-logo.webp" alt="" className='nav_img' /></NavLink>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link nav" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link nav" to="Weather">Weather</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
            </div>
        )
    }
}
