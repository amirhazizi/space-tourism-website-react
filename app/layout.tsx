import "./globals.css"
import { Bellefair, Barlow_Condensed } from "next/font/google"

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
})
const barlowCondensed = Barlow_Condensed({
  weight: "400",
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
  return (
    <html lang='en'>
      <body className={`${bellefair.className} ${barlowCondensed.className}`}>
        {children}
      </body>
    </html>
  )
}
