-- DEV-205
-- PostgreSQL Full Text Search optimization

ALTER TABLE "SearchIndexDocument"
ADD COLUMN "search_vector" tsvector
GENERATED ALWAYS AS (
  to_tsvector(
    'simple',
    coalesce("title", '') || ' ' || coalesce("content", '')
  )
) STORED;


CREATE INDEX "SearchIndexDocument_search_vector_idx"
ON "SearchIndexDocument"
USING GIN ("search_vector");