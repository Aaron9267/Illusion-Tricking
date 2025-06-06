import React from 'react'
import Class from '../components/Class'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'
import timetable from '../public/timetable.jpg'

const classes = () => {
    return (
        <div>
            <Hero 
            heading='Classes' 
            message='2025 Term 2 classes will be running from the 28th of April to  the 27th of June' 
            message1='Timetable and prices for Term 4 below.'
            message2='Go to contact to enroll or message us on facebook.'
            image={timetable} w={700}
            hidden='hidden'
               
            />
            <Class />
            <Instagram />
        </div>
        
    )
}

export default classes