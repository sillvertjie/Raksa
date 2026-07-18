"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  activityApi,
  type ActivityTimelineItem,
} from "../api/activity.api";


export function useActivityTimeline() {
  const [
    activities,
    setActivities,
  ] = useState<ActivityTimelineItem[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);


  useEffect(() => {
    async function load() {
      try {
        const result =
          await activityApi.getTimeline();

        setActivities(result);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);


  return {
    activities,
    loading,
  };
}