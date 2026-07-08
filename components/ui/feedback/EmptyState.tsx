interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({
  message = "No data available",
}: EmptyStateProps) {
  return (
    <p className="text-sm text-gray-500">
      {message}
    </p>
  );
}