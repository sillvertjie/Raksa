import { colors } from "@/lib/design-system";

type Props = {
  message?: string;
};

export default function ErrorMessage({
  message,
}: Props) {
  return (
    <p
      className={`
        text-sm
        ${colors.danger}
      `}
    >
      {message || "Something went wrong"}
    </p>
  );
}