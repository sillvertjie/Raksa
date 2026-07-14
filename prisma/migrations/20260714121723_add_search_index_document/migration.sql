-- CreateTable
CREATE TABLE "SearchIndexDocument" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SearchIndexDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SearchIndexDocument_userId_idx" ON "SearchIndexDocument"("userId");

-- CreateIndex
CREATE INDEX "SearchIndexDocument_source_idx" ON "SearchIndexDocument"("source");
