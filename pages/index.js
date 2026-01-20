import Head from 'next/head'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'


export default function Home() {
  return (
    <>
      <Head>
        <title>Illusion Tricking</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero 
      heading='About Us' 
      message='Tricking is a movement discipline that blends martial arts kicks, gymnastics flips, and dance-style flow into dynamic, acrobatic combinations.'
      message1='Classes run by Aaron Van Eijck and Allegra Hunt.'
      message2=''
      hidden1
      frame='https://www.youtube.com/embed/MWiv8QIgVtc?si=mo2CwY_PdQW7JB2N'
      />  
      <Instagram />
    </>
  )
}
