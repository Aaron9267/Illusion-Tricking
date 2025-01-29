import React from 'react'
import Clothing from '../components/Clothing'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'

const clothing = () => {
    return (
        <div>
            <Hero 
            heading='Clothing' 
            message='Kids | Tee-Shirt $30 | Hoodie $60' 
            message1='Adult | Tee-Shirt $40 | Hoodie $70'
            message2='Go to contact page to place an order'
            hidden='hidden' 
            />
            <Clothing />
            <Instagram />
        </div>
        
    )
}

export default clothing