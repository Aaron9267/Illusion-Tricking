import React from 'react'
import Contact from '../components/Contact'
import Instagram from '../components/Instagram'
import Hero from '../components/Hero'

const contact = () => {
    return (
        <div>
            <Hero 
            heading='Contact' 
            message='Complete the form below to enrol in a class or ask a question.'
            hidden="hidden"
            />
            <Contact />
        </div>
    )
}

export default contact