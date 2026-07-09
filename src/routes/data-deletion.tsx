import { createFileRoute } from "@tanstack/react-router";
import { LegalDocument } from "@/components/LegalDocument";
import content from "@/content/data-deletion.md?raw";

export const Route = createFileRoute("/data-deletion")({
  head: () => ({
    meta: [
      { title: "Account & Data Deletion — DeltaSchool" },
      {
        name: "description",
        content:
          "How to request deletion of your DeltaSchool account and personal data, and what is retained for legal record-keeping.",
      },
      { property: "og:title", content: "Account & Data Deletion — DeltaSchool" },
      {
        property: "og:description",
        content: "Request account and data deletion for DeltaSchool at any time.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => <LegalDocument markdown={content} />,
});
