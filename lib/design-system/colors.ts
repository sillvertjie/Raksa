// design-system/colors.ts

export const colors = {
  // Brand / Primary Colors
  primary: "bg-raksa-primary",

  primaryForeground:
    "text-slate-950",

  primaryText:
    "text-raksa-primary",

  // Base Layout & Surfaces
  background:
    "bg-raksa-background",

  foreground:
    "text-raksa-text-primary",

  card:
    "bg-raksa-surface",

  cardForeground:
    "text-raksa-text-primary",

  surface:
    "bg-raksa-surface",

  surfaceSecondary:
    "bg-raksa-surface-muted",

   // Borders & Dividers

  border:
    "border-raksa-border",

  ring:
    "ring-raksa-primary",

  // Typography Tokens
  textPrimary:
    "text-raksa-text-primary",

  textSecondary:
    "text-raksa-text-secondary",

  textMuted:
    "text-raksa-text-muted",

  // Muted States
  muted:
    "bg-raksa-surface-muted",

  mutedForeground:
    "text-raksa-text-secondary",

  // Input & Form Elements
  input:
    "bg-raksa-surface text-raksa-text-primary placeholder:text-raksa-text-secondary",

  // Feedback / States

  danger:
    "text-raksa-danger",

  overlay:
    "bg-raksa-overlay",

  destructive:
    "bg-raksa-danger",

  destructiveForeground:
    "text-white",

  // Component Specific Wrappers

  buttonPrimary:
    "bg-raksa-primary text-slate-950 hover:bg-raksa-primary/90 font-medium",

  buttonSecondary:
    "bg-raksa-surface-muted text-raksa-text-primary hover:bg-raksa-surface",
} as const;

export type ColorToken =
  keyof typeof colors;