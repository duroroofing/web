import React, { useState, useEffect } from 'react'

import Navigation from '../Navigation'

import './Topbar.css'

const Topbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`topbar ${scrollPosition > 0 ? 'visible' : ''}`}>
            <span className="logo">DURO</span>
            <Navigation />
        </div>
    )
}

export default Topbar