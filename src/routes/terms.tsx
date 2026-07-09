import { createFileRoute } from "@tanstack/react-router";
import { LegalDocument } from "@/components/LegalDocument";
import content from "@/content/terms.md?raw";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — DeltaSchool" },
      {
        name: "description",
        content:
          "Terms & Conditions governing access to and use of the DeltaSchool school management app.",
      },
      { property: "og:title", content: "Terms & Conditions — DeltaSchool" },
      {
        property: "og:description",
        content: "The rules for using DeltaSchool as a school, admin, teacher, student, or parent.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => <LegalDocument markdown={content} />,
});
