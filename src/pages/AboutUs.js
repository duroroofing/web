import React from 'react'

import Page from '../components/Page'
import OurStory from '../components/OurStory'
import Contacts from '../components/Contacts'

const AboutUs = () => {
    return (
        <Page>
            <h1>About Us</h1>
            <p>Our primary goal is to provide the best roofing services possible</p>
            <OurStory />
            <Contacts />
        </Page>
    )
}

export default AboutUs