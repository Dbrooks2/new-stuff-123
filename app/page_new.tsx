"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "PALM BEACH OCEAN VIEW",
    image: "/placeholder.svg?height=400&width=600&text=Palm+Beach+Ocean+View",
  },
  {
    title: "SOPHISTICATED COASTAL LUXURY",
    image: "/placeholder.svg?height=400&width=600&text=Sophisticated+Coastal+Luxury",
  },
  {
    title: "MURANO AT PORTOFINO",
    image: "/placeholder.svg?height=400&width=600&text=Murano+at+Portofino",
  },
]

const testimonials = [
  {
    text: "I always came in for custom framing. And they have the best accessories selection. But now I was able to order wallpaper and rugs for my condo. New owners are great!",
    author: "- Loretta",
  },
  {
    text: "NEW OWNERS ARE GREAT",
    author: "- Customer Review",
  },
]

const featuredLogos = [
  { name: "AD PRO", logo: "/placeholder.svg?height=60&width=120&text=AD+PRO" },
  { name: "Bold Journey", logo: "/placeholder.svg?height=60&width=120&text=Bold+Journey" },
  { name: "Boca do Lobo", logo: "/placeholder.svg?height=60&width=120&text=Boca+do+Lobo" },
  { name: "AD", logo: "/placeholder.svg?height=60&width=120&text=AD" },
  { name: "Luxe", logo: "/placeholder.svg?height=60&width=120&text=Luxe" },
  { name: "VoyageMIA", logo: "/placeholder.svg?height=60&width=120&text=VoyageMIA" },
]

