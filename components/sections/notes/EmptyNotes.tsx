import {
  Heading,
  Text,
} from "@/components/ui";

export default function EmptyNotes() {
  return (
    <div
      className="
        rounded-xl
        border
        border-dashed
        border-slate-300
        bg-slate-50
        p-10
        text-center
      "
    >
      <Heading className="text-lg text-slate-700">
        No Notes Yet
      </Heading>

      <Text className="mt-2 text-slate-500">
        Create your first note to start building your knowledge base.
      </Text>
    </div>
  );
}