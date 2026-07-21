import React from "react";

import {
  colors,
  radius,
  shadows,
  spacing,
} from "@/lib/design-system";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Card({
  className,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`
        ${colors.surface}
        ${colors.border}
        border
        ${radius.lg}
        ${spacing.cardPaddingSm}
        ${shadows.card}
        ${className ?? ""}
      `}
    />
  );
}