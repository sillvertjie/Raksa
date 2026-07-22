import { ReactNode } from "react";

import { feedbackContent } from "@/lib/content-language";
import { colors } from "@/lib/design-system";

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: ReactNode;
}

export default function EmptyState({
  title = feedbackContent.emptyState.defaultTitle,
  description = feedbackContent.emptyState.defaultDescription,
  action,
}: EmptyStateProps) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-3
        py-8
        text-center
      "
    >
      <h3
        className="
          text-base
          font-semibold
          text-raksa-text-primary
        "
      >
        {title}
      </h3>

      <p
        className={`
          max-w-md
          text-sm
          ${colors.textMuted}
        `}
      >
        {description}
      </p>

      {action && (
        <div className="mt-2">
          {action}
        </div>
      )}
    </div>
  );
}