import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }} className="bg-[var(--bg)]">
      <div className="max-w-[1100px] mx-auto px-6 py-8 flex items-center justify-between">
        <p className="text-[12px]" style={{ color: "var(--text-primary)" }}>
          © 2026 Tripma
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="https://instagram.com/tripma.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-opacity duration-200 hover:opacity-60"
          >
            <Image src="/icons/instagram.svg" alt="Instagram" width={28} height={28} />
          </Link>
          <Link
            href="https://linkedin.com/company/tripmaapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity duration-200 hover:opacity-60"
          >
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}