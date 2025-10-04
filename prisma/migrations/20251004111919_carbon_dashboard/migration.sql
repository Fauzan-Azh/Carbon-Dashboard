-- CreateTable
CREATE TABLE "Proyek" (
    "id" SERIAL NOT NULL,
    "namaProyek" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "jenisPengguna" TEXT NOT NULL,
    "durasi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Proyek_pkey" PRIMARY KEY ("id")
);
