import React from 'react'
import Contact from '../components/Contact'
import Instagram from '../components/Instagram'
import Hero from '../components/Hero'

const contact = () => {
    return (
        <div>
            <Hero heading='Contact' message='Complete the form below to enrol in a class, purchase a T-shirt, or ask a question'/>
            <Contact />
            <Instagram/>
        </div>
    )
}

export default contact