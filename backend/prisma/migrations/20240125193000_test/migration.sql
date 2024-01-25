/*
  Warnings:

  - Added the required column `faculty` to the `WeekRoutine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WeekRoutine" ADD COLUMN     "faculty" TEXT NOT NULL;
