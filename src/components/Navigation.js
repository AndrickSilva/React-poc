import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FaUserPlus} from 'react-icons/fa'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-5 py-2 overflow-hidden">
            <div className="container-fluid">
                <NavLink className="navbar-brand fw-bold fs-3 " to="/">CRUD</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                    </ul>
                    <Link className="btn btn-outline-light align-flex-start rounded-5 d-flex justify-content-center align-items-center p-3" to="/User/add"><FaUserPlus/></Link>
                </div>

            </div>
        </nav>
    )
}

export default Navigation