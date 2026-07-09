export const typography = {
  h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold tracking-tight",
  h4: "text-xl font-semibold",

  bodyLg: "text-lg leading-8",
  body: "text-base leading-7",
  bodySm: "text-sm leading-6",

  caption: "text-xs leading-5",

  fontSans: "font-sans",
  fontMono: "font-mono",
} as const;

export type TypographyToken = keyof typeof typography;