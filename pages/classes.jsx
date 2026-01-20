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
            message='2026 Term 1' 
            message1='Register below'
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