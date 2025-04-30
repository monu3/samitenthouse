"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Calendar } from "../components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { cn } from "../lib/utils"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    location: "",
    budget: "",
    additionalInfo: "",
    packageType: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    if (selectedDate) {
      setFormData((prev) => ({ ...prev, eventDate: format(selectedDate, "PPP") }))
    }
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    nextStep()
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[250px]">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Book Your Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Event</h1>
            <p className="text-xl text-white/90">Fill out the form below to start planning your perfect event</p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-2">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium",
                      step === stepNumber
                        ? "bg-primary text-primary-foreground"
                        : step > stepNumber
                          ? "bg-primary/80 text-primary-foreground"
                          : "bg-muted text-muted-foreground",
                    )}
                  >
                    {step > stepNumber ? <CheckCircle className="h-5 w-5" /> : stepNumber}
                  </div>
                ))}
              </div>
              <div className="relative h-2 bg-muted rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${(step - 1) * 33.33}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>Event Details</span>
                <span>Package Selection</span>
                <span>Personal Info</span>
                <span>Confirmation</span>
              </div>
            </div>

            {/* Step 1: Event Details */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                  <CardDescription>Tell us about the event you're planning</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("eventType", value)}
                      value={formData.eventType}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="social">Social Gathering</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={handleDateChange}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guestCount">Estimated Guest Count</Label>
                    <Input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      placeholder="Number of guests"
                      value={formData.guestCount}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Event Location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="City, State or Venue (if known)"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={(value) => handleSelectChange("budget", value)} value={formData.budget}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                        <SelectItem value="20k-50k">$20,000 - $50,000</SelectItem>
                        <SelectItem value="over50k">Over $50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      placeholder="Tell us more about your event vision, special requirements, etc."
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={nextStep}>Next Step</Button>
                </CardFooter>
              </Card>
            )}

            {/* Step 2: Package Selection */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Select a Package</CardTitle>
                  <CardDescription>Choose the package that best fits your needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={formData.packageType}
                    onValueChange={(value) => handleSelectChange("packageType", value)}
                    className="space-y-4"
                  >
                    <div className="flex items-start space-x-3 border p-4 rounded-md hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="essential" id="essential" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="essential" className="text-lg font-medium cursor-pointer">
                          Essential Package
                        </Label>
                        <p className="text-muted-foreground">Basic planning assistance for smaller events</p>
                        <p className="font-medium mt-2">Starting at $2,500</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 border p-4 rounded-md hover:bg-muted/50 cursor-pointer border-primary bg-primary/5">
                      <RadioGroupItem value="premium" id="premium" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <Label htmlFor="premium" className="text-lg font-medium cursor-pointer">
                            Premium Package
                          </Label>
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                            Most Popular
                          </span>
                        </div>
                        <p className="text-muted-foreground">Comprehensive planning for medium-sized events</p>
                        <p className="font-medium mt-2">Starting at $5,000</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 border p-4 rounded-md hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="luxury" id="luxury" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="luxury" className="text-lg font-medium cursor-pointer">
                          Luxury Package
                        </Label>
                        <p className="text-muted-foreground">All-inclusive planning for large or complex events</p>
                        <p className="font-medium mt-2">Starting at $8,500</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 border p-4 rounded-md hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="custom" id="custom" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="custom" className="text-lg font-medium cursor-pointer">
                          Custom Package
                        </Label>
                        <p className="text-muted-foreground">Tailored to your specific needs and requirements</p>
                        <p className="font-medium mt-2">Price varies</p>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Previous
                  </Button>
                  <Button onClick={nextStep}>Next Step</Button>
                </CardFooter>
              </Card>
            )}

            {/* Step 3: Personal Information */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Tell us how to reach you</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        By submitting this form, you agree to our{" "}
                        <a href="#" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                    <Button type="submit">Submit Booking</Button>
                  </CardFooter>
                </Card>
              </form>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Booking Submitted!</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <p className="text-lg mb-4">Thank you for your booking request, {formData.name}!</p>
                  <p className="mb-6 text-muted-foreground">
                    We've received your information and will contact you within 24 hours to discuss your event in more
                    detail.
                  </p>
                  <div className="bg-muted p-4 rounded-md text-left mb-6">
                    <h3 className="font-medium mb-2">Booking Summary:</h3>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <span className="font-medium">Event Type:</span> {formData.eventType}
                      </li>
                      <li>
                        <span className="font-medium">Date:</span> {formData.eventDate}
                      </li>
                      <li>
                        <span className="font-medium">Package:</span> {formData.packageType}
                      </li>
                      <li>
                        <span className="font-medium">Guests:</span> {formData.guestCount}
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A confirmation email has been sent to {formData.email}
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button asChild>
                    <a href="/">Return to Home</a>
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
