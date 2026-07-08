import { createFileRoute } from "@tanstack/react-router";
import { LegalPlaceholder } from "@/components/LegalPlaceholder";

export const Route = createFileRoute("/data-deletion")({
  head: () => ({
    meta: [
      { title: "Account & Data Deletion — DeltaSchool" },
      { name: "description", content: "How to delete your DeltaSchool account and data." },
      { property: "og:title", content: "Account & Data Deletion — DeltaSchool" },
      { property: "og:description", content: "How to delete your DeltaSchool account and data." },
    ],
  }),
  component: () => <LegalPlaceholder title="Account & Data Deletion" />,
});
