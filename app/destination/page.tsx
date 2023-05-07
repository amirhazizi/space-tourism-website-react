"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import data from "../data.json"

const { destinations } = data
const initialDestination = destinations.filter(
  (des) => des.name === destinations[0].name
)
export default function Destination() {
  const [destinationNames, setDestinationNames] = useState<string[]>()
  const [userdestination, setUserDestination] = useState(destinations[0].name)
  const [destination, setDestination] = useState(initialDestination)

  const getAllDestinationNames = () => {
    return data.destinations.map((des) => {
      return des.name
    })
  }
  useEffect(() => {
    setDestinationNames(getAllDestinationNames)
  }, [])
  useEffect(() => {
    const newDestination = destinations.filter(
      (des) => des.name === userdestination
    )
    setDestination(newDestination)
  }, [userdestination])
  const { name, travel, distance, images, description } = destination[0]

  return (
    <main className='destination-main min-h-screen grid place-items-center'>
      <div className='space-y-10 pt-28 pb-10 text-clPrimary_3 text-center  font-barlowCondensed '>
        <h1 className=' text-xl tracking-widest  uppercase'>
          <span className='text-gray-700 px-2'>01</span>pick your destination
        </h1>
        <div className='space-y-8  uppercase'>
          <img className='w-48 mx-auto' src={images.png} alt={name} />
          <div className='flex gap-x-4 justify-center'>
            {destinationNames?.map((des) => {
              return (
                <button
                  onClick={() => setUserDestination(des)}
                  className={`destination-btn  tracking-widest  relative ${
                    userdestination === des
                      ? "text-clPrimary_3 destination-btn-active"
                      : "text-clPrimary_2"
                  } `}
                >
                  {des}
                </button>
              )
            })}
          </div>
        </div>
        <div className='space-y-4 border-opacity-50 border-b border-b-clPrimary_2 pb-7'>
          <h1 className='text-6xl font-bellefair  uppercase'>{name}</h1>
          <p className='text-clPrimary_2 text-lg max-w-xs mx-auto '>
            {description}
          </p>
        </div>
        <div className='uppercase text-4xl space-y-2'>
          <p className='text-clPrimary_2 text-lg'>avg. distance</p>
          <h2 className='font-bellefair'>{distance} </h2>
        </div>
        <div className='uppercase text-4xl space-y-2'>
          <p className='text-clPrimary_2 text-lg'>est. travel time</p>
          <h2 className='font-bellefair'>{travel}</h2>
        </div>
      </div>
    </main>
  )
}
