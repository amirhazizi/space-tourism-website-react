"use client"
import { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function NavSidebarContainer() {
  const [isSidebar, setIsSidebar] = useState(false)
  return (
    <>
      <Navbar sidebar={isSidebar} setSidebar={setIsSidebar} />
      <Sidebar sidebar={isSidebar} setSidebar={setIsSidebar} />
    </>
  )
}
