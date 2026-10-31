import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand, services } from "@/app/data/site";
import SocialLinks from "@/components/social-links";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="text-lg font-extrabold text-[#1e3a8a]">{brand.name}</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Elinstallation, service och nätverk i Helsingborg och Skåne. Jour dygnet runt.
            </p>
            <SocialLinks className="mt-5" />
          </div>

          <div>
            <div className="text-sm font-extrabold text-slate-800">Tjänster</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/tjanster/${service.slug}`} className="hover:text-orange-600">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold text-slate-800">Sidor</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/tjanster" className="hover:text-orange-600">
                  Alla tjänster
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-orange-600">
                  Vanliga frågor
                </Link>
              </li>
              <li>
                <Link href="/recensioner" className="hover:text-orange-600">
                  Recensioner
                </Link>
              </li>
              <li>
                <Link href="/#offert" className="hover:text-orange-600">
                  Begär offert
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold text-slate-800">Kontakt</div>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href={`tel:${brand.phoneHref}`} className="flex items-center gap-2 hover:text-orange-600">
                  <Phone className="h-4 w-4 text-orange-600" /> {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="flex items-center gap-2 hover:text-orange-600">
                  <Mail className="h-4 w-4 text-orange-600" /> {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                <span>
                  {brand.address.street}
                  <br />
                  {brand.address.postal} {brand.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-500 md:flex-row">
          <div>
            © {new Date().getFullYear()} {brand.name} • Org.nr {brand.orgNr} • {brand.site}
          </div>
          <div>Elektriker i Helsingborg · Jour 24/7 · Hela Skåne</div>
        </div>
      </div>
    </footer>
  );
}
