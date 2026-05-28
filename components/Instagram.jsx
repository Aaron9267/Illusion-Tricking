import React from 'react'
import IgImg1 from '../public/image1.png'
import IgImg2 from '../public/image2.png'
import IgImg3 from '../public/image3.png'
import IgImg4 from '../public/image4.png'
import IgImg5 from '../public/image5.png'
import IgImg6 from '../public/image6.png'
import InstagramImg from './InstagramImg'
import {Fira_Sans_Extra_Condensed} from 'next/font/google'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'

const fira = Fira_Sans_Extra_Condensed({
    subsets:['latin'],
    weight:['500'],
  })

const Instagram = () => {
    return (
        <div className='bg-fixed bg-center bg-cover custom-img'>
        <div className='bg-black/80'>
        <div className='mx-auto text-center py-24 max-w-[1240px] text-white'>
            <p className='text-xl'>Follow us on Instagram and Facebook</p>
            <div className=' grid grid-cols-6 gap-2 p-4'>
                <InstagramImg socialImg={IgImg1} />
                <InstagramImg socialImg={IgImg2} />
                <InstagramImg socialImg={IgImg3} />
                <InstagramImg socialImg={IgImg4} />
                <InstagramImg socialImg={IgImg5} />
                <InstagramImg socialImg={IgImg6} />
            </div>
            <div className='relative flex justify-center p-4'>
            <Link href="https://www.facebook.com/profile.php?id=100089724950114">
                <FaFacebook size={50} />
            </Link>
            </div>
            <p>Website built by Aaron Van Eijck</p>
        </div>
        </div>
        </div>
    )
}

export default Instagram