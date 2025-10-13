import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


// CREATE Electricity Bill
export async function POST(req: Request) {
  try {
    const { panelName, month, kWhAmount, electricityCost, paymentStatus } = await req.json();

    if (!panelName || !month || !kWhAmount || !electricityCost || !paymentStatus) {
      return NextResponse.json({ error: "Semua field wajib diisi" }, { status: 400 });
    }

    const bill = await prisma.electricityBill.create({
      data: {
        panelName,
        month,
        kWhAmount: parseInt(kWhAmount),
        electricityCost: parseInt(electricityCost),
        paymentStatus,
      },
    });

    return NextResponse.json({ success: true, data: bill }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal menambahkan data" }, { status: 500 });
  }
}

// GET Electricity Bills
export async function GET() {
  try {
    const bills = await prisma.electricityBill.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(bills, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}
