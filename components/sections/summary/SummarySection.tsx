import {
  Card,
  Heading,
  Text,
} from "@/components/ui";

export default function SummarySection() {
  return (
    <section className="mt-10">
      <Heading>
        Overview
      </Heading>

        <Text className="mt-2">
        Welcome back! This is a quick overview of your workspace.
        </Text>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card>
          <Text>Total Captures</Text>

          <Heading className="mt-2">
            --
          </Heading>
        </Card>

        <Card>
          <Text>Latest Capture</Text>

          <Heading className="mt-2">
            --
          </Heading>
        </Card>

        <Card>
          <Text>Database</Text>

          <Heading className="mt-2">
            Connected
          </Heading>
        </Card>
      </div>
    </section>
  );
}