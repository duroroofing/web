import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import Notification from '../Notification'

import './QuoteForm.css'

const QuoteForm = () => {
    // TODO: use custom hook
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [address, setAddress] = useState('')
    const [material, setMaterial] = useState('tile')
    const [service, setService] = useState('repair')

    const [notification, setNotification] = useState(false)
    const [hasSubmitted, setSubmitted] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        console.log('name', name, 'email', email, 'contact', contact, 'address', address)
        setNotification(false)

        if (!name || !email || !contact || !address) {
            setNotification(true)
            return false
        }

        emailjs.sendForm('gmail', 'template_QaV9zH3e', e.target, 'user_hXu3w5UeVwOn9tjK3AMX2')
            .then((result) => {
                console.log(result.text)
                setSubmitted(true)
            }, (error) => {
                console.log(error.text)
            });
    }

    return (
        hasSubmitted ? (
            <div>Thank you for submitting the form, we'll reach out to you shortly!</div>
        ) : (
            <form id="quote-form" onSubmit={handleSubmit} method="POST">
                <div>
                    <label htmlFor="name">Name <span className="asterisk">*</span></label>
                    <input type="text" name="name" onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">E-mail <span className="asterisk">*</span></label>
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)}  />
                </div>
                <div>
                    <label htmlFor="contact">Contact number <span className="asterisk">*</span></label>
                    <input type="text" name="contact" onChange={e => setContact(e.target.value)}  />
                </div>
                <div>
                    <label htmlFor="address">Address <span className="asterisk">*</span></label>
                    <input type="text" name="address" onChange={e => setAddress(e.target.value)}  />
                </div>
                <div>
                    <label htmlFor="material">Material <span className="asterisk">*</span></label>
                    <select name="material" onChange={e => setMaterial(e.target.value)}>
                        <option value="tile">Tile</option>
                        <option value="shingle">Shingle</option>
                        <option value="flat roof">Flat roof</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="service">Service <span className="asterisk">*</span></label>
                    <select name="service" onChange={e => setService(e.target.value)}>
                        <option value="repair">Repair</option>
                        <option value="re-roof">Re-roof</option>
                        <option value="new house">New house</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="note">note</label>
                    <textarea name="note"></textarea>
                </div>
                <Notification error={notification} warning>Please fill in the required fields</Notification>
                <input className="button" type="submit" value="Send" />
            </form>
        )
    )
}

export default QuoteForm