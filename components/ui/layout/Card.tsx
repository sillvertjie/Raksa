import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Card(props: Props) {
  return (
    <div
      {...props}
      className={`rounded-lg border p-4 ${props.className ?? ""}`}
    />
  );
}