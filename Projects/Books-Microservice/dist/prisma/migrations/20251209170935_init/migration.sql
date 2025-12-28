-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(15) NOT NULL,
    "author" VARCHAR(15) NOT NULL,
    "year" INTEGER NOT NULL DEFAULT 2025,
    "is_available" BOOLEAN NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_id_key" ON "Book"("id");
