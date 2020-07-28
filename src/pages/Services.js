import React from 'react'

import Page from '../components/Page'
import Benefits from '../components/Benefits'
import ServiceArea from '../components/ServiceArea'

import { SERVICES, METERIALS, PROCEDURE } from '../constants/services'

const Services = () => {
    return (
        <Page>
            <h1>Services</h1>
            <p>Our primary goal is to provide the best roofing services possible</p>
            <Benefits copy={SERVICES} />
            <ServiceArea />
            <Benefits copy={METERIALS} />
            <Benefits copy={PROCEDURE} />
        </Page>
    )
}

export default Services