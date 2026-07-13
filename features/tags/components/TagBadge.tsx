interface TagBadgeProps {
  name: string;
}

export function TagBadge({
  name,
}: TagBadgeProps) {
  return (
    <span>
      {name}
    </span>
  );
}