import { Card } from "@/components/ui/layout";
import { Heading, Text } from "@/components/ui/typography";

const modules = [
  {
    title: "Knowledge Management",
    description: "Notes, Collections, dan Tags.",
  },
  {
    title: "AI Processing",
    description: "Workspace AI, Summary, dan Insight.",
  },
  {
    title: "Search",
    description: "Global Search dan Filter.",
  },
  {
    title: "Analytics",
    description: "Dashboard Statistics dan Activity Overview.",
  },
];

export function FutureModulesSection() {
  return (
    <section className="mt-10">
            <Heading>
        Future Modules
        </Heading>

      <Text className="mt-2 text-slate-600">
        Modul berikut merupakan bagian dari roadmap MVP dan akan
        dikembangkan pada fase selanjutnya.
      </Text>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {modules.map((module) => (
          <Card
            key={module.title}
            className="border border-dashed border-slate-300"
          >
            <Heading className="text-lg">
                {module.title}
                </Heading>

            <Text className="mt-2 text-sm text-slate-500">
              {module.description}
            </Text>

            <span className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              Coming Soon
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
}