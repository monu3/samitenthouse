import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Calendar,
  Users,
  Gift,
  Award,
  Music,
  Camera,
  Utensils,
  Palette,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "wedding",
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Wedding Planning",
      description:
        "Comprehensive wedding planning services to make your special day perfect. From venue selection to coordination on the day, we handle every detail.",
      features: [
        "Venue selection and booking",
        "Vendor coordination",
        "Budget management",
        "Timeline creation",
        "Day-of coordination",
        "Custom decor and styling",
      ],
    },
    {
      id: "corporate",
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Corporate Events",
      description:
        "Professional corporate event management for conferences, team building activities, product launches, and more.",
      features: [
        "Conference planning",
        "Team building activities",
        "Product launches",
        "Award ceremonies",
        "Client appreciation events",
        "Holiday parties",
      ],
    },
    {
      id: "birthday",
      icon: <Gift className="h-10 w-10 text-primary" />,
      title: "Birthday Parties",
      description:
        "Creative birthday party planning for all ages with custom themes, entertainment, and memorable experiences.",
      features: [
        "Theme development",
        "Venue decoration",
        "Entertainment booking",
        "Custom cake and catering",
        "Party favors",
        "Photography services",
      ],
    },
    {
      id: "awards",
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Award Ceremonies",
      description:
        "Elegant award ceremonies that recognize achievements with style, from corporate recognition to industry galas.",
      features: [
        "Venue selection",
        "Stage design",
        "Award presentation planning",
        "Entertainment coordination",
        "Red carpet experiences",
        "Photography and videography",
      ],
    },
    {
      id: "entertainment",
      icon: <Music className="h-10 w-10 text-primary" />,
      title: "Entertainment Services",
      description:
        "Book top-tier entertainment for your event, from live bands and DJs to performers and speakers.",
      features: [
        "Live music booking",
        "DJ services",
        "Performers and artists",
        "Keynote speakers",
        "Interactive entertainment",
        "Custom entertainment packages",
      ],
    },
    {
      id: "photography",
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: "Photography & Videography",
      description:
        "Capture your event with professional photography and videography services that document every special moment.",
      features: [
        "Event photography",
        "Videography services",
        "Photo booths",
        "Same-day editing",
        "Drone photography",
        "Digital galleries",
      ],
    },
    {
      id: "catering",
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: "Catering Services",
      description:
        "Delicious catering options for any event, with custom menus tailored to your preferences and dietary needs.",
      features: [
        "Custom menu creation",
        "Buffet service",
        "Plated dinners",
        "Cocktail receptions",
        "Dessert stations",
        "Beverage service",
      ],
    },
    {
      id: "decor",
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Decor & Styling",
      description:
        "Transform your venue with stunning decor and styling that creates the perfect atmosphere for your event.",
      features: [
        "Theme development",
        "Floral arrangements",
        "Lighting design",
        "Table settings",
        "Backdrop creation",
        "Custom installations",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="src/assets/heroimage.png"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "cursive" }}>
              Our Services
            </h1>
            <p className="text-xl text-white/90"
            style={{ fontFamily: "cursive" }}>
              Comprehensive event planning solutions for every occasion
            </p>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              At EventMaster, we offer a comprehensive range of event planning
              services tailored to meet your specific needs and preferences.
              From intimate gatherings to grand celebrations, we handle every
              detail with precision and care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button asChild>
                    <Link to="/booking">Book This Service</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We follow a structured approach to ensure every event is planned
              and executed to perfection.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">Consultation</h3>
              <p className="text-muted-foreground">
                We begin with a detailed consultation to understand your vision,
                preferences, and requirements.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">Planning</h3>
              <p className="text-muted-foreground">
                Our team develops a comprehensive plan, including budget,
                timeline, and vendor coordination.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">Execution</h3>
              <p className="text-muted-foreground">
                We handle all logistics and coordination on the day of the
                event, ensuring everything runs smoothly.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">Follow-up</h3>
              <p className="text-muted-foreground">
                After the event, we gather feedback and ensure all final details
                are addressed to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-muted">
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "EventMaster handled our corporate conference with exceptional
                  professionalism. The attention to detail and seamless
                  execution impressed everyone in attendance."
                </p>
                <div className="font-bold">John Smith</div>
                <div className="text-sm text-muted-foreground">
                  Marketing Director, Tech Solutions Inc.
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "Our wedding day was absolutely perfect thanks to the amazing
                  team at EventMaster. They took care of every detail, allowing
                  us to fully enjoy our special day."
                </p>
                <div className="font-bold">Sarah & Michael Johnson</div>
                <div className="text-sm text-muted-foreground">
                  Wedding Clients
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "The birthday party EventMaster planned for my daughter was
                  beyond our expectations. The theme, decorations, and
                  entertainment were all perfect for the occasion."
                </p>
                <div className="font-bold">Lisa Rodriguez</div>
                <div className="text-sm text-muted-foreground">
                  Birthday Party Client
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Plan Your Next Event?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
            Contact us today to discuss your ideas and let our team of experts
            help you create an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
