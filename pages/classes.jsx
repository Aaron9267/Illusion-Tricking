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
            message='2025 Term 4' 
            message1=''
            message2=''
            image={timetable} w={1000}
            hidden
            />
            <Class />
            <Instagram />
        </div>
        
    )
}

export default classes