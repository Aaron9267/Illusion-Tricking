import React from 'react'
import Image from 'next/image'
import timetable from '../public/tricking-timetable.jpg'

const Class = () => {
    return(
        <div className='relative flex justify-center mb-5 mt-5 bg-black text-white'>
            <Image src={timetable}
            />
        </div>
    )
}

export default Class