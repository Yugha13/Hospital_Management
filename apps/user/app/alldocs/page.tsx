"use client"
import { Input } from "@repo/ui/components/ui/input"
import { Card, CardContent } from "@repo/ui/components/ui/card"
import { Avatar, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { Button } from "@repo/ui/components/ui/button"
import { useEffect, useState } from "react"
import axios from "axios"
import { StarIcon, ArrowUpIcon } from "lucide-react"
import Link from "next/link"

const DocCard = ({ info }: any) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <Avatar className="w-10 h-10 mr-3">
            <AvatarFallback>{info.name[0] + info.name[1]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{info.name}</h3>
            <p className="text-muted-foreground">Specialist : {info.specialist}</p>
            <p className="text-muted-foreground">Hospital : {info.doctor.hosName}</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex items-center text-yellow-500">
            <StarIcon className="w-5 h-5" />
            <StarIcon className="w-5 h-5" />
            <StarIcon className="w-5 h-5" />
            <StarIcon className="w-5 h-5" />
            <StarIcon className="w-5 h-5 text-muted-foreground" />
          </div>
          <span className="text-muted-foreground ml-2">(4.5)</span>
        </div>
        <Link href={`/alldocs/${info.doctor.id}`}>
          <Button size="sm" className="w-full">
            Book Appointment
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default function ViewDoc() {
  const [info, setInfo] = useState([] as any);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [viewAllClicked, setViewAllClicked] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/alldocs");
      const docData = res.data.info;
      const sortedData = docData.sort((a: any, b: any) => 
        a.name.localeCompare(b.name)
      );

      setInfo(sortedData);
    })()
  }, [])

  const filteredDocs = info.filter((doc: any) => {
    const { name, specialist, doctor } = doc;
    const hosName = doctor.hosName.toLowerCase();
    const lowerCaseName = name.toLowerCase();
    const lowerCaseSpecialist = specialist.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    return (
      lowerCaseName.includes(lowerCaseSearchTerm) ||
      lowerCaseSpecialist.includes(lowerCaseSearchTerm) ||
      hosName.includes(lowerCaseSearchTerm)
    );
  });

  const docsToDisplay = showAll ? info : filteredDocs;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Find Doctors From Every Hospital</h1>
          <p className="text-muted-foreground">Search and book appointments with top-rated doctors.</p>
        </div>
        <span
          onClick={() => {
            setShowAll(true);
            setViewAllClicked(true);
          }}
          className="text-blue-600 cursor-pointer hover:underline flex items-center"
        >
          {viewAllClicked ? <ArrowUpIcon className="w-5 h-5 ml-1" /> : "View All Doctors"}
        </span>
      </div>
      <div className="mb-8">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name, specialty, or hospital name"
            className="w-full rounded-lg bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {docsToDisplay.slice(0, showAll ? docsToDisplay.length : 9)?.map((i: any) => (
          <DocCard key={i.doctor.id} info={i} />
        ))}
      </div>
      {viewAllClicked && (
        <div className="fixed bottom-2 right-2">
          <span
            onClick={scrollToTop}
            className="text-blue-600 cursor-pointer hover:underline flex items-center"
          >
            <ArrowUpIcon className="w-8 h-8" />
          </span>
        </div>
      )}
    </div>
  )
}
