interface PresenceBadgeProps {
  status: "ONLINE" | "OFFLINE";
}

export function PresenceBadge({
  status,
}: PresenceBadgeProps) {
  const isOnline =
    status === "ONLINE";

  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
        isOnline
          ? "bg-green-100 text-green-700"
          : "bg-gray-100 text-gray-600",
      ].join(" ")}
    >
      <span
        className={[
          "mr-2 h-2 w-2 rounded-full",
          isOnline
            ? "bg-green-500"
            : "bg-gray-400",
        ].join(" ")}
      />

      {isOnline
        ? "Online"
        : "Offline"}
    </span>
  );
}