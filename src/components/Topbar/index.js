import React from 'react'

import Navigation from '../Navigation'

import './Topbar.css'

const Topbar = () => {
    return (
        <div className="topbar">
            <span>Logo</span>
            <Navigation />
        </div>
    )
}

export default Topbar