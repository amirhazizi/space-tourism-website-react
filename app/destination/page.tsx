"use client"
import { useState, useEffect } from "react"
import data from "../data.json"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Stage, useTexture } from "@react-three/drei"

const { destinations } = data
const initialDestination = destinations.filter(
  (des) => des.name === destinations[0].name
)
type PlanetProps = {
  loc: string
}
const Planet = ({ loc }: PlanetProps) => {
  const { gl } = useThree()
  // gl.setSize(window.innerWidth / 4, window.innerHeight / 4)
  const texture = useTexture(loc)
  return (
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}
export default function Destination() {
  const [destinationNames, setDestinationNames] = useState<string[]>()
  const [userdestination, setUserDestination] = useState(destinations[0].name)
  const [destination, setDestination] = useState(initialDestination)
  const [index, setIndex] = useState(0)

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
    const newIndex = destinations
      .map((des) => des.name)
      .findIndex((x) => x == userdestination)
    setIndex(newIndex)

    setDestination(newDestination)
  }, [userdestination])
  const { name, travel, distance, description } = destination[0]

  return (
    <AnimatePresence>
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
            <div className='planet-container relative overflow-hidden mx-auto lg:mr-28'>
              {destinations.map((planet, planetIndex) => {
                const { images } = planet
                let position = "translate-y-full opacity-0"

                if (planetIndex === index) {
                  position = "translate-y-0 opacity-100"
                }
                if (planetIndex <= index - 1) {
                  position = "-translate-y-full opacity-0"
                }
                return (
                  <div
                    className={`planet-img lg:w-4/5 absolute w-full h-full left-1/2 -translate-x-1/2  ${position}`}
                    key={planetIndex}
                  >
                    <Canvas>
                      <ambientLight intensity={0.1} />
                      <spotLight
                        position={[10, 5, 5]}
                        angle={0.5}
                        intensity={2}
                      />

                      <OrbitControls enableZoom={false} autoRotate />
                      <Stage shadows>
                        <Planet loc={images.jpg} />
                      </Stage>
                    </Canvas>
                  </div>
                )
              })}
            </div>
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
    </AnimatePresence>
  )
}
