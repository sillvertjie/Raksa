export const density = {
  compact: {
    card: "p-3",
    section: "space-y-6",
    gap: "gap-2",
  },

  comfortable: {
    card: "p-4",
    section: "space-y-8",
    gap: "gap-4",
  },

  spacious: {
    card: "p-6",
    section: "space-y-10",
    gap: "gap-6",
  },
} as const;

export type DensityToken =
  keyof typeof density;