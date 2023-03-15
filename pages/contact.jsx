import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Instagram from '../components/Instagram'

const contact = () => {
    return (
        <div>
            <Hero heading='Contact' message='Submit the form below to enrol in a class, purchase T-shirt, or ask a question'/>
            <Contact />
            <Instagram />
        </div>
    )
}

export default contact