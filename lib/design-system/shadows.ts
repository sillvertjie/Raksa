export const shadows = {
  none: "shadow-none",

  card: "shadow-sm",

  elevated: "shadow-md",

  floating: "shadow-lg",

  aiGlow:
    "shadow-[0_0_30px_rgba(99,102,241,0.35)]",
} as const;

export type ShadowToken =
  keyof typeof shadows;