import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { brand } from "@/app/data/site";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

export default function CtaSection({
  title = "Redo att starta ditt projekt?",
  description = "Kontakta oss idag så hjälper vi dig.",
}: CtaSectionProps) {
  return (
    <section className="bg-[#1e3a8a] py-20 text-center text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-extrabold md:text-5xl">{title}</h2>
        <p className="mt-5 text-lg text-white/80">{description}</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${brand.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-7 py-4 font-extrabold hover:bg-orange-700"
          >
            <Phone className="h-5 w-5" /> Ring {brand.phone}
          </a>
          <a
            href={`mailto:${brand.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-extrabold text-[#1e3a8a] hover:bg-slate-100"
          >
            <Mail className="h-5 w-5" /> Skicka mail
          </a>
        </div>
        <p className="mt-6 text-sm text-white/70">
          Eller{" "}
          <Link href="/#offert" className="font-bold text-orange-300 underline underline-offset-4 hover:text-orange-200">
            begär en offert
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
