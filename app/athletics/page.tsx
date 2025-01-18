import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"

export default function AthleticsPage() {
  return (
    <div className="container py-8 md:py-12 px-4">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Athletics in M-Safari</h1>
        <p className="text-lg text-white/70">
          Discover why our region is known as the Source of Champions
        </p>
      </div>

      <div className="grid gap-6 mt-8 md:mt-12 md:grid-cols-2">
        <Image
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80"
          alt="Athletes training"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Training Facilities</h2>
          <p className="text-white/70">
            Our world-class training facilities have produced numerous Olympic medalists and world
            champions. The high altitude and perfect climate make our region an ideal location for
            athletic training.
          </p>
          <Button className="bg-green-500 hover:bg-green-600">Book Training Session</Button>
        </div>
      </div>

      <div className="grid gap-6 mt-8 md:mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Elite Coaches</CardTitle>
            <CardDescription className="text-white/70">Learn from the best in the sport</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1544921431-9de64897a243?w=800&q=80"
              alt="Coaching"
              width={400}
              height={200}
              className="rounded-lg object-cover"
            />
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Training Camps</CardTitle>
            <CardDescription className="text-white/70">Professional training facilities</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80"
              alt="Training Camp"
              width={400}
              height={200}
              className="rounded-lg object-cover"
            />
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Success Stories</CardTitle>
            <CardDescription className="text-white/70">Champions from our region</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80"
              alt="Champions"
              width={400}
              height={200}
              className="rounded-lg object-cover"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

