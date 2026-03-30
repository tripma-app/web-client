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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080c14]/80 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/name.svg"
            alt="Tripma"
            width={0}
            height={24}
            className="h-6 w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] text-white/45 hover:text-white/80 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#waitlist"
            className="text-[14px] text-white/45 hover:text-white/80 transition-colors duration-200"
          >
            Sign in
          </Link>
          <Link
            href="#waitlist"
            className="bg-[#7ec8f5] text-[#080c14] text-[14px] font-medium px-4 py-2 rounded-lg hover:bg-[#a8d9f8] transition-all duration-200 hover:-translate-y-px active:translate-y-0"
          >
            Join waitlist
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-white/50 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block h-px w-5 bg-white/50 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-white/50 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 border-b border-white/[0.06]" : "max-h-0"
        } bg-[#080c14]/95 backdrop-blur-md`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] text-white/50 hover:text-white/80 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#7ec8f5] text-[#080c14] text-[14px] font-medium px-4 py-2.5 rounded-lg text-center hover:bg-[#a8d9f8] transition-colors duration-200"
          >
            Join waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}