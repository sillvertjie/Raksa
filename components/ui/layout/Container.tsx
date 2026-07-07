import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Container(props: Props) {
  return (
    <div
      {...props}
      className={`mx-auto max-w-2xl px-4 ${props.className ?? ""}`}
    />
  );
}