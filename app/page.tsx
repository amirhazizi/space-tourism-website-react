"use client"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
export default function Home() {
  return (
    <AnimatePresence>
      <main className='home-main min-h-screen grid place-items-center'>
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className='space-y-16 pt-28 pb-10 md:pt-36 lg:flex lg:pt-60 lg:justify-between'
        >
          <div className='text-center space-y-4 font-barlowCondensed mx-auto text-clPrimary_2 lg:text-left lg:mx-0'>
            <h1 className='home-header-text uppercase font-light text-clPrimary_3'>
              so, you want to travel to <br />
              <span className='font-bellefair '>space</span>
            </h1>
            <p className='home-text mx-auto leading-6 font-light text-clPrimary_2'>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
            className='home-buttom uppercase bg-clPrimary_3 text-xl rounded-full mx-auto block font-bellefair md:text-4xl lg:self-center lg:mx-0'
          >
            <Link href={`/destination`}>explore</Link>
          </motion.button>
        </motion.div>
      </main>
    </AnimatePresence>
  )
}
