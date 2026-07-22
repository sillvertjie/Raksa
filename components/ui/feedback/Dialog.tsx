"use client";

import { useEffect, useId, useRef } from "react";

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
  const titleId = useId();
  const descriptionId = useId();

  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previousFocusedElementRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    cancelButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !loading) {
        event.preventDefault();
        onCancel();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      previousFocusedElementRef.current?.focus();
    };
  }, [loading, onCancel, open]);

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
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={
          description ? descriptionId : undefined
        }
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
          id={titleId}
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
            id={descriptionId}
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
            ref={cancelButtonRef}
            onClick={onCancel}
            disabled={loading}
            className={colors.buttonSecondary}
          >
            Cancel
          </Button>

          <Button
            onClick={onConfirm}
            loading={loading}
            loadingText="Deleting..."
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}