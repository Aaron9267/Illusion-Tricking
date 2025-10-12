import React from 'react'
import Tsandcs from '../components/Tsandcs'
import Hero from '../components/Hero'

const tsandcs = () => {
    return (
        <div>
            <Hero 
            heading='Terms and Conditions – Illusion Tricking' 
            message='Effective date: 12/10/2025'
            message1='Welcome to Illusion Tricking! These Terms and Conditions govern your participation in our classes, programs, events, and use of our facilities.'
            message2='By signing up for or attending any of our services, you agree to be bound by the terms below.'
            hidden
            />
            <Tsandcs />
        </div>
    )
}

export default tsandcs