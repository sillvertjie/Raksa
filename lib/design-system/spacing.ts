export const spacing = {
  pageX: "px-6",
  pageY: "py-8",

  sectionGap: "mt-10",
  blockGap: "mt-6",
  contentGap: "gap-4",
  itemGap: "gap-2",

  cardPadding: "p-6",
  cardPaddingSm: "p-4",

  input: "p-3",

  buttonX: "px-4",
  buttonY: "py-2",
} as const;

export type SpacingToken = keyof typeof spacing;