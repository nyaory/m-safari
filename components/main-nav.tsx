import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-32 h-8 rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/m-safari-RR3XKtLjPScBS1GXb7XhYpwburFRhO.jpeg"
              alt="M-Safari Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <nav className="ml-auto flex items-center gap-6">
          <Link
            href="/athletics"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Athletics
          </Link>
          <Link
            href="/bike-hire"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Hire a Bike
          </Link>
          <Link
            href="/hiking"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Hiking
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Events
          </Link>
          <Link
            href="/museum"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Sports Museum
          </Link>
          <Button 
            variant="outline" 
            size="sm"
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
          >
            English
          </Button>
        </nav>
      </div>
    </header>
  )
}

