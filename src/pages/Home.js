import React from 'react'

import Carousel from '../components/Carousel'
import Benefits from '../components/Benefits'
import Reviews from '../components/Reviews'

import { BENEFITS } from '../constants/home'

const Home = () => {
    return (
        <>
            <Carousel />
            <Benefits copy={BENEFITS} />
            <Reviews />
        </>
    )
}

export default Home