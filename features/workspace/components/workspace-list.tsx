import type { WorkspaceItem } from "../entities/workspace-item.entity";

import { WorkspaceItemCard } from "./workspace-item-card";


type Props = {
  items: WorkspaceItem[];
};


export function WorkspaceList({
  items,
}: Props) {
  if (items.length === 0) {
    return (
      <p>
        No workspace items found.
      </p>
    );
  }


  return (
    <section className="grid gap-4">
      {items.map((item) => (
        <WorkspaceItemCard
          key={item.id}
          item={item}
        />
      ))}
    </section>
  );
}