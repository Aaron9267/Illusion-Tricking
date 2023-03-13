import React from 'react'
import Image from 'next/image'
import timetable from '../public/tricking-timetable.jpg'

const Class = () => {
    return(
        <div className='relative flex justify-center mb-10 bg-black'>
            <Image src={timetable}
            />
        </div>
    )
}

export default Class