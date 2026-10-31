import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { brand, services } from "@/app/data/site";
import PageHero from "@/components/page-hero";
import ServiceCard from "@/components/service-card";
import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Tjänster – elektriker i Helsingborg",
  description:
    "Se alla våra eltjänster i Helsingborg och Skåne: elinstallation, felsökning, belysning, nätverk och eljour 24/7. Begär offert idag.",
  alternates: {
    canonical: "/tjanster",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "/tjanster",
    siteName: brand.name,
    title: "Tjänster – elektriker i Helsingborg",
    description:
      "Elinstallation, felsökning, belysning, nätverk och eljour 24/7 i Helsingborg och Skåne.",
  },
};

export default function TjansterPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Tjänster"
        title="Eltjänster i Helsingborg och Skåne"
        description="Från ny elinstallation och felsökning till belysning, nätverk och akut eljour. Vi hjälper privatpersoner, företag och fastighetsägare – med tydlig kommunikation och fokus på säkerhet."
        breadcrumbs={[{ label: "Hem", href: "/" }, { label: "Tjänster" }]}
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
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                text={service.short}
                href={`/tjanster/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fc] py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-orange-600">Så arbetar vi</p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#1e3a8a] md:text-4xl">
              Tydlig process från första kontakt till färdigt jobb
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Vi tror på enkla och tydliga steg. Du ska veta vad som ska göras, vad det kostar och när vi kommer.
            </p>
            <ol className="mt-8 space-y-5">
              {[
                "Du hör av dig och beskriver vad du behöver.",
                "Vi går igenom förutsättningarna och du får en offert.",
                "Vi utför arbetet och håller dig uppdaterad.",
                "Vi kontrollerar resultatet tillsammans innan vi är klara.",
              ].map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-orange-600 text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1.5 text-slate-600">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50">
                <MapPin className="h-5 w-5 text-orange-600" />
              </div>
              <div className="text-sm font-extrabold text-[#1e3a8a]">Vi arbetar i</div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {brand.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-bold text-orange-700"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              Vi utgår från Helsingborg och tar uppdrag i hela Skåne. Hör av dig med din adress så bekräftar vi att vi
              kan hjälpa dig.
            </p>
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-orange-600 hover:text-orange-700"
            >
              Läs vanliga frågor <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
