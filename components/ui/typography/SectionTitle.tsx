import React from "react";

import { typography } from "@/lib/design-system";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function SectionTitle({
  className,
  ...props
}: Props) {
  return (
    <h2
      {...props}
      className={`
        ${typography.sectionTitle}
        ${className ?? ""}
      `}
    />
  );
}