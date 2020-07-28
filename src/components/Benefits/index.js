import React from 'react'

import './Benefits.css'

const Benefits = ({ copy }) => {
    const { header, list } = copy

    return (
        <div className="benefits">
            {header && <h2>{header}</h2>}
            <ul>
                {list && list.map((item, index) => {
                    return (
                        <li key={index}>
                            <span className="icon"></span>
                            <h3>{item.header}</h3>
                            <p>{item.body}</p>
                        </li>        
                    )
                })}
            </ul>
        </div>
    )
}

export default Benefits