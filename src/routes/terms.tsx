import { createFileRoute } from "@tanstack/react-router";
import { LegalPlaceholder } from "@/components/LegalPlaceholder";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — DeltaSchool" },
      { name: "description", content: "DeltaSchool Terms & Conditions." },
      { property: "og:title", content: "Terms & Conditions — DeltaSchool" },
      { property: "og:description", content: "DeltaSchool Terms & Conditions." },
    ],
  }),
  component: () => <LegalPlaceholder title="Terms & Conditions" />,
});
