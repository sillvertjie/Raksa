import { ReactNode } from "react";

import { colors } from "@/lib/design-system";

interface ErrorMessageProps {
  title?: string;
  message?: string;
  action?: ReactNode;
}

export default function ErrorMessage({
  title = "Something went wrong",
  message,
  action,
}: ErrorMessageProps) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="
        flex
        flex-col
        gap-2
      "
    >
      <h3
        className={`
          text-sm
          font-semibold
          ${colors.danger}
        `}
      >
        {title}
      </h3>

      {message && (
        <p
          className={`
            text-sm
            ${colors.textMuted}
          `}
        >
          {message}
        </p>
      )}

      {action && (
        <div className="mt-1">
          {action}
        </div>
      )}
    </div>
  );
}