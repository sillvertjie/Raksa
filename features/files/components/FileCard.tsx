interface FileCardProps {
  name: string;
  mimeType: string;
  size: number;
}

export function FileCard({
  name,
  mimeType,
  size,
}: FileCardProps) {
  return (
    <div>
      <div>{name}</div>
      <div>{mimeType}</div>
      <div>{size}</div>
    </div>
  );
}