"use client"
import "./globals.css"
import { Bellefair, Barlow_Condensed } from "next/font/google"
import { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

import { AnimatePresence } from "framer-motion"

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
})
const barlowCondensed = Barlow_Condensed({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
})

export const metadata = {
  title: "Frontend Mentor | Space tourism website",
  description: "Frontend Mentor | Space tourism website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebar, setIsSidebar] = useState(false)
  return (
    <html lang='en'>
      <body className={`${bellefair.variable} ${barlowCondensed.variable}`}>
        <AnimatePresence>
          <Navbar sidebar={isSidebar} setSidebar={setIsSidebar} />
          <Sidebar sidebar={isSidebar} setSidebar={setIsSidebar} />
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}
