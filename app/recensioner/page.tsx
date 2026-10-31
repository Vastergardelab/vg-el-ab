import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink, Phone, Star } from "lucide-react";
import { brand, hasPlaceholderReviews, reviewSummary, reviews } from "@/app/data/site";
import PageHero from "@/components/page-hero";
import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Recensioner och kundomdömen",
  description:
    "5,0 av 5 i snitt på Reco.se. Läs vad kunder säger om VG EL AB – elektriker i Helsingborg och Skåne. Elinstallation, felsökning, belysning, nätverk och jour.",
  alternates: {
    canonical: "/recensioner",
  },
  robots: hasPlaceholderReviews
    ? { index: false, follow: true }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "/recensioner",
    siteName: brand.name,
    title: "Recensioner och kundomdömen",
    description:
      "Läs vad kunder säger om VG EL AB – elektriker i Helsingborg och Skåne.",
  },
};

const reviewDateFormatter = new Intl.DateTimeFormat("sv-SE", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatReviewDate(date: string) {
  return reviewDateFormatter.format(new Date(date));
}

export default function RecensionerPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Recensioner"
        title="Vad våra kunder säger"
        description="Vi är stolta över att kunder i Helsingborg och Skåne väljer oss – och att många kommer tillbaka. Här samlar vi omdömen från kunder vi har hjälpt."
        breadcrumbs={[{ label: "Hem", href: "/" }, { label: "Recensioner" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#offert"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-7 py-4 font-extrabold text-white shadow hover:bg-orange-700"
          >
            Begär offert <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={brand.googleReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-extrabold text-slate-700 shadow-sm hover:border-orange-200 hover:text-[#1e3a8a]"
          >
            Lämna omdöme på Google <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-slate-100 bg-[#f8f9fc] p-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-orange-500" aria-label={`${reviewSummary.ratingValue} av 5 stjärnor`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5" fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <div>
                <div className="text-sm font-extrabold text-[#1e3a8a]">
                  {reviewSummary.ratingValue.toFixed(1).replace(".", ",")} av 5 i snitt
                </div>
                <div className="text-xs text-slate-500">
                  {reviewSummary.reviewCount} omdömen på {reviewSummary.source}
                </div>
              </div>
            </div>
            <a
              href={reviewSummary.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1e3a8a] hover:text-orange-600"
            >
              Se alla omdömen på {reviewSummary.source} <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {hasPlaceholderReviews && (
            <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
              <strong className="font-extrabold">Platshållare:</strong> Omdömena nedan är exempel och ska ersättas med
              riktiga kundcitat innan sidan publiceras. Sidan är därför tillfälligt dold för Google.
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={`${review.name}-${review.text.slice(0, 24)}`}
                className="flex h-full flex-col rounded-3xl border border-slate-100 bg-[#f8f9fc] p-8 shadow-sm"
              >
                <div className="flex items-center gap-1 text-orange-500" aria-label={`${review.rating} av 5 stjärnor`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4"
                      fill={index < review.rating ? "currentColor" : "none"}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-slate-700">&ldquo;{review.text}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
                  <div>
                    <div className="text-sm font-extrabold text-[#1e3a8a]">{review.name}</div>
                    <a
                      href={review.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-500 hover:text-orange-600"
                    >
                      {review.source} · {formatReviewDate(review.date)}
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                  {review.isPlaceholder && (
                    <span className="rounded-full border border-amber-200 bg-amber-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-amber-800">
                      Exempel
                    </span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Omdömena är hämtade från vår profil på{" "}
            <a
              href={reviewSummary.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#1e3a8a] underline-offset-2 hover:underline"
            >
              Reco.se
            </a>{" "}
            och återges i original. Det sjätte omdömet är ett betyg utan skriven kommentar.
          </p>

          <div className="mt-14 grid gap-6 rounded-3xl border border-slate-100 bg-[#f8f9fc] p-8 md:grid-cols-3">
            {[
              "Behörig personal och fackmässigt utfört arbete",
              "Tydlig kommunikation från offert till färdigt jobb",
              "Jour dygnet runt när det behövs som mest",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                <span className="text-sm font-semibold leading-relaxed text-slate-700">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-[#1e3a8a] p-8 text-center text-white md:p-12">
            <h2 className="text-2xl font-extrabold md:text-3xl">Har du anlitat oss? Lämna gärna ett omdöme.</h2>
            <p className="mt-3 text-white/80">
              Ditt omdöme hjälper andra att hitta en elektriker de kan lita på.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={brand.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-extrabold text-[#1e3a8a] hover:bg-slate-100"
              >
                Lämna omdöme på Google <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={`tel:${brand.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-orange-700"
              >
                <Phone className="h-4 w-4" /> Ring {brand.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
