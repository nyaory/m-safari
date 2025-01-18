"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { useState } from "react"

export function MainNav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: "/athletics", label: "Athletics" },
    { href: "/bike-hire", label: "Hire a Bike" },
    { href: "/hiking", label: "Hiking" },
    { href: "/events", label: "Events" },
    { href: "/museum", label: "Sports Museum" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full max-w-[1920px] self-center border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-24 h-8 md:w-32 md:h-8 rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/m-safari-RR3XKtLjPScBS1GXb7XhYpwburFRhO.jpeg"
              alt="M-Safari Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <nav className="hidden md:flex ml-auto items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Button 
            variant="outline" 
            size="sm"
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
          >
            English
          </Button>
        </nav>
        <div className="ml-auto md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black border-white/10">
              <nav className="flex flex-col gap-4 mt-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mt-4 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                >
                  English
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}