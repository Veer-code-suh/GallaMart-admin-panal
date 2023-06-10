import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-left">
                <h1>GallaMart</h1>
            </div>
            <div className="nav-right">
                <Link to='/orders' style={{ textDecoration: 'none' }}>
                    <p>Orders</p>
                </Link>
                <Link to='/addData' style={{ textDecoration: 'none' }}>
                    <p>Add Product</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar