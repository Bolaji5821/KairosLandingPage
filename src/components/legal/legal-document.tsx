"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  lists?: { afterParagraph?: number; items: string[] }[];
};

type LegalDocumentProps = {
  title: string;
  effectiveDate?: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  embedded?: boolean;
};

export function LegalDocument({ title, effectiveDate, lastUpdated, intro, sections, embedded = false }: LegalDocumentProps) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={`${embedded ? "py-5 sm:py-8" : "pt-24 pb-20"} min-h-screen bg-white dark:bg-zinc-950`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-16 max-w-4xl">
          {!embedded && (
            <Link href="/" className="group mb-8 inline-flex items-center text-zinc-500 transition-colors hover:text-[#C2185B]">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          )}
          <div className="text-center">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-[#C2185B]">Kairos Nexus Global</span>
            <h1 className={`${embedded ? "text-3xl sm:text-4xl" : "text-4xl lg:text-6xl"} mb-6 font-bold leading-tight dark:text-white`}>{title}</h1>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              {effectiveDate && <span>Effective Date: {effectiveDate}</span>}
              {effectiveDate && <span aria-hidden="true">|</span>}
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-24 hidden lg:block">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white">Contents</h2>
              <nav aria-label={`${title} contents`}>
                <ul className="space-y-3">
                  {sections.map((section, index) => (
                    <li key={section.title}>
                      <a href={`#section-${index + 1}`} className="block text-sm text-zinc-500 transition-colors hover:text-[#C2185B] dark:text-zinc-400">{section.title}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-9">
            <article className="max-w-3xl rounded-[2.5rem] border border-zinc-100 bg-white p-8 shadow-xl shadow-pink-500/5 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-10 lg:hidden">
                <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white">Contents</h2>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {sections.map((section, index) => (
                    <a key={section.title} href={`#section-${index + 1}`} className="border-b border-zinc-100 py-2 text-sm text-zinc-500 transition-colors hover:text-[#C2185B] dark:border-zinc-800 dark:text-zinc-400">{section.title}</a>
                  ))}
                </div>
              </div>

              <p className="mb-12 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{intro}</p>
              {sections.map((section, sectionIndex) => {
                const lists = section.lists ?? [];
                const paragraphs = section.paragraphs ?? [];
                return (
                  <section key={section.title} id={`section-${sectionIndex + 1}`} className="mb-12 scroll-mt-24 last:mb-0">
                    <h2 className="mb-4 text-2xl font-bold dark:text-white">{section.title}</h2>
                    {lists.filter((list) => (list.afterParagraph ?? 0) === 0).map((list, index) => <LegalList key={`before-${index}`} items={list.items} />)}
                    {paragraphs.map((paragraph, paragraphIndex) => (
                      <div key={paragraph}>
                        <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">{paragraph}</p>
                        {lists.filter((list) => list.afterParagraph === paragraphIndex + 1).map((list, index) => <LegalList key={`after-${paragraphIndex}-${index}`} items={list.items} />)}
                      </div>
                    ))}
                  </section>
                );
              })}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}

function LegalList({ items }: { items: string[] }) {
  return <ul className="mb-4 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">{items.map((item) => <li key={item} className="leading-relaxed">{item}</li>)}</ul>;
}
