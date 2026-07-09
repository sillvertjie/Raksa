import React from "react";

import { typography } from "@/lib/design-system";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function Heading({
  className,
  ...props
}: Props) {
  return (
    <h1
      {...props}
      className={`
        ${typography.heading}
        ${className ?? ""}
      `}
    />
  );
}