import { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function Easy() {
    const [easyList, setEasyList] = useState([])

    const easyCollectionRef = collection(db, "Easy")

    useEffect(() => {
        const getEasyList = async () => {
            try {
                const data = await getDocs(easyCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                id: doc.id,
            }))
                setEasyList(filteredData)
            } catch (error) {
                console.error(err)
            }

        }
        getEasyList()
    }, [])

    return (
        <div className="justify-center items-center bg-gradient-to-r from-black">
        <div className='text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            {easyList
            .sort((a,b) => a.Type > b.Type ? 1 : -1)
            .map((easy) => (
                <div key={easy} className=" bg-neutral-800 text-white"> 
                    <h1>{easy.Name}</h1>
                    <p>Type - {easy.Type}</p>
                    <video controls src={easy.Front}></video>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Easy