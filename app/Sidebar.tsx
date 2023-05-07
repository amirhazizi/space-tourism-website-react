"use client"
import navContent from "./navbarData.json"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import closeImg from "../public/assets/shared/icon-close.svg"
import { log } from "console"
type SidebarProps = {
  sidebar: boolean
  setSidebar: Function
}
export default function Sidebar({ setSidebar, sidebar }: SidebarProps) {
  return (
    <aside
      className={`w-2/3 absolute top-1/2 right-0 -translate-y-1/2 transition-all overflow-x-hidden ${
        sidebar ? "visible" : "invisible"
      }`}
    >
      <div
        className={`p-10 px-7 space-y-24 relative transition-transform  font-barlowCondensed ${
          sidebar ? "translate-x-0" : " translate-x-full"
        }`}
      >
        <div className='flex justify-end'>
          <button onClick={() => setSidebar(!sidebar)}>
            <Image src={closeImg} alt='close-icon' />
          </button>
        </div>
        <div className='grid gap-y-10 text-white'>
          {navContent.map(({ number, content, link }) => {
            return (
              <Link
                key={number}
                href={link}
                className='text-lg flex gap-x-3 tracking-widest'
                onClick={() => setSidebar(!sidebar)}
              >
                <p className='font-bold'>{number}</p>
                <p className=''>{content}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
