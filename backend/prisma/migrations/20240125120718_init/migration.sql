/*
  Warnings:

  - You are about to drop the `ClassWeekRoutine` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DayRoutine" DROP CONSTRAINT "DayRoutine_weekRoutineId_fkey";

-- DropTable
DROP TABLE "ClassWeekRoutine";

-- CreateTable
CREATE TABLE "WeekRoutine" (
    "id" TEXT NOT NULL,

    CONSTRAINT "WeekRoutine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DayRoutine" ADD CONSTRAINT "DayRoutine_weekRoutineId_fkey" FOREIGN KEY ("weekRoutineId") REFERENCES "WeekRoutine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
