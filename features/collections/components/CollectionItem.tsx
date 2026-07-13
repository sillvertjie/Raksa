interface CollectionItemProps {
  name: string;
  depth?: number;
}

export function CollectionItem({
  name,
  depth = 0,
}: CollectionItemProps) {
  void depth;

  return (
    <div>
      {name}
    </div>
  );
}