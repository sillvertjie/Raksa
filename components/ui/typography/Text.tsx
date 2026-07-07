import React from "react";

type Props = React.HTMLAttributes<HTMLParagraphElement>;

export default function Text(props: Props) {
  return (
    <p
      {...props}
      className={`text-sm text-gray-700 ${props.className ?? ""}`}
    />
  );
}