import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { brand } from "@/app/data/site";

const title = "Elektriker i Helsingborg | Jour & Installation | Västergård El";
const description =
  "Certifierad elektriker i Helsingborg och hela Skåne. Elinstallation, felsökning, belysning, nätverk och jour 24/7. Begär offert idag.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "/",
    siteName: brand.name,
    title,
    description,
  },
};

export default function Page() {
  return <HomePage />;
}
