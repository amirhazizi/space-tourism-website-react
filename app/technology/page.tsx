"use client"
import { useState, useEffect } from "react"
import data from "../data.json"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
const { technology: technologys } = data
const initialTechnology = technologys[0]

export default function Technology() {
  const [index, setIndex] = useState(0)
  const [technology, setTechnology] = useState(initialTechnology)
  const getAllTechnologysNames = () => {
    return technologys.map((person) => {
      return person.name
    })
  }
  useEffect(() => {
    setTechnology(technologys[index])
  }, [index])
  const { name, description, images } = technology
  return (
    <main className='technology-main min-h-screen grid place-items-center'>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className='space-y-10 pt-20 pb-10 md:pt-32 text-clPrimary_3 text-center font-barlowCondensed lg:text-left overflow-hidden'
      >
        <h1 className='text-xl tracking-widest lg:text-center lg:max-w-xl lg:pl-10 uppercase'>
          <span className='text-gray-700 px-2'>03</span>Space Launch 101
        </h1>
        <div className='space-y-10 lg:space-y-0 lg:flex lg:justify-end lg:items-center lg:gap-x-10 xl:gap-x-20'>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeIn" }}
          >
            <Image
              className='w-full lg:hidden'
              src={`/${images.landscape}`}
              alt={name}
              width={770}
              height={320}
            />
          </motion.div>
          <div className='flex gap-x-5 justify-center z-50 lg:flex-col lg:gap-x-0 lg:gap-y-5'>
            {technologys?.map((_, technologyIndex) => {
              return (
                <button
                  key={technologyIndex}
                  onClick={() => setIndex(technologyIndex)}
                  className={`technology-btn rounded-full border border-opacity-30 ${
                    index === technologyIndex &&
                    "bg-clPrimary_3 text-clPrimary_1"
                  } `}
                >
                  {technologyIndex + 1}
                </button>
              )
            })}
          </div>
          <div className='space-y-5 pb-7 max-w-sm mx-auto md:max-w-lg lg:mx-0'>
            <div className='space-y-2 md:space-y-4'>
              <p className='uppercase tracking-widest text-clPrimary_2'>
                THE TERMINOLOGY…
              </p>
              <h1 className='text-2xl font-bellefair uppercase md:text-4xl lg:text-5xl xl:text-6xl'>
                {name}
              </h1>
            </div>
            <p className='text-clPrimary_2 text-lg px-5 leading-7 md:text-xl md:px-10 md:leading-8 lg:px-0 xl:pr-10'>
              {description}
            </p>
          </div>
          <motion.div
            className='hidden w-1/3 lg:block'
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeIn" }}
          >
            <Image
              src={`/${images.portrait}`}
              alt={name}
              width={520}
              height={540}
            />
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
