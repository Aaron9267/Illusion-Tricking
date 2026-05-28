import React from 'react'
import Class from '../components/Class'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'
import timetable from '../public/timetable.jpg'

const classes = () => {
    return (
        <div>
            <Hero 
            heading='Classes 2026 Term 2' 
            message='Term Price - $100' 
            message1='Casual Price - $15 | Seekers - $7'
            message2='Register below'
            image={timetable} 
            hidden2
            hidden
            />
            <Class />
            <Instagram />
        </div>
        
    )
}

export default classes