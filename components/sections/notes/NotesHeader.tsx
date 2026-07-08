import {
  Button,
  SectionTitle,
  Text,
} from "@/components/ui";

export default function NotesHeader() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <SectionTitle className="text-slate-900">
          Notes
        </SectionTitle>

        <Text className="mt-1 text-slate-500">
          Store your knowledge and important information.
        </Text>
      </div>

      <Button>
        New Note
      </Button>
    </header>
  );
}