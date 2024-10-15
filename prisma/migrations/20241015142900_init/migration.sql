-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
