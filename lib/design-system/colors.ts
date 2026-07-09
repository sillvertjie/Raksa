export const colors = {
  primary: "primary",
  secondary: "secondary",
  background: "background",
  foreground: "foreground",

  muted: "muted",
  mutedForeground: "muted-foreground",

  accent: "accent",
  accentForeground: "accent-foreground",

  border: "border",
  input: "input",
  ring: "ring",

  destructive: "destructive",
  destructiveForeground: "destructive-foreground",

  card: "card",
  cardForeground: "card-foreground",

  popover: "popover",
  popoverForeground: "popover-foreground",
} as const;

export type ColorToken = keyof typeof colors;