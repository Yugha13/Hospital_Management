"use client"
import Link from "next/link"
import { Button } from "@repo/ui/components/ui/button"
import { AppWindow, ArrowRightIcon, Edit, FacebookIcon, FormInput, FormInputIcon, InstagramIcon, Lock, Pill, Stethoscope, TwitterIcon, Workflow } from "lucide-react"
import Review from "./Review"
import Hospitals from "./ColabratedHospital"



export default function Component() {

  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 ">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 ">
              <div className="flex flex-col items-start gap-4 ">
                <h1 className="text-3xl md:text-4xl font-bold">
                ALL HEALTH,<br/> NO EXCUSES...
                </h1>
                <p className="text-muted-foreground text-lg mt-1">
                  Welcome to XYZ, where compassionate care meets advanced medical expertise. We are dedicated to providing exceptional healthcare services to ensure the well-being and comfort of every patient.
                </p>
                <p className="text-muted-foreground text-lg mt-1">
                Experience compassionate care and cutting-edge medical treatments at XYZ, where your health and well-being are our top priorities
                </p>
                <Link href="/alldocs">
                  <Button>Book Appointment</Button>
                </Link>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://cdn.dribbble.com/users/976984/screenshots/3727819/hospital.gif"
                  width={200}
                  height={100}
                  className="w-full h-full object-contain"
                  style={{ aspectRatio: "200/100", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-background rounded-lg shadow-lg p-6 relative">
                <div className="flex items-center gap-4 mb-4 ">
                  <div className="bg-primary rounded-full p-2">
                    <Pill className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Pills Refill Request</h3>
                </div>
                <p className="text-muted-foreground">
                Conveniently request prescription refills online, and have your medications ready for pickup or delivery without the need for an in-person visit.
                </p>
                <div className="py-3">
                <Link
                  href="/refillpills"
                  className="text-primary font-medium mt-4 inline-flex items-center gap-1 absolute bottom-4"
                  prefetch={false}
                  >
                  Request for Refill
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-lg p-6 relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-full p-2">
                    <AppWindow className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Appointment</h3>
                </div>
                <p className="text-muted-foreground">
                Book your appointment with our experienced doctors today and receive personalized, professional care at your convenience.
                </p>
                <div className="py-3">
                <Link
                  href="/alldocs"
                  className="text-primary font-medium mt-4 inline-flex items-center gap-1 absolute bottom-4"
                  prefetch={false}
                  >
                  Book Appointment
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-lg p-6 relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-full p-2">
                    <Stethoscope className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Consultation</h3>
                </div>
                <p className="text-muted-foreground">
                  During your consultation, our doctors will carefully listen to your concerns, review your medical history, and provide personalized advice and treatment options tailored to your health needs.
                </p>
                <div className="py-3">
                <Link
                  href="/chat"
                  className="text-primary font-medium mt-4 inline-flex items-center gap-1 absolute bottom-4"
                  prefetch={false}
                  >
                  Consult the Doctors
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://media.licdn.com/dms/image/C5612AQHfi6nsfnBalg/article-cover_image-shrink_720_1280/0/1520172399307?e=2147483647&v=beta&t=-SImFWqvA8ZJU7NKxQvKWGKnz9G6GHbC2wbBN8bLroY"
                  width={600}
                  height={400}
                  alt="Trendy Looks"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <h2 className="text-2xl md:text-3xl font-bold">Explore now</h2>
                <p className="text-muted-foreground text-lg">
                  Your Life is in our hand. Be Safe and celebrate being Healthy.
                </p>
                <div className="grid grid-cols-2 gap-4">
                <Link
                    href="/alldocs"
                    className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-start gap-2 hover:bg-muted transition-colors"
                    prefetch={false}
                  >
                    <div className="bg-primary rounded-full p-2">
                      <FormInput className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Meet Our Doctors:</h3>
                    <p className="text-muted-foreground text-sm">
                      Experience compassionate care from our experienced physicians.
                    </p>
                  </Link>
                  
                  <Link
                    href="/applyjob"
                    className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-start gap-2 hover:bg-muted transition-colors"
                    prefetch={false}
                  >
                    <div className="bg-primary rounded-full p-2">
                      <Workflow className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Career Opportunities</h3>
                    <p className="text-muted-foreground text-sm">
                      Job oppertunity for Doctors and Hospital staff.
                    </p>
                  </Link>
                  <Link
                    href="/addreview"
                    className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-start gap-2 hover:bg-muted transition-colors"
                    prefetch={false}
                  >
                    <div className="bg-primary rounded-full p-2">
                      <Edit className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Reviews</h3>
                    <p className="text-muted-foreground text-sm">
                      Give Your reviews here...
                    </p>
                  </Link>
                  
                  <div
                    className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-start gap-2 hover:bg-muted transition-colors"
                    
                  >
                    <div className="bg-primary rounded-full p-2">
                      <Lock className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Security & Privacy Features</h3>
                    <p className="text-muted-foreground text-sm">
                    Ensure patient data is protected through encryption and comply with certain regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Hospitals/>
        <Review/>
      </main>
      <footer className="bg-muted py-8 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Company</h4>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                About Us
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                Careers
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">For You</h4>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                Appointment
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                prescription
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                Pill Request
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Resources</h4>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                Blog
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                FAQs
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                Tutorials
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex gap-2">
                <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  <InstagramIcon className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  <TwitterIcon className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  <FacebookIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
