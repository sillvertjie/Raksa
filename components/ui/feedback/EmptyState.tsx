import { colors } from "@/lib/design-system";

interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({
  message = "No data available",
}: EmptyStateProps) {
  return (
    <p
      className={`
        text-sm
        ${colors.textMuted}
      `}
    >
      {message}
    </p>
  );
}