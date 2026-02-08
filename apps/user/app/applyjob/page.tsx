
import { Button } from "@repo/ui/components/ui/button"
import { Hospital, Infinity, Stethoscope, StethoscopeIcon } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Job Applications</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Thank you for your interest in our hospital staff position. Please fill out the form below to apply.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          <Link href="/applyjob/doc">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Stethoscope className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
                    <h3 className="text-xl font-semibold">Apply as Doctor</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Experiance : 2 years
                    <br />
                    Issued by :
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Button variant="link" className="group-hover:text-pink-900  group-hover:underline">
                    Apply Form
                  </Button>

                </div>
              </div>
            </div>
          </Link>

          <Link href="/applyjob/nurse">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <StethoscopeIcon className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
                    <h3 className="text-xl font-semibold">Apply For Nurse</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Experiance : 1 year
                    <br />
                    Issued by :
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Button variant="link" className="group-hover:text-pink-900  group-hover:underline">
                    Apply Form
                  </Button>

                </div>
              </div>
            </div>
          </Link>

          <Link href="/applyjob/tech">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Infinity className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-xl font-semibold">Apply for Technichian</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Experiance : 5 years
                    <br />
                    Issued by:
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Button variant="link" className="group-hover:text-pink-900  group-hover:underline">
                    Apply Form
                  </Button>

                </div>
              </div>
            </div>
          </Link>

          <Link href="/applyjob/receptionist">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Hospital className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-xl font-semibold">Apply for Receptionalist</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Experiance : 1 year
                    <br />
                    Issued by:
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Button variant="link" className="group-hover:text-pink-900  group-hover:underline">
                    Apply Form
                  </Button>

                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}






