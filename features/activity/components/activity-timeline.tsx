"use client";

import { useActivityTimeline } from "../hooks/use-activity-timeline";


export function ActivityTimeline() {
  const {
    activities,
    loading,
  } = useActivityTimeline();


  if (loading) {
    return (
      <div>
        Loading activity...
      </div>
    );
  }


  if (activities.length === 0) {
    return (
      <div>
        No activity yet.
      </div>
    );
  }


  return (
    <section>
      <h2>
        Activity Timeline
      </h2>

      <div>
        {activities.map(
          (activity) => (
            <article
              key={activity.id}
            >
              <p>
                {activity.summary}
              </p>

              <small>
                {activity.eventName}
                {" "}
                -
                {" "}
                {
                  new Date(
                    activity.occurredAt,
                  ).toLocaleString()
                }
              </small>
            </article>
          ),
        )}
      </div>
    </section>
  );
}