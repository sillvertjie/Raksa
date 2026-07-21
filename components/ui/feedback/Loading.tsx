import { colors } from "@/lib/design-system";

export default function Loading() {
  return (
    <p
      className={`
        text-sm
        ${colors.textMuted}
      `}
    >
      Loading...
    </p>
  );
}