import React from "react";

import {
  radius,
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
        border
        ${radius.lg}
        ${spacing.cardPaddingSm}
        ${className ?? ""}
      `}
    />
  );
}