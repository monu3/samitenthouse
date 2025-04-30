"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { MapPin, Phone, Mail, Clock, Search } from "lucide-react";

export default function OutletsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRegion, setFilterRegion] = useState("all");

  const outlets = [
    {
      id: 1,
      name: "EventMaster Downtown",
      image: "/placeholder.svg?height=300&width=400",
      address: "123 Main Street, Downtown, City, Country",
      phone: "+1 (555) 123-4567",
      email: "downtown@eventmaster.com",
      hours:
        "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
      region: "downtown",
      description:
        "Our flagship location in the heart of downtown, offering full-service event planning and consultations.",
    },
    {
      id: 2,
      name: "EventMaster Westside",
      image: "/placeholder.svg?height=300&width=400",
      address: "456 West Avenue, Westside, City, Country",
      phone: "+1 (555) 234-5678",
      email: "westside@eventmaster.com",
      hours:
        "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
      region: "west",
      description:
        "Specializing in outdoor and garden events, our Westside location features a beautiful showroom with sample setups.",
    },
    {
      id: 3,
      name: "EventMaster Eastside",
      image: "/placeholder.svg?height=300&width=400",
      address: "789 East Boulevard, Eastside, City, Country",
      phone: "+1 (555) 345-6789",
      email: "eastside@eventmaster.com",
      hours:
        "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
      region: "east",
      description:
        "Our Eastside location focuses on corporate events and features meeting spaces for client consultations.",
    },
    {
      id: 4,
      name: "EventMaster Northside",
      image: "/placeholder.svg?height=300&width=400",
      address: "101 North Road, Northside, City, Country",
      phone: "+1 (555) 456-7890",
      email: "northside@eventmaster.com",
      hours:
        "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: By appointment only\nSunday: Closed",
      region: "north",
      description:
        "Specializing in weddings and formal events, our Northside location includes a bridal consultation suite.",
    },
    {
      id: 5,
      name: "EventMaster Southside",
      image: "/placeholder.svg?height=300&width=400",
      address: "202 South Lane, Southside, City, Country",
      phone: "+1 (555) 567-8901",
      email: "southside@eventmaster.com",
      hours:
        "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed",
      region: "south",
      description:
        "Our newest location featuring a design studio for custom event decor and styling consultations.",
    },
    {
      id: 6,
      name: "EventMaster Suburban",
      image: "/placeholder.svg?height=300&width=400",
      address: "303 Suburban Circle, Suburbs, Country",
      phone: "+1 (555) 678-9012",
      email: "suburban@eventmaster.com",
      hours:
        "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
      region: "suburban",
      description:
        "Located in a convenient suburban area with ample parking and a large showroom for event inspiration.",
    },
  ];

  const filteredOutlets = outlets.filter((outlet) => {
    const matchesSearch =
      outlet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      outlet.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      outlet.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion =
      filterRegion === "all" || outlet.region === filterRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[250px]">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Our Outlets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Outlets
            </h1>
            <p className="text-xl text-white/90">
              Find an EventMaster location near you
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search outlets..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={filterRegion} onValueChange={setFilterRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="north">Northside</SelectItem>
                  <SelectItem value="south">Southside</SelectItem>
                  <SelectItem value="east">Eastside</SelectItem>
                  <SelectItem value="west">Westside</SelectItem>
                  <SelectItem value="suburban">Suburban</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Outlets Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredOutlets.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredOutlets.map((outlet) => (
                <Card key={outlet.id} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={outlet.image || "/placeholder.svg"}
                      alt={outlet.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{outlet.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {outlet.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                        <span>{outlet.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-primary" />
                        <span>{outlet.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-2 text-primary" />
                        <span>{outlet.email}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                        <div>
                          {outlet.hours.split("\n").map((line, i) => (
                            <p key={i} className="text-sm">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          outlet.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                    <Button asChild>
                      <a href={`mailto:${outlet.email}`}>Contact</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No outlets found</h3>
              <p className="text-muted-foreground mb-4">
                No outlets match your current search criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setFilterRegion("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us on the Map</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              View all our locations on the map to find the one closest to you.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-background rounded-lg h-[500px] flex items-center justify-center">
            <p className="text-muted-foreground">
              Interactive map will be embedded here
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
            Visit one of our outlets or contact us online to start planning your
            perfect event.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="/booking">Book Now</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
