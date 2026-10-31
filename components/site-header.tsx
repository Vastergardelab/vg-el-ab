"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/brand-mark";

const links = [
  { href: "/", label: "Hem" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/faq", label: "FAQ" },
  { href: "/recensioner", label: "Recensioner" },
  { href: "/#om", label: "Om oss" },
  { href: "/#kontakt", label: "Kontakt" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="VG EL AB – till startsidan">
          <BrandMark className="h-8 w-auto" />
          <span className="hidden text-sm font-extrabold tracking-wide text-[#1e3a8a] sm:block">
            VG EL AB
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(pathname, link.href)
                  ? "text-orange-600"
                  : "hover:text-orange-600"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#offert"
            className="hidden rounded-2xl bg-orange-600 px-6 py-3 text-sm font-extrabold text-white shadow hover:bg-orange-700 sm:inline-flex"
          >
            Begär offert
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Stäng menyn" : "Öppna menyn"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-slate-100 bg-white px-6 py-4 shadow-lg lg:hidden"
        >
          <nav className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3 ${
                  isActive(pathname, link.href)
                    ? "bg-orange-50 text-orange-600"
                    : "hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#offert"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-orange-600 px-3 py-3 text-center font-extrabold text-white hover:bg-orange-700"
            >
              Begär offert
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
