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
      message='Sports group based in Levin. We do tricking which consists of a mixture of kicks, flips, and twists.'
      message1='It takes inspiration from multiple disciplines such as martial arts, breaking, gymnastics, and so on.'
      message2='This video is an example of the skills we teach. Classes run by Aaron Van Eijck and Allegra Hunt.'
      hidden1='hidden'
      frame='https://www.youtube.com/embed/noVDCCBdfJI?si=k-5OUu9N_gHOaH20'
      />  
      <Instagram />
    </>
  )
}
