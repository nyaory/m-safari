"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const destinations = [
  {
    name: "Athletics Training",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    href: "/athletics"
  },
  {
    name: "Nandi Hills",
    // image: "https://images.unsplash.com/photo-1580311735321-77f6e4e90ac5?w=800&q=80",
    image: "https://images.pexels.com/photos/705075/pexels-photo-705075.jpeg?w=800&q=80",
    href: "/hiking"
  },
  {
    name: "Bike Trails",
    // image: "https://images.unsplash.com/photo-1622898777967-be43a88b52b5?w=800&q=80",
    image: "https://assets.scott-sports.com/pages/scott-travel/trips/south-africa/SAFT-program-1600x860-10.jpg?w=800&q=80",
    href: "/bike-hire"
  },
  {
    name: "Sports Museum",
    // image: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=800&q=80",
    image: "https://www.visitkenya.com/wp-content/uploads/2023/08/Kenya-The-Sports-Tourism-Gateway.jpg?w=800&q=80",
    href: "/museum"
  },
  {
    name: "Cultural Events",
    // image: "https://images.unsplash.com/photo-1604998103924-89e012e5265a?w=800&q=80",
    image: "https://thedreamafrica.com/wp-content/uploads/2017/07/Lake-of-Stars-Music-Festival.8.jpg?w=800&q=80",
    href: "/events"
  }
]

const topDestinations = [
  {
    name: "Nandi Rock",
    image: "https://images.unsplash.com/photo-1513023840371-dd774fcaee5b?w=800&q=80",
    href: "/hiking"
  },
  {
    name: "Kipchoge Training Camp",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    href: "/athletics"
  },
  {
    name: "Tea Plantations",
    // image: "https://images.unsplash.com/photo-1576874240748-125df0fab8c9?w=800&q=80",
    image: "https://mediaindia.eu/wp-content/uploads/2017/06/tea-plantation-1751369_1920.jpg?w=800&q=80",
    href: "/hiking"
  },
  {
    name: "Mountain Bike Trails",
    image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80",
    href: "/bike-hire"
  },
  {
    name: "Cultural Center",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    href: "/events"
  },
  {
    name: "Athletics Museum",
    image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80",
    href: "/museum"
  }
]

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % destinations.length)
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + destinations.length) % destinations.length)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src={destinations[activeIndex].image || "/placeholder.svg"}
          alt={destinations[activeIndex].name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 container flex flex-col items-start justify-center gap-4 md:gap-6 px-4">
          <p className="text-lg font-medium text-white/70">Explore</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter max-w-xl">
            The Spirit Of
            <br />
            M-SAFARI
          </h1>
          <Button 
            size="lg" 
            className="rounded-full bg-green-500 hover:bg-green-600 text-white"
          >
            Start now
          </Button>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-4 overflow-x-auto max-w-[90vw] md:max-w-full p-2">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0 ${
                index === activeIndex ? 'ring-2 ring-green-500' : 'opacity-50'
              }`}
            >
              <Image
                src={destinations[index].image || "/placeholder.svg"}
                alt={destinations[index].name}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Search Section */}
      <section className="container py-8 md:py-12 px-4">
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <Input
            type="text"
            placeholder="Places to Go"
            className="bg-white text-black rounded-full"
          />
          <Button 
            size="lg" 
            className="rounded-full bg-green-500 hover:bg-green-600 text-white px-8 whitespace-nowrap"
          >
            INSPIRE ME
          </Button>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold mb-8">
          Top Destinations
          <span className="block w-12 h-1 bg-green-500 mt-2" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topDestinations.map((destination, index) => (
            <Link 
              key={index} 
              href={destination.href} 
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">{destination.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-green-500 hover:border-green-500"
          >
            Explore more
          </Button>
        </div>
      </section>

      {/* Useful Information */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold mb-8">
          Useful Information
          <span className="block w-12 h-1 bg-green-500 mt-2" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/5 border-white/10 group hover:bg-white/10 transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Getting Here</h3>
              <p className="text-white/70">Find the best ways to reach Nandi County and navigate around.</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 group hover:bg-white/10 transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Where to Stay</h3>
              <p className="text-white/70">Discover accommodations from luxury hotels to cozy guesthouses.</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 group hover:bg-white/10 transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Local Guide</h3>
              <p className="text-white/70">Essential information for planning your visit to Nandi.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

