"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Providers } from "@/components/providers"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  Filter,
  Info,
  RotateCcw,
  Shield,
  Star,
  Train,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function TrainsPage() {
  const router = useRouter()
  const [showFilters, setShowFilters] = useState(false)
  const [expandedTrain, setExpandedTrain] = useState<number | null>(null)

  const trains = [
    {
      id: 1,
      name: "Rajdhani Express",
      number: "12951",
      from: "Mumbai Central",
      to: "New Delhi",
      departure: "16:35",
      arrival: "08:35",
      duration: "16h 00m",
      classes: ["SL", "3A", "2A", "1A"],
      availability: {
        SL: "WL 15",
        "3A": "RAC 5",
        "2A": "Available 12",
        "1A": "Available 4",
      },
      price: {
        SL: 750,
        "3A": 1950,
        "2A": 2850,
        "1A": 4850,
      },
      rating: 4.5,
      days: ["Mon", "Wed", "Fri", "Sun"],
    },
    {
      id: 2,
      name: "Duronto Express",
      number: "12261",
      from: "Mumbai CST",
      to: "New Delhi",
      departure: "11:05",
      arrival: "04:55",
      duration: "17h 50m",
      classes: ["SL", "3A", "2A"],
      availability: {
        SL: "Available 45",
        "3A": "Available 22",
        "2A": "Available 8",
      },
      price: {
        SL: 685,
        "3A": 1780,
        "2A": 2650,
      },
      rating: 4.2,
      days: ["Tue", "Thu", "Sat"],
    },
    {
      id: 3,
      name: "Garib Rath Express",
      number: "12909",
      from: "Mumbai Central",
      to: "New Delhi",
      departure: "17:55",
      arrival: "10:55",
      duration: "17h 00m",
      classes: ["3A"],
      availability: {
        "3A": "Available 65",
      },
      price: {
        "3A": 1250,
      },
      rating: 3.8,
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ]

  const toggleTrainDetails = (id: number) => {
    if (expandedTrain === id) {
      setExpandedTrain(null)
    } else {
      setExpandedTrain(id)
    }
  }

  return (
    <Providers>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
        <header className="container mx-auto px-4 py-6">
          <Link href="/booking" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Search
          </Link>
        </header>

        <main className="flex-1 container mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 border-none">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">Mumbai</span>
                      <span className="text-sm text-gray-500">Mumbai Central</span>
                    </div>
                    <ArrowRight className="mx-2 h-5 w-5 text-gray-400" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">Delhi</span>
                      <span className="text-sm text-gray-500">New Delhi</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>23 Apr, 2023</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Train className="mr-1 h-4 w-4" />
                    <span>Sleeper</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => router.push("/booking")}>
                  <RotateCcw className="mr-2 h-3 w-3" />
                  Modify
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Filters - Mobile */}
              <div className="lg:hidden">
                <Button variant="outline" className="w-full mb-4" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="mr-2 h-4 w-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>

                {showFilters && (
                  <Card className="mb-6 border-none bg-white">
                    <CardContent className="p-4 space-y-6">
                      {/* Filter content - same as desktop */}
                      <div className="space-y-4">
                        <h3 className="font-medium">Departure Time</h3>
                        <div className="space-y-2">
                          {["00:00 - 06:00", "06:00 - 12:00", "12:00 - 18:00", "18:00 - 24:00"].map((time) => (
                            <div key={time} className="flex items-center space-x-2">
                              <Checkbox id={`time-${time}`} />
                              <Label htmlFor={`time-${time}`}>{time}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-medium">Train Class</h3>
                        <div className="space-y-2">
                          {["Sleeper (SL)", "AC 3 Tier (3A)", "AC 2 Tier (2A)", "AC First Class (1A)"].map((cls) => (
                            <div key={cls} className="flex items-center space-x-2">
                              <Checkbox id={`class-${cls}`} />
                              <Label htmlFor={`class-${cls}`}>{cls}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <h3 className="font-medium">Price Range</h3>
                          <span className="text-sm text-gray-500">₹500 - ₹5000</span>
                        </div>
                        <Slider defaultValue={[500, 5000]} min={0} max={10000} step={100} />
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-medium">Train Type</h3>
                        <div className="space-y-2">
                          {["Rajdhani", "Shatabdi", "Duronto", "Garib Rath", "Superfast", "Express"].map((type) => (
                            <div key={type} className="flex items-center space-x-2">
                              <Checkbox id={`type-${type}`} />
                              <Label htmlFor={`type-${type}`}>{type}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Filters - Desktop */}
              <div className="hidden lg:block">
                <Card className="border-none bg-white">
                  <CardContent className="p-4 space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">Filters</h3>
                      <Button variant="ghost" size="sm" className="h-8 text-blue-600">
                        Reset All
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Departure Time</h3>
                      <div className="space-y-2">
                        {["00:00 - 06:00", "06:00 - 12:00", "12:00 - 18:00", "18:00 - 24:00"].map((time) => (
                          <div key={time} className="flex items-center space-x-2">
                            <Checkbox id={`time-desktop-${time}`} />
                            <Label htmlFor={`time-desktop-${time}`}>{time}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Train Class</h3>
                      <div className="space-y-2">
                        {["Sleeper (SL)", "AC 3 Tier (3A)", "AC 2 Tier (2A)", "AC First Class (1A)"].map((cls) => (
                          <div key={cls} className="flex items-center space-x-2">
                            <Checkbox id={`class-desktop-${cls}`} />
                            <Label htmlFor={`class-desktop-${cls}`}>{cls}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Price Range</h3>
                        <span className="text-sm text-gray-500">₹500 - ₹5000</span>
                      </div>
                      <Slider defaultValue={[500, 5000]} min={0} max={10000} step={100} />
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Train Type</h3>
                      <div className="space-y-2">
                        {["Rajdhani", "Shatabdi", "Duronto", "Garib Rath", "Superfast", "Express"].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox id={`type-desktop-${type}`} />
                            <Label htmlFor={`type-desktop-${type}`}>{type}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Train List */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600">{trains.length} trains found</p>
                  <Select defaultValue="departure">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="departure">Departure Time</SelectItem>
                      <SelectItem value="arrival">Arrival Time</SelectItem>
                      <SelectItem value="duration">Duration</SelectItem>
                      <SelectItem value="price">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {trains.map((train) => (
                  <motion.div
                    key={train.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden border-none bg-white">
                      <CardContent className="p-0">
                        <div className="p-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{train.name}</h3>
                                <Badge variant="outline" className="text-xs">
                                  {train.number}
                                </Badge>
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <div className="flex items-center">
                                  <Star className="h-3 w-3 text-yellow-500 mr-1" />
                                  <span>{train.rating}</span>
                                </div>
                                <span className="mx-2">•</span>
                                <div className="flex items-center gap-1">
                                  {train.days.map((day, i) => (
                                    <span key={i} className="text-xs bg-blue-50 text-blue-700 px-1 rounded">
                                      {day}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-3 md:flex md:items-center gap-4 md:gap-8">
                              <div className="flex flex-col">
                                <span className="font-semibold">{train.departure}</span>
                                <span className="text-xs text-gray-500">{train.from}</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="text-xs text-gray-500">{train.duration}</span>
                                <div className="relative w-16 h-0.5 bg-gray-300 my-1">
                                  <div className="absolute -top-1.5 -left-1 h-3 w-3 rounded-full bg-blue-600"></div>
                                  <div className="absolute -top-1.5 -right-1 h-3 w-3 rounded-full bg-blue-600"></div>
                                </div>
                                <span className="text-xs text-gray-500">Direct</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="font-semibold">{train.arrival}</span>
                                <span className="text-xs text-gray-500">{train.to}</span>
                              </div>
                            </div>

                            <div className="flex flex-col md:items-end">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-lg">₹{train.price[train.classes[0]]}</span>
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                                  {train.availability[train.classes[0]]}
                                </Badge>
                              </div>
                              <span className="text-xs text-gray-500">{train.classes[0]}</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center mt-4">
                            <div className="flex gap-2">
                              {train.classes.map((cls) => (
                                <Badge key={cls} variant="outline" className="text-xs">
                                  {cls}
                                </Badge>
                              ))}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleTrainDetails(train.id)}
                              className="text-blue-600"
                            >
                              {expandedTrain === train.id ? (
                                <>
                                  Hide Details <ChevronUp className="ml-1 h-4 w-4" />
                                </>
                              ) : (
                                <>
                                  View Details <ChevronDown className="ml-1 h-4 w-4" />
                                </>
                              )}
                            </Button>
                          </div>
                        </div>

                        {expandedTrain === train.id && (
                          <div className="border-t p-4 bg-gray-50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-medium mb-3">Availability & Fares</h4>
                                <div className="space-y-3">
                                  {train.classes.map((cls) => (
                                    <div
                                      key={cls}
                                      className="flex justify-between items-center p-2 bg-white rounded border"
                                    >
                                      <div>
                                        <p className="font-medium">{cls}</p>
                                        <p className="text-sm text-gray-500">{train.availability[cls]}</p>
                                      </div>
                                      <div className="text-right">
                                        <p className="font-medium">₹{train.price[cls]}</p>
                                        <Button size="sm" className="mt-1 h-8 bg-blue-600 hover:bg-blue-700">
                                          Book Now
                                        </Button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-medium mb-3">Train Information</h4>
                                <div className="space-y-3">
                                  <div className="flex items-start gap-3 p-2 bg-white rounded border">
                                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                                    <div>
                                      <p className="font-medium">Running Days</p>
                                      <div className="flex flex-wrap gap-1 mt-1">
                                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                                          <span
                                            key={day}
                                            className={`text-xs px-2 py-0.5 rounded ${
                                              train.days.includes(day)
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-gray-100 text-gray-400"
                                            }`}
                                          >
                                            {day}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-start gap-3 p-2 bg-white rounded border">
                                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                                    <div>
                                      <p className="font-medium">Cancellation Charges</p>
                                      <p className="text-sm text-gray-500 mt-1">
                                        Cancellation charges apply as per Indian Railways rules.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex items-start gap-3 p-2 bg-white rounded border">
                                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                                    <div>
                                      <p className="font-medium">Coach Position</p>
                                      <Button variant="link" className="h-auto p-0 text-blue-600">
                                        View Coach Position
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
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

