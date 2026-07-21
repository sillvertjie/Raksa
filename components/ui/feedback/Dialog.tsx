import {
  colors,
  radius,
  shadows,
  spacing,
} from "@/lib/design-system";

import { Button } from "@/components/ui";

interface DialogProps {
  open: boolean;
  title: string;
  description?: string;

  loading?: boolean;

  onConfirm: () => void;
  onCancel: () => void;
}

export default function Dialog({
  open,
  title,
  description,
  loading = false,
  onConfirm,
  onCancel,
}: DialogProps) {
  if (!open) return null;

  return (
    <div
      className={`
        fixed
        inset-0
        flex
        items-center
        justify-center
        ${colors.overlay}
      `}
    >
      <div
        className={`
          w-full
          max-w-md
          ${colors.surface}
          ${radius.lg}
          ${spacing.cardPadding}
          ${shadows.floating}
        `}
      >
        <h2
          className="
            text-lg
            font-semibold
            text-raksa-text-primary
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              mt-2
              text-sm
              text-raksa-text-secondary
            "
          >
            {description}
          </p>
        )}

        <div
          className="
            mt-6
            flex
            justify-end
            gap-2
          "
        >
          <Button
            onClick={onCancel}
            disabled={loading}
            className={colors.buttonSecondary}
          >
            Cancel
          </Button>

          <Button
            onClick={onConfirm}
            disabled={loading}
          >
            {loading
              ? "Deleting..."
              : "Confirm"}
          </Button>
        </div>
      </div>
    </div>
  );
}