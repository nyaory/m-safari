import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Ticket, Users } from 'lucide-react'
import Image from "next/image"

export default function MuseumPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Sports Museum</h1>
        <p className="text-lg text-white/70">
          Celebrating the rich athletic heritage of M-Safari
        </p>
      </div>

      <div className="relative h-[400px] mt-12 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=1200&q=80"
          alt="Museum Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Step Into History</h2>
            <Button variant="outline" className="text-white border-white hover:bg-green-500 hover:border-green-500">
              Plan Your Visit
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 mt-12 md:grid-cols-3">
        <div className="flex items-center space-x-4">
          <Clock className="h-6 w-6 text-green-500" />
          <div>
            <h3 className="font-bold text-white">Opening Hours</h3>
            <p className="text-sm text-white/70">
              Tuesday - Sunday: 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Ticket className="h-6 w-6 text-green-500" />
          <div>
            <h3 className="font-bold text-white">Admission</h3>
            <p className="text-sm text-white/70">
              Adults: KSH 500 | Children: KSH 250
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Users className="h-6 w-6 text-green-500" />
          <div>
            <h3 className="font-bold text-white">Guided Tours</h3>
            <p className="text-sm text-white/70">
              Available hourly, included with admission
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Hall of Champions</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80"
              alt="Hall of Champions"
              width={400}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            <p className="text-sm text-white/70">
              Celebrating our Olympic medalists and world champions
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Athletics History</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80"
              alt="Athletics History"
              width={400}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            <p className="text-sm text-white/70">
              The evolution of athletics in our region
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Interactive Exhibits</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=800&q=80"
              alt="Interactive Exhibits"
              width={400}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            <p className="text-sm text-white/70">
              Hands-on experiences and multimedia displays
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10">
        <h2 className="text-2xl font-bold mb-4 text-white">Special Events</h2>
        <p className="text-white/70 mb-4">
          Join us for special exhibitions, athlete meet-and-greets, and educational programs
          throughout the year.
        </p>
        <Button className="bg-green-500 hover:bg-green-600">View Calendar</Button>
      </div>
    </div>
  )
}

