interface AttachmentListItem {
  fileId: string;
}

interface AttachmentListProps {
  attachments: AttachmentListItem[];
}

export function AttachmentList({
  attachments,
}: AttachmentListProps) {
  return (
    <ul>
      {attachments.map((attachment) => (
        <li key={attachment.fileId}>
          {attachment.fileId}
        </li>
      ))}
    </ul>
  );
}