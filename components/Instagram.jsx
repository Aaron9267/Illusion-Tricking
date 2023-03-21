import React from 'react'
import IgImg1 from '../public/img-1.jpg'
import IgImg2 from '../public/img-2.jpg'
import IgImg3 from '../public/img-3.jpg'
import IgImg4 from '../public/img-4.jpg'
import IgImg5 from '../public/img-5.jpg'
import IgImg6 from '../public/img-6.jpg'
import InstagramImg from './InstagramImg'
import {Fira_Sans_Extra_Condensed} from 'next/font/google'

const fira = Fira_Sans_Extra_Condensed({
    subsets:['latin'],
    weight:['500'],
  })

const Instagram = () => {
    return (
        <div className='bg-fixed bg-center bg-cover custom-img'>
        <div className='bg-black/80'>
        <div className='mx-auto text-center py24 max-w-[1240px] text-white'>
            <p className='text-xl'>Follow us on Instagram</p>
            <p className={fira.className}>@illusiontricking</p>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                <InstagramImg socialImg={IgImg1} />
                <InstagramImg socialImg={IgImg2} />
                <InstagramImg socialImg={IgImg3} />
                <InstagramImg socialImg={IgImg4} />
                <InstagramImg socialImg={IgImg5} />
                <InstagramImg socialImg={IgImg6} />
            </div>
        </div>
        </div>
        </div>
    )
}

export default Instagram