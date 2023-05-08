"use client"
import logo from "../public/assets/shared/logo.svg"
import hamburger from "../public/assets/shared/icon-hamburger.svg"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import navContent from "./navbarData.json"
import { log } from "console"

type NavbarProps = {
  sidebar: boolean
  setSidebar: Function
}

export default function Navbar({ setSidebar, sidebar }: NavbarProps) {
  const pathname = usePathname()

  return (
    <nav className='absolute top-0 left-0 w-full z-10'>
      <div className='flex p-5 px-6 justify-between md:p-0'>
        <div className='w-1/2 md:p-8 md:py-6'>
          <Link href='/'>
            <Image src={logo} alt={logo} />
          </Link>
        </div>
        <div className='nav-links md:pl-10 hidden md:flex items-center text-clPrimary_3 gap-x-10 w-2/3 md:text-xs'>
          {navContent.map((item) => {
            const isActive = pathname === item.link ? true : false
            console.log(pathname)

            return (
              <Link
                className={`text-clPrimary_3 nav-btn relative ${
                  isActive && "actived-nav"
                }`}
                key={item.number}
                href={item.link}
              >
                {item.content}
              </Link>
            )
          })}
        </div>
        <button className='md:hidden' onClick={() => setSidebar(!sidebar)}>
          <Image src={hamburger} alt={hamburger.icon} />
        </button>
      </div>
    </nav>
  )
}
