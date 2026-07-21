import {
  TextareaHTMLAttributes,
} from "react";

import {
  colors,
  radius,
  spacing,
} from "@/lib/design-system";

type TextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  className = "",
  ...props
}: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`
        w-full
        ${colors.input}
        ${colors.border}
        border
        ${radius.lg}
        ${spacing.input}
        outline-none
        ${colors.ring}
        ${className}
      `}
    />
  );
}