"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Award,
  Clock3,
  Users,
  ThumbsUp,
  PlugZap,
  Wrench,
  Lightbulb,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const brand = {
  name: "VG EL AB",
  tagline: "Din Elektriker!",
  servicesTop: ["Elinstallation", "Elservice", "Nätverk"],
  areas: ["Skåne", "Landskrona", "Malmö", "Helsingborg"],
  phone: "+46 73-53 31 22 47",
  email: "info@vgel.se",
  site: "www.vastergardel.se",
  logoSrc: "/vastergardel-logo.png", // används för full logga om du vill visa den någonstans
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },
};

function useCountUp(target, durationMs = 900) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    setValue(0);
    startRef.current = null;

    const tick = (t) => {
      if (!startRef.current) startRef.current = t;
      const elapsed = t - startRef.current;
      const p = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, durationMs]);

  return value;
}

function Stat({ icon: Icon, labelTop, value, suffix, title, desc }) {
  const n = useCountUp(value);
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100">
        <Icon className="h-7 w-7 text-orange-600" />
      </div>
      <div className="mt-6 text-5xl font-extrabold text-[#1e3a8a]">
        {n}
        {suffix}
      </div>
      <div className="mt-2 text-orange-600 font-medium">{labelTop}</div>
      <div className="mt-6 text-lg font-extrabold text-[#1e3a8a]">{title}</div>
      <div className="mt-2 text-slate-500 max-w-xs mx-auto">{desc}</div>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-10">
      <div className="h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center">
        <Icon className="h-7 w-7 text-orange-600" />
      </div>
      <h3 className="mt-7 text-2xl font-extrabold text-[#1e3a8a]">{title}</h3>
      <p className="mt-4 text-slate-500 leading-relaxed text-lg">{text}</p>
    </div>
  );
}

