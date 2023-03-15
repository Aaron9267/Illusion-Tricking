import React, { useState } from 'react'
import Image from 'next/image'
import { SliderData } from './SliderData'
import {FaArrowCircleLeft} from 'react-icons/fa'
import {FaArrowCircleRight} from 'react-icons/fa'
import {Fira_Sans_Extra_Condensed} from '@next/font/google'

const fira = Fira_Sans_Extra_Condensed({
    subsets:['latin'],
    weight:['500'],
  })

const Slider = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}
const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

if (!Array.isArray(slides) || slides.length <= 0) {
    return null
}

    return (
        <div id='t-shirt' className='max-w-[700px] mx-auto text-center'>
            <h1 className='text-2xl font-bold p-4'>T-shirt</h1>
            <p className={fira.className}>$35 - Go to contact to purchase</p>
            <div className='relative flex justify-center p-4'>

                {SliderData.map((slide, index) => {
                    return (
                        <div 
                          key={index} 
                          className={
                            index === current
                                ? 'opacity-[1] ease-in duration-1000'
                                : 'opacity-0'
                            }
                        >

                        <FaArrowCircleLeft 
                          onClick ={prevSlide}
                          className='absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2]' 
                          size={50}
                        />
                        {index === current && (
                          <Image 
                              src={slide.image} 
                              alt='/'
                              width='700'
                              height='700'
                              objectFit='cover'
                          />
                        )}
                        <FaArrowCircleRight
                          onClick={nextSlide}
                          className='absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2]' 
                          size={50}
                        />
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Slider