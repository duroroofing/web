import React, { useState } from 'react'
import { Link } from "react-router-dom"

import "./Navigation.css"

const Navigation = () => {
    const [toggle, setToggle] = useState(false)

    const toggleMenu = () => {
        setToggle(!toggle)
    }
    
    return (
        <nav className={`navigation ${toggle ? 'open' : 'close'}`}>
            <ul>
                <li>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/services" onClick={toggleMenu}>Services</Link>
                </li>
                <li>
                    <Link to="/about" onClick={toggleMenu}>About Us</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                </li>
                <li>
                    <Link to="/get-qoute" onClick={toggleMenu}>Get Quote</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
            </div>
        </nav>
    )
}

export default Navigation