function SocialLinks({ className = "" }) {
  const items = [
    { key: "instagram", href: brand.social.instagram, Icon: Instagram, label: "Instagram" },
    { key: "facebook", href: brand.social.facebook, Icon: Facebook, label: "Facebook" },
    { key: "linkedin", href: brand.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {items.map(({ key, href, Icon, label }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-100 bg-white text-slate-700 shadow-sm hover:border-orange-200 hover:text-orange-600"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

function ModalShell({ onClose, title, children }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white shadow-xl border border-slate-100 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-extrabold text-[#1e3a8a]">{title}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-10 w-10 rounded-2xl border border-slate-100 bg-white text-slate-700 hover:border-orange-200"
            aria-label="Stäng"
          >
            ✕
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default function Page() {
  const [callOpen, setCallOpen] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);

  // Offert-formulär
  const [offer, setOffer] = useState({
    name: "",
    contact: "",
    address: "",
    service: "Elservice / felsökning",
    urgency: "Inom 1–3 dagar",
    message: "",
  });
  const [offerToast, setOfferToast] = useState("");

  const telHref = useMemo(() => {
    const cleaned = brand.phone.replace(/[^+0-9]/g, "");
    return `tel:${cleaned}`;
  }, []);

  const mailHref = `mailto:${brand.email}`;

  const stats = useMemo(
    () => [
      {
        icon: Award,
        value: 100,
        suffix: "%",
        labelTop: "Certifierade",
        title: "Auktoriserade",
        desc: "Behörig personal och proffsigt utfört arbete.",
      },
      {
        icon: Clock3,
        value: 24,
        suffix: "h",
        labelTop: "Responstid",
        title: "Snabb service",
        desc: "Snabb återkoppling och tydlig plan.",
      },
      {
        icon: Users,
        value: 10,
        suffix: "+",
        labelTop: "Års erfarenhet",
        title: "Erfarenhet",
        desc: "Gedigen erfarenhet inom el och nätverk.",
      },
      {
        icon: ThumbsUp,
        value: 500,
        suffix: "+",
        labelTop: "Nöjda kunder",
        title: "Nöjda kunder",
        desc: "Många nöjda kunder i regionen.",
      },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        icon: PlugZap,
        title: "Elinstallation",
        text: "Installation i nybygge och renovering – säkert och snyggt.",
      },
      {
        icon: Wrench,
        title: "Felsökning",
        text: "Snabb felsökning och åtgärd av elfel.",
      },
      {
        icon: Lightbulb,
        title: "Belysning",
        text: "Planering och installation av modern belysning.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <PlugZap className="h-5 w-5 text-orange-600" />
            </div>
            <div className="text-sm font-extrabold text-[#1e3a8a] tracking-wide">VG EL AB</div>
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-700">
            <a href="#" className="text-orange-600">Hem</a>
            <a href="#tjanster" className="hover:text-orange-600">Tjänster</a>
            <a href="#offert" className="hover:text-orange-600">Offert</a>
            <a href="#om" className="hover:text-orange-600">Om oss</a>
            <a href="#kontakt" className="hover:text-orange-600">Kontakt</a>
          </nav>

          <a
            href="#offert"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl text-sm font-extrabold shadow"
          >
            Begär offert
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#f8f9fc] to-[#f1ebe6] relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-20 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(249,115,22,0.6),transparent)]" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-20 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] text-[#1e3a8a]">
              Professionella eltjänster
              <span className="block text-orange-600">du kan lita på</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Vi hjälper dig med allt från elinstallationer och felsökning till nätverkslösningar. Kontakta oss för en
              kostnadsfri konsultation.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href="#offert"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-7 py-4 rounded-2xl font-extrabold shadow hover:bg-orange-700"
              >
                Begär offert <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#tjanster"
                className="inline-flex items-center justify-center border-2 border-[#1e3a8a] text-[#1e3a8a] px-7 py-4 rounded-2xl font-extrabold bg-white/60"
              >
                Våra tjänster
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {brand.servicesTop.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-white/70 border border-slate-100 px-4 py-2 text-xs font-semibold text-slate-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-xl flex flex-col items-center">
              <div className="h-52 w-52 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <PlugZap className="h-16 w-16 text-orange-600 mx-auto" />
                  <div className="mt-4 text-2xl font-extrabold text-[#1e3a8a]">VG EL AB</div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
                <button
                  type="button"
                  onClick={() => setCallOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-100 px-4 py-2 text-slate-700 hover:border-orange-200"
                >
                  <Phone className="h-4 w-4 text-orange-600" /> {brand.phone}
                </button>
                <button
                  type="button"
                  onClick={() => setMailOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-100 px-4 py-2 text-slate-700 hover:border-orange-200"
                >
                  <Mail className="h-4 w-4 text-orange-600" /> {brand.email}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-orange-600 font-extrabold tracking-widest text-xs">VARFÖR OSS</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mt-4">Därför väljer kunder oss</h2>

          <div className="grid md:grid-cols-4 gap-12 mt-16">
            {stats.map((s) => (
              <Stat
                key={s.title}
                icon={s.icon}
                value={s.value}
                suffix={s.suffix}
                labelTop={s.labelTop}
                title={s.title}
                desc={s.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="tjanster" className="py-24 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-orange-600 font-extrabold tracking-widest text-xs text-center">TJÄNSTER</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mt-4 text-center">Vad vi erbjuder</h2>
          <p className="text-slate-500 text-center mt-5 max-w-2xl mx-auto text-lg">
            Vi erbjuder ett brett utbud av eltjänster för både privat och företag.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} text={s.text} />
            ))}
          </div>
        </div>
      </section>

      {/* OFFER / OFFERTFORMULÄR */}
      <section id="offert" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-orange-600 font-extrabold tracking-widest text-xs">OFFERT</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mt-4">Begär offert</h2>
            <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg">
              Fyll i vad du behöver hjälp med så återkommer vi med pris och tid.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10 items-start">
            <div className="rounded-3xl border border-slate-100 bg-[#f8f9fc] p-10 shadow-sm">
              <div className="text-xl font-extrabold text-[#1e3a8a]">Snabb offert</div>
              <div className="mt-2 text-slate-600">Ju mer info du lämnar, desto snabbare och bättre offert.</div>

              <form
                className="mt-8 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();

                  const subject = `Offertförfrågan – ${offer.service}`;
                  const body =
                    `Namn: ${offer.name}
` +
                    `Kontakt (tel/mejl): ${offer.contact}
` +
                    `Adress/Ort: ${offer.address}
` +
                    `Tjänst: ${offer.service}
` +
                    `Hur snabbt: ${offer.urgency}

` +
                    `Beskrivning:
${offer.message}
`;

                  const mailto = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.location.href = mailto;

                  setOfferToast("Tack! Din mejl-app öppnas med färdig offertförfrågan.");
                  setTimeout(() => setOfferToast(""), 3500);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-extrabold text-slate-800">Namn</label>
                    <input
                      value={offer.name}
                      onChange={(e) => setOffer({ ...offer, name: e.target.value })}
                      required
                      placeholder="Ditt namn"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-extrabold text-slate-800">Telefon eller mejl</label>
                    <input
                      value={offer.contact}
                      onChange={(e) => setOffer({ ...offer, contact: e.target.value })}
                      required
                      placeholder="070… / din@mail.se"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-extrabold text-slate-800">Adress / Ort</label>
                  <input
                    value={offer.address}
                    onChange={(e) => setOffer({ ...offer, address: e.target.value })}
                    placeholder="T.ex. Landskrona"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-200"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-extrabold text-slate-800">Vad gäller det?</label>
                    <select
                      value={offer.service}
                      onChange={(e) => setOffer({ ...offer, service: e.target.value })}
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-200"
                    >
                      <option>Elservice / felsökning</option>
                      <option>Elinstallation</option>
                      <option>Belysning</option>
                      <option>Uttag / brytare</option>
                      <option>Nätverk / data</option>
                      <option>Annat</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-extrabold text-slate-800">Hur snabbt?</label>
                    <select
                      value={offer.urgency}
                      onChange={(e) => setOffer({ ...offer, urgency: e.target.value })}
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-200"
                    >
                      <option>Akut (idag)</option>
                      <option>Inom 1–3 dagar</option>
                      <option>Inom 1 vecka</option>
                      <option>Planerat / inte bråttom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-extrabold text-slate-800">Beskriv jobbet</label>
                  <textarea
                    value={offer.message}
                    onChange={(e) => setOffer({ ...offer, message: e.target.value })}
                    required
                    rows={6}
                    placeholder="Skriv kort vad du behöver hjälp med. Ex: 'Byta 6 spotlights i kök, dimmer finns'."
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-orange-600 px-6 py-4 text-sm font-extrabold text-white shadow hover:bg-orange-700"
                >
                  Skicka offertförfrågan
                </button>

                <div className="text-xs text-slate-500">* Formuläret öppnar din mejl-app med en färdig ifylld offertförfrågan.</div>
              </form>

              {offerToast && (
                <div className="mt-4 rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-800">
                  {offerToast}
                </div>
              )}
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-sm">
              <div className="text-xl font-extrabold text-[#1e3a8a]">Tips för snabbare offert</div>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li className="flex gap-3">
                  <div className="h-9 w-9 rounded-2xl bg-orange-50 flex items-center justify-center">
                    <PlugZap className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-800">Skriv antal och plats</div>
                    <div className="mt-1">T.ex. antal uttag/armaturer och vilket rum.</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-9 w-9 rounded-2xl bg-orange-50 flex items-center justify-center">
                    <Wrench className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-800">Beskriv problemet</div>
                    <div className="mt-1">När började felet? Säkring? Jordfelsbrytare?</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-9 w-9 rounded-2xl bg-orange-50 flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-800">Om du vill: modell/produkt</div>
                    <div className="mt-1">T.ex. vilken armatur, dimmer eller utrustning.</div>
                  </div>
                </li>
              </ul>

              <div className="mt-10 rounded-2xl border border-slate-100 bg-[#f8f9fc] p-6">
                <div className="text-sm font-extrabold text-[#1e3a8a]">Snabb kontakt</div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setCallOpen(true)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white border border-slate-100 px-4 py-3 text-slate-700 hover:border-orange-200"
                  >
                    <Phone className="h-4 w-4 text-orange-600" /> Ring
                  </button>
                  <button
                    type="button"
                    onClick={() => setMailOpen(true)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white border border-slate-100 px-4 py-3 text-slate-700 hover:border-orange-200"
                  >
                    <Mail className="h-4 w-4 text-orange-600" /> Mejla
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="om" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-orange-600 font-extrabold tracking-widest text-xs">OM OSS</p>
            <h2 className="text-4xl font-extrabold text-[#1e3a8a] mt-4">VG EL AB</h2>
            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              Vi arbetar med elinstallation, service och nätverk för både privatpersoner och företag. Fokus ligger på
              säkerhet, kvalitet och tydlig kommunikation.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {brand.areas.map((a) => (
                <span
                  key={a}
                  className="rounded-full bg-orange-50 text-orange-700 px-4 py-2 text-xs font-bold border border-orange-100"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-[#f8f9fc] p-10 shadow-sm">
            <div className="text-sm font-extrabold text-[#1e3a8a]">Kontakt</div>
            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-white border border-slate-100 px-5 py-4">
                <div className="text-sm font-extrabold text-slate-800">Sociala medier</div>
                <div className="mt-3">
                  <SocialLinks />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCallOpen(true)}
                className="w-full text-left flex items-center gap-3 rounded-2xl bg-white border border-slate-100 px-5 py-4 hover:border-orange-200"
              >
                <div className="h-10 w-10 rounded-2xl bg-orange-50 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-800">Telefon</div>
                  <div className="text-slate-600">{brand.phone}</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setMailOpen(true)}
                className="w-full text-left flex items-center gap-3 rounded-2xl bg-white border border-slate-100 px-5 py-4 hover:border-orange-200"
              >
                <div className="h-10 w-10 rounded-2xl bg-orange-50 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-800">E-post</div>
                  <div className="text-slate-600">{brand.email}</div>
                </div>
              </button>

              <div className="rounded-2xl bg-white border border-slate-100 px-5 py-4">
                <div className="text-sm font-extrabold text-slate-800">Webb</div>
                <div className="text-slate-600">{brand.site}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="kontakt" className="py-24 bg-[#1e3a8a] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold">Redo att starta ditt projekt?</h2>
          <p className="mt-5 text-white/80 text-lg">Kontakta oss idag så hjälper vi dig.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              onClick={() => setCallOpen(true)}
              className="bg-orange-600 px-7 py-4 rounded-2xl font-extrabold hover:bg-orange-700"
            >
              Ring oss
            </button>
            <button
              type="button"
              onClick={() => setMailOpen(true)}
              className="bg-white text-[#1e3a8a] px-7 py-4 rounded-2xl font-extrabold"
            >
              Skicka mejl
            </button>
          </div>
        </div>
      </section>

      {/* CALL MODAL */}
      {callOpen && (
        <ModalShell onClose={() => setCallOpen(false)} title="Telefonnummer">
          <div className="text-2xl font-extrabold text-slate-900">{brand.phone}</div>
          <div className="mt-2 text-sm text-slate-500">Tryck “Ring nu” på mobilen, eller kopiera numret.</div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={telHref}
              className="inline-flex items-center justify-center rounded-2xl bg-orange-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-orange-700"
            >
              Ring nu
            </a>
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(brand.phone);
                } catch (e) {
                  window.prompt("Kopiera numret:", brand.phone);
                }
              }}
              className="inline-flex items-center justify-center rounded-2xl border-2 border-[#1e3a8a] bg-white px-5 py-3 text-sm font-extrabold text-[#1e3a8a]"
            >
              Kopiera
            </button>
          </div>
        </ModalShell>
      )}

      {/* MAIL MODAL */}
      {mailOpen && (
        <ModalShell onClose={() => setMailOpen(false)} title="E-postadress">
          <div className="text-2xl font-extrabold text-slate-900">{brand.email}</div>
          <div className="mt-2 text-sm text-slate-500">Tryck “Öppna mejl” på mobilen, eller kopiera adressen.</div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={mailHref}
              className="inline-flex items-center justify-center rounded-2xl bg-orange-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-orange-700"
            >
              Öppna mejl
            </a>
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(brand.email);
                } catch (e) {
                  window.prompt("Kopiera mejl:", brand.email);
                }
              }}
              className="inline-flex items-center justify-center rounded-2xl border-2 border-[#1e3a8a] bg-white px-5 py-3 text-sm font-extrabold text-[#1e3a8a]"
            >
              Kopiera
            </button>
          </div>
        </ModalShell>
      )}

      {/* FOOTER */}
      <footer className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left text-sm text-slate-500">
            © {new Date().getFullYear()} {brand.name} • {brand.site}
          </div>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}
