import { colors } from "./colors";

export const typography = {
  heading: `text-xl font-bold ${colors.textPrimary}`,

  sectionTitle: `text-lg font-semibold ${colors.textPrimary}`,

  body: `text-sm ${colors.textSecondary}`,

  muted: colors.textMuted,

  statistic: `text-3xl font-bold ${colors.textPrimary}`,
} as const;

export type TypographyToken = keyof typeof typography;