import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mountain, Clock } from 'lucide-react'
import Image from "next/image"

export default function HikingPage() {
  return (
    <div className="container py-8 md:py-12 px-4">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Hiking Adventures</h1>
        <p className="text-lg text-white/70">
          Explore the natural beauty of M-Safari's trails and viewpoints
        </p>
      </div>

      <div className="relative h-[300px] md:h-[400px] mt-8 md:mt-12 rounded-lg overflow-hidden">
        <Image
          // src="https://images.unsplash.com/photo-1580311735321-77f6e4e90ac5?w=1200&q=80"
          src="https://assets.evcdn.net/pim-assets-images/23293/5df7a667dbdc1.jpeg?w=1200&q=80"
          alt="Scenic Trail"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Discover Our Trails</h2>
            <Button variant="outline" className="text-white border-white hover:bg-green-500 hover:border-green-500">
              View Trail Map
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 mt-8 md:mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Beginner Trails</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1513023840371-dd774fcaee5b?w=800&q=80"
              alt="Beginner Trail"
              width={400}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="h-4 w-4 text-green-500" />
                <span className="text-sm">1-2 hours</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mountain className="h-4 w-4 text-green-500" />
                <span className="text-sm">Easy difficulty</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Intermediate Trails</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
              alt="Intermediate Trail"
              width={400}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="h-4 w-4 text-green-500" />
                <span className="text-sm">2-4 hours</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mountain className="h-4 w-4 text-green-500" />
                <span className="text-sm">Moderate difficulty</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Advanced Trails</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1587547131116-a0655a526190?w=800&q=80"
              alt="Advanced Trail"
              width={400}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="h-4 w-4 text-green-500" />
                <span className="text-sm">4+ hours</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mountain className="h-4 w-4 text-green-500" />
                <span className="text-sm">Challenging difficulty</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 md:mt-12 grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Guided Tours</h2>
          <p className="text-white/70">
            Join our experienced guides for organized hiking tours. Learn about local flora, fauna,
            and history while enjoying the scenic beauty of our region.
          </p>
          <Button className="bg-green-500 hover:bg-green-600">Book a Guide</Button>
        </div>
        <Image
          // src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&q=80"
          src="https://images.pexels.com/photos/1143514/pexels-photo-1143514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Guided Tour"
          width={500}
          height={300}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  )
}

