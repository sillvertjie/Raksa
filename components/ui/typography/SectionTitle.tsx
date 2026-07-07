import React from "react";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function SectionTitle(props: Props) {
  return (
    <h2
      {...props}
      className={`text-lg font-semibold ${props.className ?? ""}`}
    />
  );
}