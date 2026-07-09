import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SiteLayout } from "./SiteLayout";

export function LegalDocument({ markdown }: { markdown: string }) {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[760px] px-4 py-16 sm:px-6 sm:py-24">
        <article className="prose-legal">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>
      </section>
    </SiteLayout>
  );
}
