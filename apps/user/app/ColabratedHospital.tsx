"use client"
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react"

const HosCard = ({info}:any) => {
    return (
        <div className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
            <Link href={info.hospitalUrl} className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Hospital</span>
            </Link>
            <img
              src={info.hospitalImg}
              width={400}
              height={300}
              alt="loading"
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Hospital : {info.name}</h3>
              <p className="text-sm text-muted-foreground">Location : {info.location}</p>
            </div>
        </div>  
    )
}


export default function Hospitals() {
    const [hosInfo, sethosInfo] = useState([] as any);

    useEffect(() => {
        (async() => {
          try{
            const {data} = await axios.get("/api/hosinfo");
            sethosInfo(data.info);
            // console.log(data.info);
          } catch(e) {
            //pass
          }
        })()
      }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"> Collabrated Hospitals </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We collaborate with leading hospitals to provide the best healthcare services to our Users.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
           {hosInfo?.map((info:any)=>(<HosCard info = {info}/>))}     
        </div>
      </div>
    </section>
  )
}