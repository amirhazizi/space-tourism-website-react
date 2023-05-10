"use client"
import { useState, useEffect } from "react"
import data from "../data.json"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
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
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className='space-y-10 pt-28 pb-10 md:pt-32 text-clPrimary_3 font-barlowCondensed'
      >
        <h1 className='text-center text-xl tracking-widest  uppercase'>
          <span className='text-gray-700 px-2'>01</span>pick your destination
        </h1>
        <div className='space-y-8 lg:flex lg:items-center'>
          <motion.div
            className='lg:w-3/5'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
          >
            <Image
              className='planet-img mx-auto'
              src={`/${images.png}`}
              alt={name}
              width={500}
              height={500}
            />
          </motion.div>
          <div className='space-y-8 text-center lg:text-left lg:w-2/5'>
            <div className='flex uppercase gap-x-4 justify-center md:gap-x-6 lg:justify-start'>
              {destinationNames?.map((des, index) => {
                return (
                  <button
                    key={index}
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
            <div className='space-y-4 border-opacity-50 border-b border-b-clPrimary_2 pb-7 md:pb-14'>
              <h1 className='text-6xl font-bellefair uppercase md:text-7xl lg:text-8xl'>
                {name}
              </h1>
              <p className='text-clPrimary_2 text-lg px-5 leading-7 mx-auto md:max-w-xl md:text-xl md:leading-8 lg:text-lg lg:leading-9 lg:px-0'>
                {description}
              </p>
            </div>
            <div className='space-y-10 md:flex md:space-y-0 md:gap-x-20 md:justify-center lg:justify-start'>
              <div className='uppercase text-4xl space-y-2 md:text-2xl'>
                <p className='text-clPrimary_2 text-lg'>avg. distance</p>
                <h2 className='font-bellefair'>{distance} </h2>
              </div>
              <div className='uppercase text-4xl space-y-2 md:text-2xl'>
                <p className='text-clPrimary_2 text-lg'>est. travel time</p>
                <h2 className='font-bellefair'>{travel}</h2>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
