import React from 'react'
import Contact from '../components/Contact'
import Instagram from '../components/Instagram'
import Hero from '../components/Hero'

const contact = () => {
    return (
        <div>
            <Hero 
            heading='Contact' 
            message='Complete the form below to enrol in a class, purchase a T-shirt, or ask a question'
            frame='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.322179626751!2d175.27110941604028!3d-40.62277630767857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d40f354c424d59b%3A0xa56b19dc84d8400b!2s33%20Victoria%20Street%2C%20Levin%205510!5e0!3m2!1sen!2snz!4v1680124780575!5m2!1sen!2snz'
            />
            <Contact />
        </div>
    )
}

export default contact