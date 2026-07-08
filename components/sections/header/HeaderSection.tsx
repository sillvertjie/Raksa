import { Heading, Text } from "@/components/ui";

export default function HeaderSection() {
  return (
    <header className="mb-8 text-center">
      <Heading className="text-4xl font-bold tracking-tight text-slate-900">
        Raksa
      </Heading>

      <Text className="mt-2 text-gray-500">
        Quickly capture your thoughts.
      </Text>
    </header>
  );
}