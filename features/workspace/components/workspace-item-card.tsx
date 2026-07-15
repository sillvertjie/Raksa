import type { WorkspaceItem } from "../entities/workspace-item.entity";


type Props = {
  item: WorkspaceItem;
};


export function WorkspaceItemCard({
  item,
}: Props) {
  return (
    <article className="rounded border p-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">
          {item.type}
        </span>

        <h3 className="font-semibold">
          {item.title}
        </h3>
      </div>


      {item.description && (
        <p className="mt-2 text-sm">
          {item.description}
        </p>
      )}


      {item.status && (
        <p className="mt-2 text-sm">
          Status: {item.status}
        </p>
      )}
    </article>
  );
}