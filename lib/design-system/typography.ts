export const typography = {
  heading: "text-xl font-bold",

  sectionTitle: "text-lg font-semibold",

  body: "text-sm",

  muted: "text-gray-700",
} as const;

export type TypographyToken = keyof typeof typography;