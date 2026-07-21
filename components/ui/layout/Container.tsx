import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Container({
  className,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`
        mx-auto
        w-full
        max-w-7xl
        min-w-0
        overflow-hidden
        px-4
        ${className ?? ""}
      `}
    />
  );
}