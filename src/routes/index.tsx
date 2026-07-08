import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import logoAsset from "@/assets/deltaschool-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DeltaSchool — School Management, Simplified" },
      {
        name: "description",
        content:
          "DeltaSchool is a school management mobile app for Indian schools — attendance, fees, communication, and academics for Admins, Teachers, and Parents.",
      },
      { property: "og:title", content: "DeltaSchool — School Management, Simplified" },
      {
        property: "og:description",
        content:
          "One app for Admins, Teachers, and Parents. Attendance, fees, communication, and academics — coming soon.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const roles = [
  {
    title: "Admins",
    description:
      "Manage students, staff, classes, fee structures, and school-wide communication from a single dashboard.",
  },
  {
    title: "Teachers & Faculty",
    description:
      "Mark attendance, share updates with parents, manage academic records, and coordinate day-to-day classroom activity.",
  },
  {
    title: "Students & Parents",
    description:
      "Stay informed about attendance, fees, announcements, and academic progress — directly on your phone.",
  },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(600px circle at 80% 20%, oklch(0.85 0.16 90 / 0.35), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Coming soon to Google Play
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              DeltaSchool — <span className="text-brand">School Management, Simplified.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-navy-foreground/75">
              Attendance, fees, communication, and academics — one app for Admins, Teachers, and
              Parents.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground opacity-90">
                Google Play — Coming soon
              </span>
              <a
                href="mailto:deltacorelabs@outlook.com"
                className="inline-flex items-center gap-2 rounded-lg border border-navy-foreground/20 px-5 py-3 text-sm font-medium text-navy-foreground hover:bg-navy-foreground/5"
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-brand/20 blur-2xl" />
              <img
                src={logoAsset.url}
                alt="DeltaSchool app icon"
                className="relative h-56 w-56 rounded-3xl shadow-2xl sm:h-64 sm:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Built for every role in the school
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            DeltaSchool brings admins, teachers, and parents onto the same page — literally.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {roles.map((role, i) => (
            <div
              key={role.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-brand-foreground font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{role.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Legal shortcut band */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-lg font-semibold text-navy">Transparency & compliance</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Read how we handle your data, our terms of use, and how to delete your account.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/privacy-policy"
              className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-navy hover:bg-secondary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-navy hover:bg-secondary"
            >
              Terms
            </Link>
            <Link
              to="/data-deletion"
              className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-navy hover:bg-secondary"
            >
              Data Deletion
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
