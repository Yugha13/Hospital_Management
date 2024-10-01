import { Button } from "@repo/ui/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { CalendarIcon } from "lucide-react"
import Link  from "next/link"
import { useEffect, useState } from "react"
import { format } from 'date-fns';


const Content = ({ appoint }: any) => {
  const month = format(new Date(appoint.date), "dd MMMM yyyy");
  return (
    <CardContent>
      <div className="grid gap-4">
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <div className="rounded-full bg-primary p-2 text-primary-foreground">
            <CalendarIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="font-medium">Appointment with Dr.{appoint.doctor.doctorinfo.name}</div>
            <div className="text-sm text-muted-foreground">{month}</div>
            <div className="text-sm text-muted-foreground">Time: {appoint.time}</div>
            <div className="text-sm text-muted-foreground">Reason: {appoint.reason}</div>
          </div>
        </div>
      </div>
    </CardContent>
  );
};

const Appointment = ({ appoint }: any) => {
  const [upappoint, setupappoint] = useState<any[]>([]);

  useEffect(() => {
    if (Array.isArray(appoint)) {
      const now = new Date();
      const upcomingAppointments = appoint
        .filter((i: any) => new Date(i.date) > now)
        .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
      setupappoint(upcomingAppointments);
    }
  }, [appoint]);

  
  return (
      <Card className="w-full">
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
              {upappoint.slice(0,3).map((i:any)=> <Content appoint = {i}/>)}
            <CardFooter className="flex justify-between ">
              <Link href="/appointhist" target="_blank" className="text-sm font-medium" prefetch ={false}>
                View all appointments
              </Link>
              
              <Link href="/alldocs">
                  <Button>Book Appointment</Button>
              </Link>
            </CardFooter>
          </Card>
  )
}


export default Appointment