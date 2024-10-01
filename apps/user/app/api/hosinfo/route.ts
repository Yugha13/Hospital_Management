import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();


export const GET = async (req:NextRequest) => {

    try {
        const hosData = await prisma.hospital.findMany({});
        // console.log(docData);
        return NextResponse.json({info: hosData})
    } catch(e) {
        // console.log(e);
        return NextResponse.json({e});
        
    }
}