import React from "react";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function Heading(props: Props) {
  return (
    <h1
      {...props}
      className={`text-xl font-bold ${props.className ?? ""}`}
    />
  );
}