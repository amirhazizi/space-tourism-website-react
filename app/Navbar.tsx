"use client"
import logo from "../public/assets/shared/logo.svg"
import hamburger from "../public/assets/shared/icon-hamburger.svg"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import navContent from "./navbarData.json"

type NavbarProps = {
  sidebar: boolean
  setSidebar: Function
}

export default function Navbar({ setSidebar, sidebar }: NavbarProps) {
  const pathname = usePathname()

  return (
    <nav className='absolute top-0 left-0 w-full z-10  font-barlowCondensed'>
      <div className='flex p-5 px-6 justify-between md:p-0 lg:relative lg:py-8'>
        <div className='w-1/2 md:p-8 md:py-6 lg:p-4 lg:pl-10'>
          <Link href='/'>
            <Image src={logo} alt={logo} />
          </Link>
        </div>
        <div className='nav-links md:pl-10 hidden md:flex items-center text-clPrimary_3 gap-x-10 w-2/3 md:text-md font-light lg:hidden'>
          {navContent.map(({ link, number, content }) => {
            const isActive = pathname === link ? true : false
            return (
              <Link
                className={`text-clPrimary_3 nav-btn relative ${
                  isActive && "actived-nav"
                }`}
                key={number}
                href={link}
              >
                {content}
              </Link>
            )
          })}
        </div>
        <div className='nav-links md:pl-32 xl:pl-40 hidden items-center text-clPrimary_3 gap-x-10 w-2/3 md:text-xs lg:flex lg:text-base'>
          {navContent.map(({ link, number, content }) => {
            const isActive = pathname === link ? true : false
            return (
              <Link
                className={`text-clPrimary_3 nav-btn relative font-light ${
                  isActive && "actived-nav"
                }`}
                key={number}
                href={link}
              >
                <span className='font-bold px-2 xl:px-3'>{number}</span>
                {content}
              </Link>
            )
          })}
        </div>
        <button className='md:hidden' onClick={() => setSidebar(!sidebar)}>
          <Image src={hamburger} alt={hamburger.icon} />
        </button>
        <div className='nav-line invisible lg:visible absolute h-px bg-clPrimary_3 opacity-30 top-1/2 left-0 translate-x-36'></div>
      </div>
    </nav>
  )
}
