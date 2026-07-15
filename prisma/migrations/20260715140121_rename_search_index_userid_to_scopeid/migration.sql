-- Rename existing user scope column into workspace scope column
ALTER TABLE "SearchIndexDocument"
RENAME COLUMN "userId" TO "scopeId";

-- Rename index
DROP INDEX "SearchIndexDocument_userId_idx";

CREATE INDEX "SearchIndexDocument_scopeId_idx"
ON "SearchIndexDocument"("scopeId");