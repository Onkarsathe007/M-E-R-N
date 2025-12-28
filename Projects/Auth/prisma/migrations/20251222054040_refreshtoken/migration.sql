/*
  Warnings:

  - You are about to drop the `main` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "main";

-- CreateTable
CREATE TABLE "Main" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refreshToken" TEXT,

    CONSTRAINT "Main_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Main_username_key" ON "Main"("username");
