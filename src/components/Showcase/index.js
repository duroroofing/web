import React from 'react'

import './Showcase.css'

const MockImg = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']

const Showcase = () => {
    return (
        <ul id="showcase">
            {MockImg.map((img, idx) => {
                return <li key={idx}>image</li>
            })}
        </ul>
    )
}

export default Showcase