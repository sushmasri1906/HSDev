/*
  Warnings:

  - You are about to drop the column `date` on the `MeetingRequest` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `MeetingRequest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."MeetingRequest" DROP COLUMN "date",
DROP COLUMN "time";
