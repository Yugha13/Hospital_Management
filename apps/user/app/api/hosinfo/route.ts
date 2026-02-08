import { PrismaClient } from "@repo/database";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();


export const GET = async () => {

    try {
        const hosData = await prisma.hospital.findMany({});
        // console.log(docData);
        return NextResponse.json({ info: hosData })
    } catch (e) {
        // console.log(e);
        return NextResponse.json({ e });

    }
}