"use client"

import Appointment from "./Appointment"
import Message from "./Message"
import Notifiaction from "./Notifiaction"
import Records from "./Records"
import { useEffect, useState } from "react"
import axios from "axios"



export default function Component() {
 const [appoint, setappoint] = useState([] as any);
 

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get("/api/appointment");
        setappoint(data.info);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);
  // console.log("check ",appoint);
  
  return (
    <div className="flex flex-col min-h-[80vh] bg-background mt-20">
      <main className="lg:flex w-full gap-4 p-4 h-fit justify-between grid grid-cols-1 md:grid-cols-2"> 
        <Appointment appoint = {appoint}/>
        <Message/>
        <Notifiaction appoint = {appoint}/>
      </main>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 h-fit">
        <Records/>
      </main>
    </div>
  )
}