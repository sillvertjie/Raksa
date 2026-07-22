import { feedbackContent } from "@/lib/content-language";
import { colors } from "@/lib/design-system";

interface LoadingProps {
  message?: string;
}

export default function Loading({
  message = feedbackContent.loading.defaultMessage,
}: LoadingProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="
        flex
        items-center
        justify-center
      "
    >
      <p
        className={`
          text-sm
          ${colors.textMuted}
        `}
      >
        {message}
      </p>
    </div>
  );
}