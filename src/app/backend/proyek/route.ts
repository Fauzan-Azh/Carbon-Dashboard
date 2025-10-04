import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { namaProyek, deskripsi, jenisPengguna, durasi } = body;

    const created = await prisma.proyek.create({
      data: {
        namaProyek,
        deskripsi,
        jenisPengguna,
        durasi,
      },
    });

    return NextResponse.json({ message: 'Data berhasil disimpan', data: created });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const items = await prisma.proyek.findMany();
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
