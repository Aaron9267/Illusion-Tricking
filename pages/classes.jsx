import React from 'react'
import Class from '../components/Class'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'

const classes = () => {
    return (
        <div>
            <Hero 
            heading='Classes' 
            message='We will be collaborating with GYM Junkie for our 2024 holiday programme.' 
            message1='Sessions will be running in their gym starting from January 15th to February 9th'
            message2='Go to contact to enroll, timetable and prices are below'
            frame='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8837380128875!2d175.27522217602174!3d-40.63244587140578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d40f34daeaab7c9%3A0x101f0803b5c5ee8d!2sGYM%20JUNKIE!5e0!3m2!1sen!2snz!4v1701906567511!5m2!1sen!2snz' 
            />
            <Class />
            <Instagram />
        </div>
        
    )
}

export default classes