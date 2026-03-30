import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/tripma.app",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/tripma",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#080c14] border-t border-white/[0.06]">
      <div className="max-w-[1100px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/name.svg"
            alt="Tripma"
            width={0}
            height={22}
            className="h-[22px] w-auto opacity-60 hover:opacity-90 transition-opacity duration-200"
          />
        </Link>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-white/30 hover:text-white/70 transition-colors duration-200"
            >
              {s.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[12px] text-white/20">
          © {new Date().getFullYear()} Tripma
        </p>

      </div>
    </footer>
  );
}