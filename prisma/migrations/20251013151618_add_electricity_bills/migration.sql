/*
  Warnings:

  - You are about to drop the `Proyek` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Proyek";

-- CreateTable
CREATE TABLE "ElectricityBill" (
    "id" SERIAL NOT NULL,
    "panelName" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "kWhAmount" INTEGER NOT NULL,
    "electricityCost" DOUBLE PRECISION NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ElectricityBill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ElectricityBill_month_idx" ON "ElectricityBill"("month");
