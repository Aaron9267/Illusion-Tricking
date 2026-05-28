import React from 'react'
import { SliderData } from '../components/SliderData'
import Slider from '../components/Slider'
import {Fira_Sans_Extra_Condensed} from 'next/font/google'

const fira = Fira_Sans_Extra_Condensed({
    subsets:['latin'],
    weight:['500'],
  })


const Clothing = () => {
    return(
        <div className='mx-auto bg-fixed bg-center bg-cover custom-img'>
            <div  className='absolute top-0 left-0 right-0 bottom-0 bg-black/80 relative flex justify-center'>
                <div className='mt-20 p-5 text-white z-[2]'>
                <h2 className='text-2xl'>Clothing</h2>
                    <div className={fira.className}>
                    <p>Kids Tee - $30</p>
                    <p>Kids Hoodie - $60</p>
                    </div>
                <Slider slides={SliderData}/>
                </div>
            </div>
        </div>
    )
}

export default Clothing