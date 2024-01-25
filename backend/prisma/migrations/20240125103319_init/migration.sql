/*
  Warnings:

  - You are about to drop the `ClassDayRoutine` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClassDayRoutine" DROP CONSTRAINT "ClassDayRoutine_ClassWeekRoutineId_fkey";

-- DropTable
DROP TABLE "ClassDayRoutine";

-- CreateTable
CREATE TABLE "DayRoutine" (
    "id" TEXT NOT NULL,
    "weekRoutineId" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "subject1" TEXT NOT NULL,
    "subject2" TEXT NOT NULL,
    "subject3" TEXT NOT NULL,

    CONSTRAINT "DayRoutine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DayRoutine" ADD CONSTRAINT "DayRoutine_weekRoutineId_fkey" FOREIGN KEY ("weekRoutineId") REFERENCES "ClassWeekRoutine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
