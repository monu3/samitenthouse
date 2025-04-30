"use client";

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "../components/ui/button";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Events" },
    { id: "weddings", name: "Weddings" },
    { id: "corporate", name: "Corporate" },
    { id: "birthdays", name: "Birthdays" },
    { id: "social", name: "Social Events" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Wedding reception",
      category: "weddings",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Corporate conference",
      category: "corporate",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Birthday celebration",
      category: "birthdays",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Wedding ceremony",
      category: "weddings",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Corporate team building",
      category: "corporate",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Gala dinner",
      category: "social",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Wedding decor",
      category: "weddings",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Product launch",
      category: "corporate",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Children's birthday",
      category: "birthdays",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Charity event",
      category: "social",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Wedding reception",
      category: "weddings",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Corporate awards",
      category: "corporate",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Event Gallery
            </h1>
            <p className="text-xl text-white/90">
              Browse through our portfolio of successful events
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Work</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Take a look at some of the amazing events we've had the privilege
              to organize and manage.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryImages
                    .filter(
                      (image) =>
                        category.id === "all" || image.category === category.id
                    )
                    .map((image) => (
                      <Dialog key={image.id}>
                        <DialogTrigger asChild>
                          <div
                            className="relative group cursor-pointer overflow-hidden rounded-lg"
                            onClick={() => setSelectedImage(image.src)}
                          >
                            <img
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                                <p className="font-medium">{image.alt}</p>
                                <p className="text-sm">Click to enlarge</p>
                              </div>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                          <div className="relative">
                            <img
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              className="w-full h-auto max-h-[80vh] object-contain"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                              onClick={() => setSelectedImage(null)}
                            >
                              <X className="h-5 w-5" />
                              <span className="sr-only">Close</span>
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Your Own Memorable Event?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
            Let us help you plan and execute an event that will be remembered
            for years to come.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/booking">Book Now</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
