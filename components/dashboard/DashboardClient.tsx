"use client";

import {
  CaptureSection,
  FutureModulesSection,
  HeaderSection,
  NotesSection,
  SummarySection,
} from "@/components/sections";

export default function DashboardClient() {
  return (
    <>
      <HeaderSection />

      <SummarySection />

      <CaptureSection />

      <NotesSection />

      <FutureModulesSection />
    </>
  );
}