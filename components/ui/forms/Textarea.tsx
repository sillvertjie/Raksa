import { TextareaHTMLAttributes } from "react";

type TextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  className = "",
  ...props
}: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black ${className}`}
    />
  );
}