"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <Image
            src="/name.svg"
            alt="Tripma"
            width={0}
            height={24}
            className="h-6 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="#waitlist"
            className="flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-px active:translate-y-0"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-text)",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--accent)")}
          >
            <span>Get early access</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} style={{ backgroundColor: "var(--text-primary)" }} />
          <span className={`block h-px w-5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ backgroundColor: "var(--text-primary)" }} />
          <span className={`block h-px w-5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} style={{ backgroundColor: "var(--text-primary)" }} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}
        style={{
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: menuOpen ? "1px solid var(--border)" : "none",
        }}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 text-[14px] font-medium px-4 py-2.5 rounded-lg transition-colors duration-200"
            style={{ backgroundColor: "var(--accent)", color: "var(--accent-text)" }}
          >
            <span>Get early access</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}