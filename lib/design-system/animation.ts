export const animation = {
  fast: "duration-150",
  normal: "duration-200",
  slow: "duration-300",

  defaultEase: "ease-in-out",
  emphasizedEase: "ease-out",
} as const;

export type AnimationToken = keyof typeof animation;