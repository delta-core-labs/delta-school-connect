import { createFileRoute } from "@tanstack/react-router";
import { LegalDocument } from "@/components/LegalDocument";
import content from "@/content/privacy-policy.md?raw";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DeltaSchool" },
      {
        name: "description",
        content:
          "How DeltaSchool collects, uses, stores, and protects information for schools, staff, students, and parents in India.",
      },
      { property: "og:title", content: "Privacy Policy — DeltaSchool" },
      {
        property: "og:description",
        content: "DeltaSchool's Privacy Policy, aligned with India's DPDP Act, 2023.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => <LegalDocument markdown={content} />,
});
