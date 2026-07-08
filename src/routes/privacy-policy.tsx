import { createFileRoute } from "@tanstack/react-router";
import { LegalPlaceholder } from "@/components/LegalPlaceholder";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DeltaSchool" },
      { name: "description", content: "DeltaSchool Privacy Policy." },
      { property: "og:title", content: "Privacy Policy — DeltaSchool" },
      { property: "og:description", content: "DeltaSchool Privacy Policy." },
    ],
  }),
  component: () => <LegalPlaceholder title="Privacy Policy" />,
});
