import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bike, MapPin, Clock, Shield } from 'lucide-react'
import Image from "next/image"

export default function BikeHirePage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Hire a Bike</h1>
        <p className="text-lg text-white/70">
          Explore M-Safari's scenic routes on two wheels
        </p>
      </div>

      <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Bike className="h-5 w-5 text-green-500" />
              Mountain Bikes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80"
              alt="Mountain Bike"
              width={400}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            <p className="text-white/70 mb-4">
              Perfect for exploring rough terrain and scenic trails
            </p>
            <Button className="w-full bg-green-500 hover:bg-green-600">Book Now</Button>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Bike className="h-5 w-5 text-green-500" />
              Road Bikes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80"
              alt="Road Bike"
              width={400}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            <p className="text-white/70 mb-4">
              Ideal for long-distance rides on paved roads
            </p>
            <Button className="w-full bg-green-500 hover:bg-green-600">Book Now</Button>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Bike className="h-5 w-5 text-green-500" />
              Electric Bikes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80"
              alt="Electric Bike"
              width={400}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            <p className="text-white/70 mb-4">
              Easy riding with power assistance when needed
            </p>
            <Button className="w-full bg-green-500 hover:bg-green-600">Book Now</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 mt-12 md:grid-cols-3">
        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 mt-1 text-green-500" />
          <div>
            <h3 className="font-bold text-white">Multiple Locations</h3>
            <p className="text-sm text-white/70">
              Convenient pickup points across the region
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Clock className="h-6 w-6 mt-1 text-green-500" />
          <div>
            <h3 className="font-bold text-white">Flexible Duration</h3>
            <p className="text-sm text-white/70">
              Hire by hour, day, or week
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Shield className="h-6 w-6 mt-1 text-green-500" />
          <div>
            <h3 className="font-bold text-white">Safety Equipment</h3>
            <p className="text-sm text-white/70">
              Helmets and safety gear included
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

