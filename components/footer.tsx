import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">About</h3>
            <p className="text-sm text-white/70">
              Discover the beauty and adventure of Nandi County, Kenya's home of champions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/athletics" className="text-sm text-white/70 hover:text-white">
                  Athletics
                </Link>
              </li>
              <li>
                <Link href="/bike-hire" className="text-sm text-white/70 hover:text-white">
                  Hire a Bike
                </Link>
              </li>
              <li>
                <Link href="/hiking" className="text-sm text-white/70 hover:text-white">
                  Hiking
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-white/70 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/museum" className="text-sm text-white/70 hover:text-white">
                  Sports Museum
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-white/70">
                Email: info@nanditourism.co.ke
              </li>
              <li className="text-sm text-white/70">
                Phone: +254 700 000000
              </li>
              <li className="text-sm text-white/70">
                Address: Kapsabet, Nandi County
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Nandi County Tourism. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

