"use client"
import { useState, useEffect } from "react"
import data from "../data.json"
import { motion, AnimatePresence } from "framer-motion"

const { crew: allCrew } = data
const initialPerson = allCrew[0]

export default function Crew() {
  const [crewNames, setCrewNames] = useState<string[]>()
  const [index, setIndex] = useState(0)
  const [person, setPerson] = useState(initialPerson)
  const getAllCrewNames = () => {
    return data.crew.map((person) => {
      return person.name
    })
  }
  useEffect(() => {
    setCrewNames(getAllCrewNames)
  }, [])
  useEffect(() => {
    setPerson(allCrew[index])
  }, [index])
  const { name, role, bio, images } = person
  return (
    <AnimatePresence>
      <main className='crew-main min-h-screen grid place-items-center'>
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className='pt-28 pb-10 md:pt-32 md:pb-0 text-clPrimary_3 font-barlowCondensed'
        >
          <div className='space-y-10 lg:flex lg:items-center '>
            <div className='lg:grid space-y-10 lg:w-2/3'>
              <h1 className='text-xl text-center tracking-widest uppercase lg:text-left lg:pb-14'>
                <span className='text-gray-700 pr-2'>02</span>Meet Your Crew
              </h1>
              <div className='space-y-10 text-center lg:text-left'>
                <div className='border-opacity-30 border-b border-b-clPrimary_2 md:border-none'>
                  <div className='person-img-container mx-auto md:hidden'>
                    <img
                      className='w-full h-full object-contain'
                      src={images.png}
                      alt={name}
                    />
                  </div>
                </div>
                <div className='flex gap-x-5 justify-center md:hidden'>
                  {crewNames?.map((_, personIndex) => {
                    return (
                      <button
                        key={personIndex}
                        onClick={() => setIndex(personIndex)}
                        className={`tracking-widest p-2 rounded-full ${
                          index === personIndex
                            ? "bg-clPrimary_3 opacity-100"
                            : "bg-gray-600 opacity-70"
                        } `}
                      ></button>
                    )
                  })}
                </div>
                <div className='space-y-5 pb-7'>
                  <div className='space-y-1 lg:space-y-5'>
                    <p className='opacity-50 font-bellefair uppercase md:text-lg lg:text-2xl'>
                      {role}
                    </p>
                    <h1 className='text-2xl font-bellefair uppercase md:text-3xl lg:text-5xl'>
                      {name}
                    </h1>
                  </div>
                  <p
                    className={`text-clPrimary_2 text-lg px-5 leading-7 md:leading-8 md:mx-auto lg:px-0 lg:mx-0 ${
                      index === 0 ? "md:max-w-md" : "md:max-w-xl"
                    } ${index === 0 ? "lg:max-w-md" : "lg:max-w-lg"} `}
                  >
                    {bio}
                  </p>
                </div>
              </div>
              <div className='gap-x-5 justify-center hidden md:flex lg:justify-start lg:pt-14'>
                {crewNames?.map((_, personIndex) => {
                  return (
                    <button
                      key={personIndex}
                      onClick={() => setIndex(personIndex)}
                      className={`tracking-widest p-1 rounded-full lg:p-2 ${
                        index === personIndex
                          ? "bg-clPrimary_3 opacity-100"
                          : "bg-gray-600 opacity-70"
                      } `}
                    ></button>
                  )
                })}
              </div>
            </div>
            <div className='person-img-container mx-auto hidden md:block overflow-hidden'>
              <motion.img
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeIn" }}
                className='w-full h-full object-contain'
                src={images.png}
                alt={name}
              />
            </div>
          </div>
        </motion.div>
      </main>
    </AnimatePresence>
  )
}
