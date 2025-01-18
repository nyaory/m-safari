import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from 'lucide-react'
import Image from "next/image"

export default function EventsPage() {
  const events = [
    {
      title: "M-Safari Cross Country Championship",
      date: "March 15, 2024",
      location: "Main Stadium",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
      description: "Annual cross country event featuring local and international athletes",
    },
    {
      title: "Mountain Bike Festival",
      date: "April 20, 2024",
      location: "Scenic Hills",
      image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80",
      description: "A day of mountain biking competitions and demonstrations",
    },
    {
      title: "Cultural Sports Festival",
      date: "May 5, 2024",
      location: "Cultural Center",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
      description: "Celebrating traditional sports and cultural activities",
    },
  ]

  return (
    <div className="container py-8 md:py-12 px-4">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Upcoming Events</h1>
        <p className="text-lg text-white/70">
          Join us for exciting sports and cultural events throughout the year
        </p>
      </div>

      <div className="grid gap-6 mt-8 md:mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.title} className="bg-white/5 border-white/10">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              width={400}
              height={200}
              className="rounded-t-lg object-cover"
            />
            <CardHeader>
              <CardTitle className="text-white">{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/70">
                  <Calendar className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <MapPin className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-sm text-white/70">{event.description}</p>
                <Button className="w-full mt-4 bg-green-500 hover:bg-green-600">Register Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 md:mt-12 p-4 md:p-6 bg-white/5 rounded-lg border border-white/10">
        <h2 className="text-2xl font-bold mb-4 text-white">Host Your Event</h2>
        <p className="text-white/70 mb-4">
          Looking to organize a sports event in our region? We offer world-class facilities and
          support for event organizers.
        </p>
        <Button className="bg-green-500 hover:bg-green-600">Contact Events Team</Button>
      </div>
    </div>
  )
}