export default function ArtisticElementsWebsite() {
  const [currentProject, setCurrentProject] = useState(1)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="#" className="text-foreground hover:text-muted-foreground font-medium">
                PROJECTS
              </Link>
              <Link href="#" className="text-foreground hover:text-muted-foreground font-medium">
                DESIGN
              </Link>
              <Link href="#" className="text-foreground hover:text-muted-foreground font-medium">
                SHOP NOW
              </Link>
            </div>

            <div className="flex items-center">
              <div className="border-2 border-foreground px-3 py-1">
                <span className="text-foreground font-bold text-sm">ARTISTIC</span>
                <br />
                <span className="text-foreground font-light text-xs">ELEMENTS</span>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <Link href="#" className="text-foreground hover:text-muted-foreground font-medium">
                SHOWROOM
              </Link>
              <Link href="#" className="text-foreground hover:text-muted-foreground font-medium">
                OUR TEAM
              </Link>
              <Link href="#" className="text-foreground hover:text-muted-foreground font-medium">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen mt-16">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&text=Luxury+Interior+Design+Hero"
            alt="Interior Design Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60" />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-primary">
            <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-wide">INTERIOR DESIGN & HOME DECOR</h1>
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                INTERIOR DESIGN
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full ${i === 5 ? "bg-primary" : "bg-primary/50"}`} />
          ))}
        </div>
      </section>

      {/* Latest Completed Project */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-script text-muted-foreground mb-2 font-medium">
              Our latest Completed Project:
            </h2>
            <h3 className="text-5xl font-light text-foreground tracking-wider uppercase">BOCA BEACH RESIDENCE</h3>
            <p className="text-muted-foreground mt-2">3,600 Sq.Ft. • 3 bed/2.5 bath</p>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/placeholder.svg?height=600&width=1200&text=Boca+Beach+Residence+Video"
              >
                <source src="#" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Luxury Interior Design */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-script text-muted-foreground mb-2 font-medium">
                Personalized Luxury
              </h2>
              <h3 className="text-5xl font-light text-foreground mb-8 tracking-wider uppercase">INTERIOR DESIGN</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe that luxury Interior Design should go beyond the visual, but to reflect the personalized
                style and functionality of our client. The concept of Personalized Luxury drives everything that we do.
                It is reflected in our bespoke designs, project management, through to completion. We are your creative
                partner, providing a turnkey solution to make your dreams a reality.
              </p>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary px-8 py-3 bg-transparent"
              >
                GET CONSULTATION
              </Button>
            </div>
            <div className="relative">
              <div className="border border-border p-4">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Luxury+Kitchen+Interior"
                  alt="Luxury Kitchen Interior"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects Carousel */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-script text-foreground mb-8 font-medium">
              Completed Projects
            </h2>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-center mt-4 text-foreground font-medium tracking-wide">{project.title}</h3>
                </div>
              ))}
            </div>

            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card/80 hover:bg-card p-2 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card/80 hover:bg-card p-2 rounded-full shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-0" style={{ backgroundColor: 'hsl(20 20% 70%)' }}>
        <div className="max-w-full">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Drew+and+Katya+Thompson"
                alt="Drew and Katya Thompson"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-white rounded-full p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-black">AD</div>
                  <div className="text-xs text-black">PRO DIRECTORY</div>
                  <div className="text-xs font-bold text-black">2024 FEATURED</div>
                  <div className="text-xs font-bold text-black">DESIGNER</div>
                </div>
              </div>
            </div>
            <div className="flex items-center px-12 lg:px-16 py-12">
              <div>
                <h2 className="text-5xl font-script mb-4 font-medium" style={{ color: 'hsl(30 15% 85%)' }}>
                  Your Creative Partner
                </h2>
                <h3 className="text-5xl font-light mb-8 tracking-wider uppercase" style={{ color: 'white' }}>WHO WE ARE</h3>
                <p className="text-white mb-6 leading-relaxed text-lg">
                  Artistic Elements is the premier luxury Showroom, and Interior Design Studio in South Florida. It is
                  led by husband & wife team, Drew and Katya Thompson. Katya is an international award-winning licensed
                  Interior Designer and Drew is an MBA and accomplished businessman. Their shared talents uniquely allow
                  for Artistic Elements to provide a Personalized Luxury Experience like no other.
                </p>
                <p className="text-white mb-8 leading-relaxed text-lg">
                  Our Boutique showcases High-End Furniture • Unique Home Accessories • Exquisite Art and Framing •
                  Gorgeous Rugs • Vibrant Lighting • Luscious Bedding and Much More
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-3 bg-transparent text-sm tracking-wider"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-End Home Decor Showroom */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="border border-border p-4">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Showroom+Interior"
                  alt="Showroom Interior"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-script text-muted-foreground mb-2 font-medium">
                High-End Home Decor
              </h2>
              <h3 className="text-4xl font-light text-foreground mb-8 tracking-wider uppercase">SHOWROOM</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you are furnishing a room, redecorating an entire home, or simply want to style your
                bookshelves, our Showroom has it all. We offer only the best in high-end home decor, providing products
                from the most exclusive and luxurious brands from around the world. The Showroom has a complete offering
                of furniture, home accessories, art, lighting, rugs, drapery, pillows, bedding, mirrors, and framing.
                Our exceptional personalized service will provide your every need, offering design consultation with our
                licensed Interior Designers as well as white-glove delivery, setup, and installation.
              </p>
              <div className="flex gap-4">
                <Button variant="default" className="bg-accent hover:bg-accent/80 text-accent-foreground px-8 py-3">
                  GO TO THE SHOWROOM
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary px-8 py-3 bg-transparent"
                >
                  SHOP ONLINE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imagine the Possibilities */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1600&text=Luxury+Interior+Background')",
        }}
      >
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-light text-primary mb-12 tracking-wider">IMAGINE THE POSSIBILITIES</h2>
          <blockquote className="text-2xl font-light text-primary italic leading-relaxed">
            "We provide a turnkey solution using the latest in technology to allow you to visualize your design
            throughout the process."
          </blockquote>
        </div>
      </section>

      {/* Our World */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-border bg-card">
            <div className="grid lg:grid-cols-2">
              <div className="p-12">
                <h2 className="text-5xl font-light text-foreground mb-8 tracking-wider">OUR WORLD</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  If you are passionate about Interior Design and the Luxury Lifestyle, take a look into Our World.
                  Check out our latest blogs and social media to see what inspires us, current projects, and our take on
                  design elements.
                </p>
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary px-8 py-3 bg-transparent"
                >
                  READ BLOG
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Woman+on+Luxury+Sofa"
                  alt="Woman on Luxury Sofa"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-foreground text-center mb-12 tracking-wider">FEATURED IN</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {featuredLogos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={logo.logo || "/placeholder.svg"}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl font-light text-muted-foreground italic leading-relaxed">
            "Our Interior Design Studio is your creative partner, thoughtfully crafting your dreams into reality."
          </blockquote>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-foreground text-center mb-16 tracking-wider">TESTIMONIALS</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Testimonial+Interior"
                alt="Testimonial Interior"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <div className="text-6xl text-muted mb-4">"</div>
              <h3 className="text-2xl font-light text-foreground mb-6">
                {testimonials[currentTestimonial].text.split(" ").slice(0, 4).join(" ")}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{testimonials[currentTestimonial].text}</p>
              <p className="text-muted-foreground italic">{testimonials[currentTestimonial].author}</p>
            </div>
          </div>

          {/* Google Reviews */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Read all reviews on</p>
            <Image
              src="/placeholder.svg?height=30&width=100&text=Google"
              alt="Google Reviews"
              width={100}
              height={30}
              className="mx-auto"
            />
          </div>

          {/* Testimonial dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === currentTestimonial ? "bg-accent" : "bg-muted"
                }`}
                onClick={() => setCurrentTestimonial(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo and Info */}
            <div>
              <div className="border-2 border-primary-foreground px-3 py-2 inline-block mb-6">
                <span className="font-bold text-sm">ARTISTIC</span>
                <br />
                <span className="font-light text-xs">ELEMENTS</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">luxury decor • framing • designs</p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground">ARTISTIC ELEMENTS</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    400 E. Palmetto Park Rd.,
                    <br />
                    Boca Raton, FL 33432
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (561) 750-1554</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@theartisticelements.com</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground">SHOWROOM HOURS</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday - Friday 10:00 - 5:00</p>
                <p>Saturday - by appointment</p>
              </div>
            </div>

            {/* Links and Shop */}
            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground">FEATURED LINKS</h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <Link href="#" className="block hover:text-primary-foreground">
                  PORTFOLIO
                </Link>
                <Link href="#" className="block hover:text-primary-foreground">
                  SHOWROOM
                </Link>
                <Link href="#" className="block hover:text-primary-foreground">
                  BLOG
                </Link>
              </div>

              <h3 className="font-semibold mb-4 text-primary-foreground">ONLINE SHOP</h3>
              <p className="text-sm text-muted-foreground mb-4">Now you can place orders from our showroom online.</p>
              <Button className="bg-accent hover:bg-accent/80 text-accent-foreground px-6 py-2">SHOP NOW</Button>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-4 mt-12 pt-8 border-t border-border">
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
