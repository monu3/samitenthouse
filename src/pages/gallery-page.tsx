"use client";

import { useState, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "../components/ui/button";

const BACKEND_URL = "http://localhost:5000";

export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([]);
  const [category, setCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Events" },
    { id: "weddings", name: "Weddings" },
    { id: "decoration", name: "Decoration" },
    { id: "pasni", name: "Pasni" },
    { id: "school", name: "School Events" },
  ];

  useEffect(() => {
    const fetchImages = async () => {
      if (category === "all") {
        const allFolders = ["weddings", "decoration", "pasni", "school"];
        const allImages = await Promise.all(
          allFolders.map(async (folder) => {
            try {
              const res = await fetch(
                `${BACKEND_URL}/api/gallery?folder=${folder}`
              );
              if (!res.ok) {
                const text = await res.text();
                console.error(
                  `Error fetching folder ${folder}:`,
                  res.status,
                  text
                );
                return [];
              }
              return await res.json();
            } catch (err) {
              console.error(`Failed to fetch folder ${folder}:`, err);
              return [];
            }
          })
        );
        setImages(allImages.flat());
      } else {
        try {
          const res = await fetch(
            `${BACKEND_URL}/api/gallery?folder=${category}`
          );
          if (!res.ok) {
            const text = await res.text();
            console.error(`Error fetching ${category}:`, res.status, text);
            setImages([]);
            return;
          }
          const data = await res.json();
          setImages(data);
        } catch (err) {
          console.error(`Fetch error:`, err);
          setImages([]);
        }
      }
    };

    fetchImages();
  }, [category]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="src/assets/heroimage.png"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "cursive" }}
            >
              Our Event Gallery
            </h1>
            <p
              className="text-xl text-white/90"
              style={{ fontFamily: "cursive" }}
            >
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

          <Tabs
            defaultValue="all"
            value={category}
            onValueChange={setCategory}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <Dialog key={index}>
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
