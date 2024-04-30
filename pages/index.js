import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import { SliderData } from '../components/SliderData'
import Slider from '../components/Slider'
import Instagram from '../components/Instagram'


export default function Home() {
  return (
    <>
      <Head>
        <title>Illusion Tricking</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero 
      heading='About Us' 
      message='Sports group based in Levin. We do a mixture of tricking, tumbling, and parkour.'
      message1='Check out our January holiday programme on the classes page'
      message2='Classes run by Aaron Van Eijck and Allegra Hunt.'
      frame='https://youtube.com/embed/6SEX_VyPWcA?si=6sqOIW-f8qMhISoW'
      />
      <Slider slides={SliderData} />
      <Instagram />
    </>
  )
}
