"use client"
import logo from "../public/assets/shared/logo.svg"
import hamburger from "../public/assets/shared/icon-hamburger.svg"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import navContent from "./navbarData.json"
type NavbarProps = {
  sidebar: boolean
  setSidebar: Function
}

export default function Navbar({ setSidebar, sidebar }: NavbarProps) {
  const router = useRouter()
  return (
    <nav className='absolute top-0 left-0 w-full'>
      <div className='flex p-5 px-6  justify-between'>
        <div className='w-1/2'>
          <Link href='/'>
            <Image src={logo} alt={logo} />
          </Link>
        </div>
        <button onClick={() => setSidebar(!sidebar)}>
          <Image src={hamburger} alt={hamburger.icon} />
        </button>
        <div className='hidden md:flex items-center gap-x-3 w-1/2'>
          {navContent.map((item) => {
            return (
              <Link key={item.number} href={item.link}>
                {item.content}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
