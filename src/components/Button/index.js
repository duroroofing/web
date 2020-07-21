import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

const Button = ({ children }) => {
    return (
        <Link to="/get-qoute" className="button">
            {children}
        </Link>
    )
}

export default Button
