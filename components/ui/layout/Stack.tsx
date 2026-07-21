import React from "react";

const gapMap = {
  2: "gap-2",
  4: "gap-4",
  6: "gap-6",
} as const;

type Props =
  React.HTMLAttributes<HTMLDivElement> & {
    gap?: keyof typeof gapMap;
  };

export default function Stack({
  gap = 4,
  className,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`
        flex
        flex-col
        ${gapMap[gap]}
        ${className ?? ""}
      `}
    />
  );
}