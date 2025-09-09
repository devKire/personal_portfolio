/*
  Warnings:

  - You are about to drop the column `serviceId` on the `Photo` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `serviceSectionId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the `ServiceSection` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `landingpageId` on table `Photo` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `landingpageId` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_serviceSectionId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceSection" DROP CONSTRAINT "ServiceSection_landingpageId_fkey";

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "serviceId",
ALTER COLUMN "landingpageId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "description",
DROP COLUMN "serviceSectionId",
ADD COLUMN     "landingpageId" TEXT NOT NULL;

-- DropTable
DROP TABLE "ServiceSection";

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_landingpageId_fkey" FOREIGN KEY ("landingpageId") REFERENCES "LandingPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
