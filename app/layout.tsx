import { Inter } from 'next/font/google'
import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nandi County Tourism",
  description: "Discover the beauty and adventure of Nandi County, Kenya",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black`}>
        <MainNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

