import React from 'react'

import './Notification.css'

const Notification = ({ children, error=false }) => {
    return (
        <div className={`notification ${error ? '' : 'show'}`}>{children}</div>
    )
}

export default Notification