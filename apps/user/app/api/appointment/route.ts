import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { userAppointment } from "@repo/zod";

const prisma = new PrismaClient();

export const GET = async ( req : NextRequest ) => {
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


export const POST = async (req : NextRequest) => {
    const { getUser } = getKindeServerSession();
    const { email } = await getUser() as any;
    const datas = await req.json();
    // console.log(datas);
    
    const isVer = userAppointment.safeParse(datas);
    console.log(isVer.error?.formErrors);
    // console.log(email);
    
    const docemail = datas.doctorEmail;
    datas.doctorEmail = undefined;
    if(!isVer.success) return NextResponse.json({mes: isVer.error.formErrors})
    try {
        await prisma.doctor.update({
            where: {
                email: docemail
            },
            data: {
                appointments: {
                    create: {
                    ...datas, date: new Date(datas.date), email
                    
                    }
                }
            },
            
            });
        return NextResponse.json({ message: "appointment booked" }, { status: 201 });
    }catch (e) {
        // console.log(e);
        return NextResponse.json({ error: "An error occurred while creating the user" }, { status: 500 });
    } 
}