"use client";

import { PresenceBadge } from "./presence-badge";
import { usePresence } from "../hooks/usePresence";

export function PresenceList() {
  const {
    presence,
    loading,
  } = usePresence();

  if (loading) {
    return (
      <p className="text-sm text-muted-foreground">
        Loading presence...
      </p>
    );
  }

  if (presence.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No active members.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {presence.map((member) => (
        <div
          key={member.id}
          className="flex items-center justify-between rounded-md border p-3"
        >
          <div>
            <p className="font-medium">
              {member.userId}
            </p>

            <p className="text-xs text-muted-foreground">
              Last seen{" "}
              {new Date(
                member.lastSeenAt,
              ).toLocaleString()}
            </p>
          </div>

          <PresenceBadge
            status={member.status}
          />
        </div>
      ))}
    </div>
  );
}