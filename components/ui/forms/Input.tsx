import React from "react";

import {
  radius,
  spacing,
} from "@/lib/design-system";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full
        border
        ${radius.lg}
        ${spacing.input}
        ${className ?? ""}
      `}
    />
  );
}