import React from 'react'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'
import post from '../public/post.png'
import Event from '../components/Event'

const events = () => {
    return (
        <div>
            <Hero 
            heading='Coming Soon' 
            message='' 
            message1=''
            message2=''
            hidden
            hidden1
            />
            <Event/>
            <Instagram />
        </div>
        
    )
}

export default events