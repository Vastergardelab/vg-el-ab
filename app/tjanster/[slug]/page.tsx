import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { brand, services } from "@/app/data/site";
import PageHero from "@/components/page-hero";
import CtaSection from "@/components/cta-section";
import JsonLd from "@/components/json-ld";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/tjanster/${service.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "sv_SE",
      url: `/tjanster/${service.slug}`,
      siteName: brand.name,
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: `${brand.url}/tjanster/${service.slug}`,
    provider: {
      "@type": "Electrician",
      "@id": `${brand.url}/#organization`,
      name: brand.name,
      telephone: brand.phoneHref,
      url: brand.url,
    },
    areaServed: brand.areas.map((area) =>
      area === "Skåne"
        ? { "@type": "AdministrativeArea", name: area }
        : { "@type": "City", name: area }
    ),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <main id="main">
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow="Tjänst"
        title={service.hero}
        description={service.short}
        breadcrumbs={[
          { label: "Hem", href: "/" },
          { label: "Tjänster", href: "/tjanster" },
          { label: service.title },
        ]}
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
          <div>
            <div className="space-y-5 text-lg leading-relaxed text-slate-600">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-14 text-3xl font-extrabold text-[#1e3a8a]">Det här hjälper vi dig med</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#f8f9fc] px-4 py-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                  <span className="text-sm font-semibold text-slate-700">{bullet}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-14 text-3xl font-extrabold text-[#1e3a8a]">Så går det till</h2>
            <ol className="mt-6 space-y-4">
              {service.process.map((step, index) => (
                <li key={step.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-orange-600 text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <div className="font-extrabold text-[#1e3a8a]">{step.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="mt-14 text-3xl font-extrabold text-[#1e3a8a]">
              Vanliga frågor om {service.title.toLowerCase()}
            </h2>
            <div className="mt-6 space-y-3">
              {service.faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-slate-100 bg-[#f8f9fc] px-5 py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-[#1e3a8a]">
                    {item.q}
                    <span className="text-xl leading-none text-orange-600 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-slate-100 bg-[#f8f9fc] p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">
                <Icon className="h-6 w-6 text-orange-600" />
              </div>
              <div className="mt-5 text-xl font-extrabold text-[#1e3a8a]">{service.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Berätta vad du behöver så återkommer vi med pris och tid.
              </p>

              <a
                href={`tel:${brand.phoneHref}`}
                className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-5 py-4 text-sm font-extrabold text-white hover:bg-orange-700"
              >
                <Phone className="h-4 w-4" /> Ring {brand.phone}
              </a>
              <Link
                href="/#offert"
                className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-extrabold text-slate-700 hover:border-orange-200 hover:text-[#1e3a8a]"
              >
                Begär offert <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-7 border-t border-slate-200 pt-5">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  <MapPin className="h-4 w-4 text-orange-600" /> Område
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {brand.areas.map((area) => (
                    <span key={area} className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-600">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="text-sm font-extrabold text-[#1e3a8a]">Fler tjänster</div>
              <ul className="mt-4 space-y-2 text-sm font-semibold text-slate-600">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/tjanster/${item.slug}`}
                      className="flex items-center justify-between gap-2 rounded-xl px-2 py-2 hover:bg-orange-50 hover:text-orange-700"
                    >
                      {item.title}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/tjanster"
                className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-orange-600 hover:text-orange-700"
              >
                Se alla tjänster <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection
        title={`Behöver du hjälp med ${service.title.toLowerCase()}?`}
        description="Hör av dig så går vi igenom vad du behöver och vad det innebär."
      />
    </main>
  );
}
