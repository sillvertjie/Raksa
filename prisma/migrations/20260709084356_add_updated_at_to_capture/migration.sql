-- AlterTable
ALTER TABLE "Capture"
ADD COLUMN "updatedAt" TIMESTAMP(3);

-- Backfill existing rows
UPDATE "Capture"
SET "updatedAt" = NOW()
WHERE "updatedAt" IS NULL;

-- Make column required
ALTER TABLE "Capture"
ALTER COLUMN "updatedAt" SET NOT NULL;