import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { brand, faqs, services } from "@/app/data/site";
import PageHero from "@/components/page-hero";
import CtaSection from "@/components/cta-section";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Vanliga frågor om el och elektriker",
  description:
    "Svar på vanliga frågor om elarbete i Helsingborg: priser, jour, behörighet, offert, ROT-avdrag och jordfelsbrytare. Ring oss om du undrar något annat.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "/faq",
    siteName: brand.name,
    title: "Vanliga frågor om el och elektriker",
    description:
      "Svar på vanliga frågor om elarbete i Helsingborg: priser, jour, behörighet, offert och jordfelsbrytare.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function FaqPage() {
  return (
    <main id="main">
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow="Vanliga frågor"
        title="Har du frågor om elarbete?"
        description="Här har vi samlat svar på det vi får höra oftast – om priser, jour, behörighet och vad som gäller. Hittar du inte svaret? Ring eller maila oss."
        breadcrumbs={[{ label: "Hem", href: "/" }, { label: "Vanliga frågor" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#offert"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-7 py-4 font-extrabold text-white shadow hover:bg-orange-700"
          >
            Begär offert <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={`tel:${brand.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-extrabold text-slate-700 shadow-sm hover:border-orange-200 hover:text-[#1e3a8a]"
          >
            <Phone className="h-5 w-5 text-orange-600" /> Ring {brand.phone}
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-100 bg-[#f8f9fc] px-6 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-extrabold text-[#1e3a8a]">
                  {item.q}
                  <span className="text-2xl leading-none text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-slate-100 bg-[#f8f9fc] p-8 shadow-sm">
              <div className="text-lg font-extrabold text-[#1e3a8a]">Fick du inte svar?</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Ring oss eller skicka en förfrågan – vi svarar så snart vi kan.
              </p>
              <a
                href={`tel:${brand.phoneHref}`}
                className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-5 py-4 text-sm font-extrabold text-white hover:bg-orange-700"
              >
                <Phone className="h-4 w-4" /> Ring {brand.phone}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-extrabold text-slate-700 hover:border-orange-200 hover:text-[#1e3a8a]"
              >
                Maila {brand.email}
              </a>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="text-sm font-extrabold text-[#1e3a8a]">Läs mer om våra tjänster</div>
              <ul className="mt-4 space-y-2 text-sm font-semibold text-slate-600">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/tjanster/${service.slug}`}
                      className="flex items-center justify-between gap-2 rounded-xl px-2 py-2 hover:bg-orange-50 hover:text-orange-700"
                    >
                      {service.title}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
