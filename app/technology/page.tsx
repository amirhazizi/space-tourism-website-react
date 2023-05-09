"use client"
import { useState, useEffect } from "react"
import data from "../data.json"
import { describe } from "node:test"

const { technology: technologys } = data
const initialTechnology = technologys[0]

export default function Technology() {
  const [technologyNames, setTechnologyNames] = useState<string[]>()
  const [index, setIndex] = useState(0)
  const [technology, setTechnology] = useState(initialTechnology)
  const getAllTechnologysNames = () => {
    return technologys.map((person) => {
      return person.name
    })
  }
  useEffect(() => {
    setTechnologyNames(getAllTechnologysNames)
  }, [])
  useEffect(() => {
    setTechnology(technologys[index])
  }, [index])
  const { name, description, images } = technology
  return (
    <main className='technology-main min-h-screen grid place-items-center'>
      <div className='space-y-10 pt-20 pb-10 md:pt-32 text-clPrimary_3 text-center font-barlowCondensed overflow-hidden'>
        <h1 className='text-xl tracking-widest  uppercase'>
          <span className='text-gray-700 px-2'>03</span>Space Launch 101
        </h1>
        <img className='w-full' src={images.landscape} alt={name} />
        <div className='flex gap-x-5 justify-center z-50'>
          {technologys?.map((_, technologyIndex) => {
            return (
              <button
                key={technologyIndex}
                onClick={() => setIndex(technologyIndex)}
                className={`technology-btn rounded-full border border-opacity-30 ${
                  index === technologyIndex && "bg-clPrimary_3 text-clPrimary_1"
                } `}
              >
                {technologyIndex + 1}
              </button>
            )
          })}
        </div>
        <div className='space-y-5 pb-7 max-w-sm mx-auto md:max-w-lg'>
          <div className='space-y-2 md:space-y-4'>
            <p className='uppercase tracking-widest text-clPrimary_2'>
              THE TERMINOLOGY…
            </p>
            <h1 className='text-2xl font-bellefair uppercase md:text-4xl'>
              {name}
            </h1>
          </div>
          <p className='text-clPrimary_2 text-lg px-5 leading-7 md:text-xl md:px-10 md:leading-8'>
            {description}
          </p>
        </div>
      </div>
    </main>
  )
}
