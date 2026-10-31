import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { brand } from "@/app/data/site";
import JsonLd from "@/components/json-ld";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: Crumb[];
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: PageHeroProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${brand.url}${crumb.href}` } : {}),
    })),
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#f8f9fc] to-[#f1ebe6]">
      <JsonLd data={breadcrumbJsonLd} />
      <div className="absolute inset-x-0 bottom-0 h-20 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(249,115,22,0.6),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <nav aria-label="Brödsmulor" className="flex flex-wrap items-center gap-1 text-xs font-semibold text-slate-500">
          {breadcrumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-3 w-3 text-slate-400" />}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-orange-600">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-700">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <p className="mt-8 text-xs font-extrabold uppercase tracking-widest text-orange-600">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-[#1e3a8a] md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
