import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { brand } from "@/app/data/site";
import JsonLd from "@/components/json-ld";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = "Elektriker i Helsingborg | Jour & Installation | Västergård El";
const defaultDescription =
  "Certifierad elektriker i Helsingborg och hela Skåne. Elinstallation, felsökning, belysning, nätverk och jour 24/7. Begär offert idag.";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: defaultTitle,
    template: "%s | Västergård El",
  },
  description: defaultDescription,
  applicationName: "VG EL AB",
  authors: [{ name: "VG EL AB", url: brand.url }],
  creator: "VG EL AB",
  publisher: "VG EL AB",
  category: "Elektriker",
  keywords: [
    "elektriker Helsingborg",
    "eljour Helsingborg",
    "elfirma Helsingborg",
    "elinstallation Helsingborg",
    "felsökning el Helsingborg",
    "elektriker Skåne",
  ],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "/",
    siteName: "VG EL AB",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "LF_jTp5FJqZihRmKmW8AW98wYTkFGPcMfVYSw3-A4AE",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${brand.url}/#organization`,
  name: brand.name,
  alternateName: brand.displayName,
  url: brand.url,
  telephone: brand.phoneHref,
  email: brand.email,
  description: defaultDescription,
  taxID: brand.orgNr,
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address.street,
    postalCode: brand.address.postal,
    addressLocality: brand.address.city,
    addressRegion: brand.address.region,
    addressCountry: brand.address.country,
  },
  areaServed: brand.areas.map((area) =>
    area === "Skåne"
      ? { "@type": "AdministrativeArea", name: area }
      : { "@type": "City", name: area }
  ),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  image: `${brand.url}/opengraph-image`,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${brand.url}/#website`,
  name: `${brand.name} – ${brand.displayName}`,
  url: brand.url,
  inLanguage: "sv-SE",
  publisher: { "@id": `${brand.url}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f8f9fc] antialiased`}
      >
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-[#1e3a8a] focus:shadow-lg"
        >
          Hoppa till innehåll
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
