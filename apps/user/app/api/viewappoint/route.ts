import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const prisma = new PrismaClient();

export const GET = async ( req : NextRequest ) => {
    const { getUser } = getKindeServerSession();
    const { email } = await getUser() as any;
    // console.log("email-",email);
    
    try {
        const appointments = await prisma.appointment.findMany({
            where : {
                status: {
                    in: ["ACCEPTED", "DECLINED"],
                }, 
            },
            orderBy: [
                {date: 'asc'}, {time: 'asc'}
            ],
            include : {
                doctor : {
                    select : {
                        doctorinfo : true
                    }
                }
            }
        });
        // console.log(appointments);
        return NextResponse.json({info:appointments})
    } catch (e) {
        console.log(e);
        return NextResponse.json({error : e})
    }
}