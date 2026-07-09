import { TextareaHTMLAttributes } from "react";

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
        ${colors.surface}
        ${colors.border}
        border
        ${radius.lg}
        ${spacing.input}
        outline-none
        focus:ring-2
        focus:ring-black
        ${className}
      `}
    />
  );
}