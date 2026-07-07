import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50 ${props.className ?? ""}`}
    />
  );
}