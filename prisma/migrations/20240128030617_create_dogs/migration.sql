-- CreateTable
CREATE TABLE "Dog" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "ownerId" INTEGER,

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);
