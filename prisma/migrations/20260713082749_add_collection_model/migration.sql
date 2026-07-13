-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "parentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
