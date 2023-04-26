import { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import {Fira_Sans_Extra_Condensed} from 'next/font/google'

const fira = Fira_Sans_Extra_Condensed({
    subsets:['latin'],
    weight:['500'],
  })

function Tricktionary() {
    const [trickList, setTrickList] = useState([])

    const tricksCollectionRef = collection(db, "Tricks")

    useEffect(() => {
        const getTrickList = async () => {
            try {
                const data = await getDocs(tricksCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                id: doc.id,
            }))
                setTrickList(filteredData)
            } catch (error) {
                console.error(err)
            }

        }
        getTrickList()
    }, [])



    return (
        <div className="flex justify-center items-center absolute bg-gradient-to-r from-black">
        <div className='text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            {trickList
            .sort((a,b) => a.Difficulty > b.Difficulty ? 1 : -1)
            .map((trick) => (
                <div key={trick} className=" bg-neutral-800 text-white"> 
                    <h1>{trick.Name}</h1>
                    <p>Difficulty - {trick.Difficulty}</p>
                    <p>Type - {trick.Type}</p>
                    <video controls src={trick.Front}></video>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Tricktionary