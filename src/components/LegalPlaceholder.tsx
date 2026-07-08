import { SiteLayout } from "./SiteLayout";

export function LegalPlaceholder({ title }: { title: string }) {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[720px] px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Last updated: [DATE — fill in on publish]
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h1>
        <div className="mt-8 rounded-xl border border-border bg-card p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-navy">
            Coming soon
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The full text of this document will be published here shortly. For any questions in the
            meantime, please contact{" "}
            <a href="mailto:deltacorelabs@outlook.com" className="font-medium text-navy underline">
              deltacorelabs@outlook.com
            </a>
            .
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
