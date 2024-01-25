/*
  Warnings:

  - Made the column `profileId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "profileId" SET NOT NULL;

-- CreateTable
CREATE TABLE "ClassDayRoutine" (
    "id" TEXT NOT NULL,
    "ClassWeekRoutineId" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "subject1" TEXT NOT NULL,
    "subject2" TEXT NOT NULL,
    "subject3" TEXT NOT NULL,

    CONSTRAINT "ClassDayRoutine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassWeekRoutine" (
    "id" TEXT NOT NULL,

    CONSTRAINT "ClassWeekRoutine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassDayRoutine" ADD CONSTRAINT "ClassDayRoutine_ClassWeekRoutineId_fkey" FOREIGN KEY ("ClassWeekRoutineId") REFERENCES "ClassWeekRoutine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
