import React from "react";

import {
  radius,
  spacing,
} from "@/lib/design-system";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
}

export default function Button({
  loading = false,
  loadingText = "Loading...",
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`
        ${radius.lg}
        ${spacing.buttonX}
        ${spacing.buttonY}
        bg-black
        text-white
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className ?? ""}
      `}
    >
      {loading ? loadingText : children}
    </button>
  );
}