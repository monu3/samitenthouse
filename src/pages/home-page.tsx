"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Award,
  Gift,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { cn } from "../lib/utils";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "src/assets/eventlogo.png",
      title: "Creating Unforgettable Events",
      subtitle: "From concept to execution, we bring your vision to life",
    },
    {
      image: "src/assets/useme.jpeg",
      title: "Weddings & Celebrations",
      subtitle: "Making your special day truly magical",
    },
    {
      image: "src/assets/useme.jpeg",
      title: "School Events",
      subtitle: "Professional planning for successful business gatherings",
    },
  ];

  const services = [
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Wedding Planning",
      description:
        "Comprehensive wedding planning services to make your special day perfect.",
      link: "/services#wedding",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Corporate Events",
      description:
        "Professional corporate event management for conferences and team building.",
      link: "/services#corporate",
    },
    {
      icon: <Gift className="h-10 w-10 text-primary" />,
      title: "Pasni",
      description:
        "Creative birthday party planning for all ages with custom themes.",
      link: "/services#birthday",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "School Events",
      description:
        "Elegant award ceremonies that recognize achievements with style.",
      link: "/services#awards",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                index === currentSlide ? "opacity-100" : "opacity-0"
              )}
            >
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-up">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up animation-delay-200">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up animation-delay-300">
              <Button size="lg" asChild>
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                asChild
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-8 w-8" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50"
          onClick={nextSlide}
        >
          <ChevronRight className="h-8 w-8" />
          <span className="sr-only">Next slide</span>
        </Button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === currentSlide ? "bg-white" : "bg-white/50"
              )}
              onClick={() => setCurrentSlide(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Sami Tent House is a premier event planning company with over 10+
              years of experience creating memorable events. We specialize in
              weddings, corporate events,school events, and special
              celebrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="src/assets/eventlogo.png"
                alt="About EventMaster"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Your Vision, Our Expertise</h3>
              <p>
                At EventMaster, we believe that every event should be as unique
                as the individuals hosting it. Our team of experienced event
                planners works closely with you to understand your vision and
                bring it to life.
              </p>
              <p>
                From intimate gatherings to grand celebrations, we handle every
                detail with precision and care, ensuring that your event exceeds
                expectations and creates lasting memories.
              </p>
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We offer a comprehensive range of event planning services tailored
              to meet your specific needs and preferences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="ghost" asChild>
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Event Gallery</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Browse through our portfolio of successful events and get inspired
              for your next celebration.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="src/assets/useme.jpeg"
              alt="Gallery image 1"
              className="rounded-lg hover:opacity-80 transition-opacity cursor-pointer h-40 md:h-64 w-full object-cover"
            />
            <img
              src="src/assets/useme.jpeg?height=300&width=300"
              alt="Gallery image 2"
              className="rounded-lg hover:opacity-80 transition-opacity cursor-pointer h-40 md:h-64 w-full object-cover"
            />
            <img
              src="src/assets/useme.jpeg?height=300&width=300"
              alt="Gallery image 3"
              className="rounded-lg hover:opacity-80 transition-opacity cursor-pointer h-40 md:h-64 w-full object-cover"
            />
            <img
              src="src/assets/useme.jpeg?height=300&width=300"
              alt="Gallery image 4"
              className="rounded-lg hover:opacity-80 transition-opacity cursor-pointer h-40 md:h-64 w-full object-cover"
            />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Your event Grand & Memorable
              </h2>
              <p className="text-xl">
                Celebrate your event with us, we will make it memorable
              </p>
              <p className="">
                Join the most loved event planner application ever, never worry
                about decorations, it's all our responsibility
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  asChild
                >
                  <Link to="/booking">Book Your Event</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className=" bg-[#131b36] p-8 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">90+</div>
                <div className="text-xl">Vendors</div>
              </div>
              <div className="bg-[#131b36] p-8 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">2,000+</div>
                <div className="text-xl">Designs</div>
              </div>
              <div className="col-span-2 bg-[#131b36] p-8 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">6,000+</div>
                <div className="text-xl">Events Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
