"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Providers } from "@/components/providers"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, CreditCard, MapPin, Search, Shield, Train, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const features = [
    {
      icon: <Train className="h-10 w-10 text-blue-600" />,
      title: "Book Train Tickets",
      description: "Book train tickets online with ease and convenience",
    },
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "Track Your Train",
      description: "Get real-time updates on train location and status",
    },
    {
      icon: <Calendar className="h-10 w-10 text-blue-600" />,
      title: "Plan Your Journey",
      description: "Plan your journey with our comprehensive travel planner",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-blue-600" />,
      title: "Secure Payments",
      description: "Multiple secure payment options for hassle-free transactions",
    },
  ]

  const services = [
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "PNR Status",
      description: "Check your PNR status instantly",
      link: "#",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Train Schedule",
      description: "View complete train schedules",
      link: "#",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Travel Insurance",
      description: "Get travel insurance for your journey",
      link: "#",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Fare Alerts",
      description: "Get alerts on fare changes",
      link: "#",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Providers>
      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">Travel Smarter with IRCTC</h1>
                <p className="text-xl text-blue-100">
                  Book train tickets, check PNR status, and plan your journey with ease
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50"
                    onClick={() => router.push("/booking")}
                  >
                    Book Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => router.push("/track")}
                  >
                    Track Train
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl bg-blue-600/30 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-center p-6">
                  <Train className="h-20 w-20 mx-auto mb-6 text-white/80" />
                  <h3 className="text-2xl font-bold mb-2">Indian Railways</h3>
                  <p className="text-blue-100">Connecting India with comfort and reliability</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="container mx-auto px-4 mt-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg">
              <button
                onClick={() => router.push("/login")}
                className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-white/20 transition-all"
              >
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <Train className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium">Login/Signup</span>
              </button>
              <button
                onClick={() => router.push("/booking")}
                className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-white/20 transition-all"
              >
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <Calendar className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium">Book Tickets</span>
              </button>
              <button
                onClick={() => router.push("/trains")}
                className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-white/20 transition-all"
              >
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <Search className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium">Find Trains</span>
              </button>
              <button
                onClick={() => router.push("/track")}
                className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-white/20 transition-all"
              >
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium">Track Train</span>
              </button>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose IRCTC</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the best of Indian Railways with our premium services and features
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive travel solutions for all your railway journey needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-all border-none bg-gradient-to-br from-gray-50 to-white">
                    <CardContent className="p-6">
                      <div className="mb-4 bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-500 mb-4">{service.description}</p>
                      <Link
                        href={service.link}
                        className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700"
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to start your journey?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Book your train tickets now and experience the convenience of IRCTC
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50"
                  onClick={() => router.push("/booking")}
                >
                  Book Tickets
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => router.push("/login")}
                >
                  Sign Up
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">About IRCTC</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Help</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-white">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Cancellation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Refund Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      User Agreement
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Train Tickets
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      E-Catering
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Tourism
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Loyalty Program
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      YouTube
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
              <p>© {new Date().getFullYear()} Indian Railway Catering and Tourism Corporation. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Providers>
  )
}

