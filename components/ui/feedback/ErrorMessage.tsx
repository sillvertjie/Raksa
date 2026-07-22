import { ReactNode } from "react";

import { feedbackContent } from "@/lib/content-language";
import { colors } from "@/lib/design-system";

interface ErrorMessageProps {
  title?: string;
  message?: string;
  action?: ReactNode;
}

export default function ErrorMessage({
  title = feedbackContent.error.defaultTitle,
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