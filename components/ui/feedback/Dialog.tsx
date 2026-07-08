import Button from "@/components/ui/actions/Button";

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
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm text-gray-600">
            {description}
          </p>
        )}

        <div className="mt-6 flex justify-end gap-2">
          <Button
            onClick={onCancel}
            disabled={loading}
            className="bg-gray-500"
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