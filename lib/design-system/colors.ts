export const colors = {
  primary: "primary",
  secondary: "secondary",

  background: "background",
  foreground: "foreground",

  card: "card",
  cardForeground: "card-foreground",

  popover: "popover",
  popoverForeground: "popover-foreground",

  muted: "muted",
  mutedForeground: "muted-foreground",

  accent: "accent",
  accentForeground: "accent-foreground",

  border: "border-gray-200",
  input: "input",
  ring: "ring",

  destructive: "destructive",
  destructiveForeground: "destructive-foreground",

  textPrimary: "text-gray-900",
  textSecondary: "text-gray-700",
  textMuted: "text-gray-500",

  surface: "bg-white",
  surfaceSecondary: "bg-gray-50",

  buttonPrimary: "bg-black text-white",
} as const;

export type ColorToken = keyof typeof colors;