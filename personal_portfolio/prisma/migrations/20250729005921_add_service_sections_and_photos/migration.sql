/*
  Warnings:

  - You are about to drop the column `landingpageId` on the `Service` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_landingpageId_fkey";

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "serviceId" TEXT,
ALTER COLUMN "landingpageId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "landingpageId",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "serviceSectionId" TEXT;

-- CreateTable
CREATE TABLE "ServiceSection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "landingpageId" TEXT NOT NULL,

    CONSTRAINT "ServiceSection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSection" ADD CONSTRAINT "ServiceSection_landingpageId_fkey" FOREIGN KEY ("landingpageId") REFERENCES "LandingPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceSectionId_fkey" FOREIGN KEY ("serviceSectionId") REFERENCES "ServiceSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
