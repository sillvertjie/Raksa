import React from "react";

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
      className={`rounded-lg bg-black px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50 ${
        className ?? ""
      }`}
    >
      {loading ? loadingText : children}
    </button>
  );
}