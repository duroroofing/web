import React, { useState } from 'react'

import './QuoteForm.css'

const QuoteForm = () => {
    const [name, setName] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        
        const templateParams = {
            name: name
        }

    }

    return (
        <form id="quote-form" onSubmit={handleSubmit} method="POST">
            <div>
                <label name="name">Name <span className="asterisk">*</span></label>
                <input type="text" name="name" onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label name="email">E-mail <span className="asterisk">*</span></label>
                <input type="text" name="email" onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label name="contact">Contact number <span className="asterisk">*</span></label>
                <input type="text" name="contact" onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label name="material">Material <span className="asterisk">*</span></label>
                <select name="material">
                    <option disabled selected>Select material</option>
                    <option>Tile</option>
                    <option>Shingle</option>
                    <option>Flat roof</option>
                </select>
            </div>
            <div>
                <label name="service">Service <span className="asterisk">*</span></label>
                <select name="service">
                    <option disabled selected>Select service</option>
                    <option>Repair</option>
                    <option>Shingle</option>
                    <option>Flat roof</option>
                </select>
            </div>
            <div>
                <label name="note">note</label>
                <textarea name="note"></textarea>
            </div>
            <input className="button" type="submit" value="Send" />
        </form>
    )
}

export default QuoteForm