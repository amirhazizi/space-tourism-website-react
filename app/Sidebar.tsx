"use client"
import { useRouter } from "next/navigation"
type SidebarProps = {
  sidebar: boolean
  setSidebar: Function
}
export default function Sidebar({ setSidebar, sidebar }: SidebarProps) {
  return (
    <aside className='h-full w-2/3 absolute top-1/2 right-0 -translate-y-1/2 blur-lg'></aside>
  )
}
