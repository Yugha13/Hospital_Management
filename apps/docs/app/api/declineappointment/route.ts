import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export const POST = async( req : NextRequest ) => {
    const { id } : any = await req.json();
      try {
        const updatedApp = await prisma.appointment.update({
          where: { 
            id 
          },
          data: { 
            status : "DECLINED",
            docreason : "Haven't Accepted"
          },
          
        });
        // console.log(updatedApp);
        return NextResponse.json({ success: true, info : updatedApp });
      } catch (error) {
        // console.error("Error accepting appointment:", error);
        return NextResponse.json({success: false, err : "Failed to Decline the appointment"});
      }
  }
  