import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  gap?: number;
};

export default function Stack({ gap = 4, className, ...props }: Props) {
  return (
    <div
      {...props}
      className={`flex flex-col gap-${gap} ${className ?? ""}`}
    />
  );
}