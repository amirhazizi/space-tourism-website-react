"use client"
import Link from "next/link"
export default function Home() {
  return (
    <main className='home-main min-h-screen grid place-items-center  '>
      <div className='space-y-16 pt-28 pb-10'>
        <div className='text-center space-y-4 font-barlowCondensed mx-auto text-clPrimary_2'>
          <h1 className='home-header-text uppercase font-light text-clPrimary_3'>
            so, you want to travel to <br />
            <span className='font-bellefair '>space</span>
          </h1>
          <p className='home-text mx-auto leading-6 font-light text-clPrimary_2'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className='home-buttom uppercase bg-clPrimary_3 text-xl rounded-full mx-auto block font-bellefair md:text-4xl'>
          <Link href={`/destination`}>explore</Link>
        </button>
      </div>
    </main>
  )
}
