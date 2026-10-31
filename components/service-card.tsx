import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  href: string;
};

export default function ServiceCard({ icon: Icon, title, text, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm p-10 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
    >
      <div className="h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center">
        <Icon className="h-7 w-7 text-orange-600" />
      </div>
      <h3 className="mt-7 text-2xl font-extrabold text-[#1e3a8a]">{title}</h3>
      <p className="mt-4 text-slate-500 leading-relaxed text-lg flex-1">{text}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-orange-600">
        Läs mer
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
