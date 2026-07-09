import React from "react";

import { typography } from "@/lib/design-system";

type Props = React.HTMLAttributes<HTMLParagraphElement>;

export default function Text({
  className,
  ...props
}: Props) {
  return (
    <p
      {...props}
      className={`
        ${typography.body}
        ${typography.muted}
        ${className ?? ""}
      `}
    />
  );
}