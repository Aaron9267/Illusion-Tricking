import React from 'react'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'
import post from '../public/post.png'
import Event from '../components/Event'
import htimetable from '../public/htimetable.jpg'

const events = () => {
    return (
        <div>
            <Hero 
            heading='School Holiday Program' 
            message='Contact us to secure your spot' 
            message1='Limited spaces available'
            message2=''
            image1={htimetable}
            hidden
            hidden1
            
            />
            <Event/>
            <Instagram />
        </div>
        
    )
}

export default events