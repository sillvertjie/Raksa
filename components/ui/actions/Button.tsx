import React from "react";

import {
  colors,
  radius,
  spacing,
} from "@/lib/design-system";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(function Button(
  {
    loading = false,
    loadingText = "Loading...",
    disabled,
    children,
    className,
    ...props
  },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      disabled={disabled || loading}
      className={`
        ${colors.buttonPrimary}
        ${radius.lg}
        ${spacing.buttonX}
        ${spacing.buttonY}
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className ?? ""}
      `}
    >
      {loading ? loadingText : children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;