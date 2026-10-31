import { Facebook, Instagram, Linkedin } from "lucide-react";
import { brand } from "@/app/data/site";

export default function SocialLinks({ className = "" }: { className?: string }) {
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
