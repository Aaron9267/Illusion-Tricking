import React from 'react'
import { SliderData } from '../components/SliderData'
import Slider from '../components/Slider'

const Clothing = () => {
    return(
        <div className='mx-auto bg-fixed bg-center bg-cover custom-img'>
            <div  className='absolute top-0 left-0 right-0 bottom-0 bg-black/80 relative flex justify-center'>
            <Slider slides={SliderData}/>
            </div>
        </div>
    )
}

export default Clothing