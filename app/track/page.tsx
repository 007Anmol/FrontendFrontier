"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Providers } from "@/components/providers"
import { motion } from "framer-motion"
import { AlertCircle, ArrowLeft, ArrowRight, Calendar, MapPin, Search, Train } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function TrackPage() {
  const [trackingResult, setTrackingResult] = useState<boolean | null>(null)
  const [trackingMethod, setTrackingMethod] = useState("pnr")

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTrackingResult(true)
  }

  const trainStatus = {
    trainNumber: "12951",
    trainName: "Mumbai Rajdhani",
    from: "Mumbai Central",
    to: "New Delhi",
    scheduledDeparture: "16:35",
    scheduledArrival: "08:35",
    currentStatus: "Running on time",
    lastUpdated: "15 minutes ago",
    currentStation: "Kota Junction",
    nextStation: "Sawai Madhopur",
    delay: 0,
    stations: [
      {
        name: "Mumbai Central",
        status: "departed",
        scheduledTime: "16:35",
        actualTime: "16:35",
        delay: 0,
        distance: 0,
      },
      { name: "Borivali", status: "departed", scheduledTime: "17:10", actualTime: "17:12", delay: 2, distance: 25 },
      { name: "Surat", status: "departed", scheduledTime: "18:55", actualTime: "18:58", delay: 3, distance: 263 },
      { name: "Vadodara", status: "departed", scheduledTime: "20:05", actualTime: "20:10", delay: 5, distance: 392 },
      { name: "Ratlam", status: "departed", scheduledTime: "22:30", actualTime: "22:35", delay: 5, distance: 553 },
      {
        name: "Kota Junction",
        status: "departed",
        scheduledTime: "01:35",
        actualTime: "01:40",
        delay: 5,
        distance: 789,
      },
      { name: "Sawai Madhopur", status: "upcoming", scheduledTime: "03:00", actualTime: "-", delay: 0, distance: 934 },
      { name: "New Delhi", status: "upcoming", scheduledTime: "08:35", actualTime: "-", delay: 0, distance: 1384 },
    ],
  }

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
                <MapPin className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Track Your Train</h1>
              <p className="text-gray-600 mt-2">Get real-time updates on train location and status</p>
            </div>

            <Card className="shadow-lg mb-8 border-none bg-white">
              <CardHeader>
                <CardTitle>Track Train Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="pnr" onValueChange={setTrackingMethod}>
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="pnr">By PNR</TabsTrigger>
                    <TabsTrigger value="train">By Train Number</TabsTrigger>
                    <TabsTrigger value="station">By Station</TabsTrigger>
                  </TabsList>

                  <TabsContent value="pnr">
                    <form onSubmit={handleTrackSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="pnr">PNR Number</Label>
                        <div className="relative">
                          <Input id="pnr" placeholder="Enter 10-digit PNR number" className="pl-10" />
                          <Train className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500">Example: 1234567890</p>
                      </div>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        <Search className="mr-2 h-4 w-4" />
                        Track PNR Status
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="train">
                    <form onSubmit={handleTrackSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="train-number">Train Number</Label>
                        <div className="relative">
                          <Input id="train-number" placeholder="Enter train number" className="pl-10" />
                          <Train className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500">Example: 12951 (Mumbai Rajdhani)</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Journey Date</Label>
                        <div className="relative">
                          <Input id="date" type="date" className="pl-10" />
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        <Search className="mr-2 h-4 w-4" />
                        Track Train Status
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="station">
                    <form onSubmit={handleTrackSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="station">Station</Label>
                        <div className="relative">
                          <Input id="station" placeholder="Enter station name or code" className="pl-10" />
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500">Example: NDLS (New Delhi) or New Delhi</p>
                      </div>
                      <div className="space-y-2">
                        <Label>Time Window</Label>
                        <RadioGroup defaultValue="2" className="flex flex-wrap gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="2" id="hours-2" />
                            <Label htmlFor="hours-2">2 Hours</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="4" id="hours-4" />
                            <Label htmlFor="hours-4">4 Hours</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="6" id="hours-6" />
                            <Label htmlFor="hours-6">6 Hours</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        <Search className="mr-2 h-4 w-4" />
                        Show Trains
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {trackingResult && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="shadow-lg mb-8 border-none bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h2 className="text-xl font-bold">{trainStatus.trainName}</h2>
                        <p className="text-gray-500">{trainStatus.trainNumber}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            trainStatus.delay === 0
                              ? "bg-green-100 text-green-700"
                              : trainStatus.delay <= 15
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {trainStatus.currentStatus}
                        </div>
                        <p className="text-xs text-gray-500">Updated {trainStatus.lastUpdated}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm text-gray-500">From</p>
                            <p className="font-semibold">{trainStatus.from}</p>
                            <p className="text-sm">{trainStatus.scheduledDeparture}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">To</p>
                            <p className="font-semibold">{trainStatus.to}</p>
                            <p className="text-sm">{trainStatus.scheduledArrival}</p>
                          </div>
                        </div>

                        <div className="relative h-2 bg-gray-200 rounded-full">
                          <div
                            className="absolute h-2 bg-blue-600 rounded-full"
                            style={{
                              width: `${(trainStatus.stations.findIndex((s) => s.name === trainStatus.currentStation) / (trainStatus.stations.length - 1)) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <MapPin className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Current Location</p>
                            <p className="font-semibold">{trainStatus.currentStation}</p>
                            <div className="flex items-center mt-1">
                              <ArrowRight className="h-4 w-4 text-gray-400 mr-1" />
                              <p className="text-sm">Next: {trainStatus.nextStation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-4">Journey Progress</h3>

                    <div className="relative">
                      {trainStatus.stations.map((station, index) => (
                        <div key={index} className="flex mb-8 last:mb-0">
                          <div className="mr-4 relative">
                            <div
                              className={`h-6 w-6 rounded-full flex items-center justify-center ${
                                station.status === "departed"
                                  ? "bg-blue-600"
                                  : station.status === "upcoming"
                                    ? "border-2 border-blue-600 bg-white"
                                    : "bg-gray-200"
                              }`}
                            >
                              {station.status === "departed" && <div className="h-2 w-2 rounded-full bg-white"></div>}
                            </div>
                            {index < trainStatus.stations.length - 1 && (
                              <div
                                className={`absolute top-6 left-1/2 w-0.5 h-[calc(100%-12px)] -translate-x-1/2 ${
                                  station.status === "departed" ? "bg-blue-600" : "bg-gray-200"
                                }`}
                              ></div>
                            )}
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                              <div>
                                <p
                                  className={`font-medium ${
                                    station.name === trainStatus.currentStation ? "text-blue-600" : ""
                                  }`}
                                >
                                  {station.name}
                                  {station.name === trainStatus.currentStation && (
                                    <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                      Current
                                    </span>
                                  )}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {station.distance} km from {trainStatus.from}
                                </p>
                              </div>
                              <div className="flex items-center gap-4 mt-1 sm:mt-0">
                                <div>
                                  <p className="text-sm text-gray-500">Scheduled</p>
                                  <p className="font-medium">{station.scheduledTime}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">Actual</p>
                                  <p className={`font-medium ${station.delay > 0 ? "text-red-600" : ""}`}>
                                    {station.actualTime}
                                    {station.delay > 0 && ` (+${station.delay}m)`}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-800">Disclaimer</p>
                    <p className="text-sm text-amber-700 mt-1">
                      The train running information is indicative and may not reflect the actual position of the train.
                      IRCTC does not guarantee the accuracy of the information provided.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {!trackingResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 space-y-6"
              >
                <h2 className="text-xl font-semibold">Popular Trains</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { number: "12951", name: "Mumbai Rajdhani", from: "Mumbai", to: "Delhi" },
                    { number: "12301", name: "Howrah Rajdhani", from: "Howrah", to: "Delhi" },
                    { number: "12259", name: "Sealdah Duronto", from: "Sealdah", to: "Delhi" },
                    { number: "12001", name: "Shatabdi Express", from: "Delhi", to: "Bhopal" },
                  ].map((train, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border-none bg-white">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-full mr-4">
                            <Train className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">{train.name}</p>
                            <p className="text-sm text-gray-500">
                              {train.number} • {train.from} → {train.to}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={handleTrackSubmit}>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
                  <h3 className="text-lg font-semibold mb-2">Track Train Using SMS</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    You can also track your train by sending an SMS to 139 in the following format:
                  </p>
                  <div className="bg-white p-3 rounded border border-blue-200 font-mono text-sm">
                    TRAIN [train number]
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Example: TRAIN 12951 to 139</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </main>

        <footer className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Indian Railway Catering and Tourism Corporation. All Rights Reserved.</p>
        </footer>
      </div>
    </Providers>
  )
}

