import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
    return (
        <div>
            <Hero 
            heading='Contact' 
            message='Complete the form below to enrol in a class or ask a question.'
            hidden
            hidden1
            />
            <Contact />
        </div>
    )
}

export default contact