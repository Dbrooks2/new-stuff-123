"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

// Custom Pinterest icon component since it's not in lucide-react
const PinterestIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.690 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.999-5.373 11.999-12C24 5.372 18.627.001 12.001.001z"/>
  </svg>
)

const projects = [
  {
    title: "MURANO AT PORTOFINO",
    image: "/bathroom.jpg?height=400&width=600&text=Murano+at+Portofino",
  },
  {
    title: "INTRACOASTAL REMODEL",
    image: "/Kitchen1.jpg?height=400&width=600&text=Intracoastal+Remodel",
  },
  {
    title: "BOCA BEACH RESIDENCE",
    image: "/bedroom.jpg?height=400&width=600&text=Boca+Beach+Residence",
  },
  {
    title: "CHATAM RESIDENCE",
    image: "/Slide1.jpg?height=400&width=600&text=Chatam+Residence",
  },
  {
    title: "SOPHISTICATED CAPE LUXURY",
    image: "/slide2.jpg?height=400&width=600&text=Sophisticated+Cape+Luxury",
  },
  {
    title: "STUNNING CAPE HOUSE",
    image: "/slide3.jpg?height=400&width=600&text=Stunning+Cape+House",
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

export default function CapePropertyProsWebsite() {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [navOpacity, setNavOpacity] = useState(1)
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null)
  const [fading, setFading] = useState(false)

  const nextProject = () => {
    if (currentProject < projects.length - 3) {
      setCurrentProject((prev) => prev + 1)
    }
  }

  const prevProject = () => {
    if (currentProject > 0) {
      setCurrentProject((prev) => prev - 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 300 // Fade out over 300px of scrolling
      const opacity = Math.max(0, 1 - (scrollY / maxScroll))
      setNavOpacity(opacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Left Social Media Sidebar */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
        <Link 
          href="mailto:info@capepropertypros.com" 
          className="backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(to right, rgba(220, 203, 188, 0.8), rgba(196, 174, 158, 0.75), rgba(155, 133, 117, 0.7))'
          }}
        >
          <Mail className="w-5 h-5 text-white hover:text-gray-100" />
        </Link>
        <Link 
          href="#" 
          className="backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(to right, rgba(220, 203, 188, 0.8), rgba(196, 174, 158, 0.75), rgba(155, 133, 117, 0.7))'
          }}
        >
          <Facebook className="w-5 h-5 text-white hover:text-blue-200" />
        </Link>
        <Link 
          href="#" 
          className="backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(to right, rgba(220, 203, 188, 0.8), rgba(196, 174, 158, 0.75), rgba(155, 133, 117, 0.7))'
          }}
        >
          <Instagram className="w-5 h-5 text-white hover:text-pink-200" />
        </Link>
        <Link 
          href="#" 
          className="backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(to right, rgba(220, 203, 188, 0.8), rgba(196, 174, 158, 0.75), rgba(155, 133, 117, 0.7))'
          }}
        >
          <div className="w-5 h-5 text-white hover:text-red-200">
            <PinterestIcon />
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav 
        className="backdrop-blur-sm fixed top-0 w-full z-50 border-b border-rose-300/30 transition-opacity duration-300" 
        style={{
          background: 'linear-gradient(to right, rgba(220, 203, 188, 0.5), rgba(196, 174, 158, 0.45), rgba(155, 133, 117, 0.4))',
          opacity: navOpacity
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            <div className="flex items-center space-x-8">
              <Link href="#" className="text-white hover:text-gray-300 font-medium">
                PROJECTS
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 font-medium">
                DESIGN
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 font-medium">
                SHOP NOW
              </Link>
            </div>

            <div className="flex items-center">
              <Image
                src="/white-logo.jpg"
                alt="Cape Property Pros Logo"
                width={300}
                height={120}
              />
            </div>

            <div className="flex items-center space-x-8">
              <Link href="#" className="text-white hover:text-gray-300 font-medium">
                SHOWROOM
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 font-medium">
                OUR TEAM
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 font-medium">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero-kitchen.jpg"
            alt="Luxury Kitchen Design Showroom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60" />
        </div>
        <div className="relative z-10 flex items-end justify-center h-full pb-32">
          <div className="text-center text-primary">
            <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-wide gradient-text-white">INTERIOR DESIGN & HOME DECOR</h1>
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                className="px-8 py-3 text-white border-0 hover:opacity-90 transition-opacity"
                style={{
                  background: 'linear-gradient(to right, rgba(220, 203, 188, 1), rgba(196, 174, 158, 1), rgba(155, 133, 117, 1))'
                }}
              >
                INTERIOR DESIGN
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 text-white border-0 hover:opacity-90 transition-opacity"
                style={{
                  background: 'linear-gradient(to right, rgba(220, 203, 188, 1), rgba(196, 174, 158, 1), rgba(155, 133, 117, 1))'
                }}
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
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-script text-black mb-2 font-medium">
              Our latest Completed Project:
            </h2>
            <h3 className="text-6xl gradient-text mb-8 tracking-wider uppercase">HYANNIS RESIDENCE</h3>
            <p className="text-muted-foreground mt-2">3,600 Sq.Ft. • 3 bed/2.5 bath</p>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/House.jpg?height=600&width=1200&text=Boca+Beach+Residence+Video"
                alt="HYANNIS RESIDENCE"
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Luxury Interior Design */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-script text-black mb-2 font-medium">
                Personalized Luxury
              </h2>
              <h3 className="text-6xl gradient-text mb-8 tracking-wider uppercase">INTERIOR DESIGN</h3>
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
                  src="/photo (30).jpg?height=500&width=700&text=Luxury+Kitchen+Interior"
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
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-script text-black mb-6 font-medium">
              Completed Projects
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentProject * (100 / 3)}%)`, width: `${(projects.length / 3) * 100}%` }}
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full md:w-1/3 px-4 box-border"
                    style={{ maxWidth: '100%', minWidth: 0 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={project.image || "/bathroom.jpg.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-center mt-6 text-foreground font-light tracking-wider text-lg uppercase">{project.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevProject}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg disabled:opacity-50 transition-all duration-300"
              disabled={currentProject === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg disabled:opacity-50 transition-all duration-300"
              disabled={currentProject >= projects.length - 3}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section 
        className="py-0" 
        style={{ 
          background: 'linear-gradient(to right, rgba(220, 203, 188, 1), rgba(196, 174, 158, 1), rgba(155, 133, 117, 1))'
        }}
      >
        <div className="max-w-full">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            <div className="relative">
              <Image
                src="/ToniCPP-9.jpg?height=400&width=600&text=Testimonial+Interior"
                alt="Drew and Katya Thompson"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-white rounded-full p-4 shadow-lg">
                <div className="text-center">
                  
                </div>
              </div>
            </div>
            <div className="flex items-center px-12 lg:px-16 py-12">
              <div>
                <h2 className="text-5xl font-script mb-4 font-medium text-black">
                  Your Creative Partner
                </h2>
                <h3 className="text-5xl font-light mb-8 tracking-wider uppercase" style={{ color: 'white' }}>WHO WE ARE</h3>
                <p className="text-white mb-6 leading-relaxed text-lg">
                  Cape Property Pros is the premier luxury Showroom, and Interior Design Studio in Cape Cod. It is
                  led by husband & wife team, Boriss and Jovanov Antonent. Jovanov is an award-winning licensed
                  Interior Designer and Boriss is an accomplished businessman and experienced builder. Their shared talents uniquely allow
                  for Cape Property Pros to provide a Personalized Luxury Experience like no other.
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="border border-border p-4">
                <Image
                  src="/cs3 (1).jpg?height=400&width=600&text=Showroom+Interior"
                  alt="Showroom Interior"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-script text-black mb-2 font-medium">
                High-End Home Decor
              </h2>
              <h3 className="text-4xl gradient-text mb-8 tracking-wider uppercase">SHOWROOM</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you are furnishing a room, redecorating an entire home, or simply want to style your
                bookshelves, our Showroom has it all. We offer only the best in high-end home decor, providing products
                from the most exclusive and luxurious brands from around the world. The Showroom has a complete offering
                of furniture, home accessories, art, lighting, rugs, drapery, pillows, bedding, mirrors, and framing.
                Our exceptional personalized service will provide your every need, offering design consultation with our
                licensed Interior Designers as well as white-glove delivery, setup, and installation.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="default" 
                  className="px-8 py-3 text-white border-0 hover:opacity-90 transition-opacity"
                  style={{
                    background: 'linear-gradient(to right, rgba(220, 203, 188, 1), rgba(196, 174, 158, 1), rgba(155, 133, 117, 1))'
                  }}
                >
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
          backgroundImage: "url('background-image.jpeg?height=600&width=1600&text=Luxury+Interior+Background')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-5xl gradient-text mb-12 tracking-wider"
          >
            IMAGINE THE POSSIBILITIES
          </h2>
        </div>
      </section>

      {/* Our World */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-border bg-card">
            <div className="grid lg:grid-cols-2">
              <div className="p-12">
                <h2 className="text-5xl gradient-text mb-8 tracking-wider">OUR WORLD</h2>
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
                  src="/Tonjy.jpg?height=500&width=600&text=Woman+on+Luxury+Sofa"
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
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl gradient-text text-center mb-12 tracking-wider">FEATURED IN</h2>
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
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl font-light text-muted-foreground italic leading-relaxed">
            "Our Interior Design Studio is your creative partner, thoughtfully crafting your dreams into reality."
          </blockquote>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl gradient-text text-center mb-16 tracking-wider">TESTIMONIALS</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/testimony.jpg?height=400&width=600&text=Testimonial+Interior"
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
              <Image
                src="/white-logo.jpg"
                alt="Cape Property Pros Logo"
                width={240}
                height={110}
                className="mb-6"
              />
              <p className="text-sm text-muted-foreground mb-4">luxury decor • framing • designs</p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground">CAPE PROPERTY PROS</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    394 Main St Ste 2,<br />
                    West Dennis, MA 02670
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (561) 750-1554</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@capepropertypros.com</span>
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
