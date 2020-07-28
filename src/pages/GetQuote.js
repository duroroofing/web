import React from 'react'

import Page from '../components/Page'
import QuoteForm from '../components/QuoteForm'

const GetQuote = () => {
    return (
        <Page>
            <h1>Get a Quote Today</h1>
            <p>Please fill in the form below, once we receive your request, a sales representative will contact you within 24hours.</p>
            <QuoteForm />
        </Page>
    )
}

export default GetQuote