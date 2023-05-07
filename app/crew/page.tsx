"use client"
import { useState, useEffect } from "react"
import data from "../data.json"

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
    <main className='crew-main min-h-screen grid place-items-center'>
      <div className='space-y-10 pt-20 pb-10 text-clPrimary_3 text-center  font-barlowCondensed '>
        <h1 className='text-xl tracking-widest  uppercase'>
          <span className='text-gray-700 px-2'>02</span>Meet Your Crew
        </h1>
        <div className='border-opacity-30 border-b border-b-clPrimary_2'>
          <div className='person-img-container mx-auto'>
            <img
              className='w-full h-full object-contain'
              src={images.png}
              alt={name}
            />
          </div>
        </div>
        <div className='flex gap-x-5 justify-center z-50'>
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
          <div className='space-y-1'>
            <p className='opacity-50 font-bellefair uppercase'>{role}</p>
            <h1 className='text-2xl font-bellefair  uppercase'>{name}</h1>
          </div>
          <p className='text-clPrimary_2 text-lg px-5 leading-7 mx-auto'>
            {bio}
          </p>
        </div>
      </div>
    </main>
  )
}
