export const layout = {
  container: "mx-auto w-full max-w-7xl",
  content: "mx-auto w-full max-w-5xl",
  reading: "mx-auto w-full max-w-3xl",

  page: "min-h-screen",
  section: "w-full",

  centered: "flex items-center justify-center",
} as const;

export type LayoutToken = keyof typeof layout;