"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Providers } from "@/components/providers"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, RotateCcw, Search, Train, Users } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BookingPage() {
  const router = useRouter()

  const popularCities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad"]

  return (
    <Providers>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
        <header className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </header>

        <main className="flex-1 container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                <Train className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Book Train Tickets</h1>
              <p className="text-gray-600 mt-2">Search and book train tickets for your journey</p>
            </div>

            <Card className="shadow-lg border-none bg-white">
              <CardContent className="p-6">
                <Tabs defaultValue="regular" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="regular">Regular Ticket</TabsTrigger>
                    <TabsTrigger value="tatkal">Tatkal Ticket</TabsTrigger>
                    <TabsTrigger value="premium">Premium Tatkal</TabsTrigger>
                  </TabsList>

                  <TabsContent value="regular" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="from">From Station</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input id="from" placeholder="Enter departure station" className="pl-10" />
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {popularCities.slice(0, 3).map((city) => (
                            <button
                              key={city}
                              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="to">To Station</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input id="to" placeholder="Enter arrival station" className="pl-10" />
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {popularCities.slice(3, 6).map((city) => (
                            <button
                              key={city}
                              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                        <RotateCcw className="h-5 w-5" />
                        <span className="sr-only">Swap stations</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="date">Journey Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input id="date" type="date" className="pl-10" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="class">Travel Class</Label>
                        <Select defaultValue="sl">
                          <SelectTrigger id="class">
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sl">Sleeper (SL)</SelectItem>
                            <SelectItem value="3a">AC 3 Tier (3A)</SelectItem>
                            <SelectItem value="2a">AC 2 Tier (2A)</SelectItem>
                            <SelectItem value="1a">AC First Class (1A)</SelectItem>
                            <SelectItem value="cc">Chair Car (CC)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quota">Quota</Label>
                        <Select defaultValue="general">
                          <SelectTrigger id="quota">
                            <SelectValue placeholder="Select quota" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General</SelectItem>
                            <SelectItem value="ladies">Ladies</SelectItem>
                            <SelectItem value="senior">Senior Citizen</SelectItem>
                            <SelectItem value="tatkal">Tatkal</SelectItem>
                            <SelectItem value="premium">Premium Tatkal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Passenger Type</Label>
                      <RadioGroup defaultValue="adult" className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="adult" id="adult" />
                          <Label htmlFor="adult">Adult</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="child" id="child" />
                          <Label htmlFor="child">Child (5-11 years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="senior" id="senior" />
                          <Label htmlFor="senior">Senior Citizen</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => router.push("/trains")}>
                      <Search className="mr-2 h-4 w-4" />
                      Search Trains
                    </Button>
                  </TabsContent>

                  <TabsContent value="tatkal" className="space-y-6">
                    {/* Similar form structure as regular ticket with tatkal specific fields */}
                    <p className="text-amber-600 bg-amber-50 p-3 rounded-md text-sm">
                      Tatkal booking opens at 10:00 AM for AC classes and 11:00 AM for non-AC classes one day before the
                      journey date.
                    </p>

                    {/* Rest of the form similar to regular ticket */}
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => router.push("/trains")}>
                      <Search className="mr-2 h-4 w-4" />
                      Search Trains
                    </Button>
                  </TabsContent>

                  <TabsContent value="premium" className="space-y-6">
                    {/* Similar form structure as regular ticket with premium tatkal specific fields */}
                    <p className="text-amber-600 bg-amber-50 p-3 rounded-md text-sm">
                      Premium Tatkal tickets are available at higher fares but with confirmed seat allocation. No refund
                      is applicable on cancellation.
                    </p>

                    {/* Rest of the form similar to regular ticket */}
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => router.push("/trains")}>
                      <Search className="mr-2 h-4 w-4" />
                      Search Trains
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="mt-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-semibold mb-4">Recent Searches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2].map((item) => (
                    <Card key={item} className="hover:shadow-md transition-shadow cursor-pointer border-none bg-white">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-full mr-4">
                            <Train className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Mumbai → Delhi</p>
                            <p className="text-sm text-gray-500">23 Apr, 2023 • Sleeper</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4">Popular Routes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { from: "Delhi", to: "Mumbai", trains: 42 },
                    { from: "Chennai", to: "Bangalore", trains: 38 },
                    { from: "Kolkata", to: "Delhi", trains: 27 },
                  ].map((route, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow cursor-pointer border-none bg-gradient-to-br from-white to-gray-50"
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-medium">
                            {route.from} → {route.to}
                          </p>
                          <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                            {route.trains} trains
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Avg. 16h 30m</span>
                          <Users className="h-3 w-3 ml-3 mr-1" />
                          <span>High Demand</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </main>

        <footer className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Indian Railway Catering and Tourism Corporation. All Rights Reserved.</p>
        </footer>
      </div>
    </Providers>
  )
}

