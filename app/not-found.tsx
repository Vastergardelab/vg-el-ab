import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main" className="bg-[#f8f9fc]">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm font-extrabold uppercase tracking-widest text-orange-600">404</p>
        <h1 className="mt-4 text-4xl font-extrabold text-[#1e3a8a] md:text-5xl">Sidan hittades inte</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
          Sidan du letar efter finns inte eller har flyttats. Gå till startsidan eller se våra tjänster.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-7 py-4 font-extrabold text-white shadow hover:bg-orange-700"
          >
            Till startsidan <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/tjanster"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 font-extrabold text-slate-700 shadow-sm hover:border-orange-200 hover:text-[#1e3a8a]"
          >
            Se våra tjänster
          </Link>
        </div>
      </div>
    </main>
  );
}
