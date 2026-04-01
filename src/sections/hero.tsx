"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero-bg.mp4"
      />

      <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)" }} />

      <div className="relative z-[2] text-center max-w-[780px] px-6 animate-hero-up">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 text-[13px] px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-[6px] h-[6px] rounded-full bg-[#04CE84] shadow-[0_0_6px_#04CE84] animate-pulse" />
          Join the waitlist — launching soon
        </div>

        <h1 className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-white mb-6">
          Plan. Collaborate.
          <br />
          <span className="italic" style={{ color: "#04CE84" }}>Explore.</span>
        </h1>

        <p className="text-[clamp(1rem,2vw,1.2rem)] font-light text-white/55 leading-relaxed max-w-[520px] mx-auto mb-10">
          Build trips together in real time. Discover what others created. Make it yours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="#waitlist"
            onClick={(e) => handleScroll(e, "#waitlist")}
            className="flex items-center gap-2 text-[15px] font-medium px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-px active:translate-y-0"
            style={{ backgroundColor: "var(--accent)", color: "var(--accent-text)" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--accent)")}
          >
            Join the waitlist
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="#features"
            onClick={(e) => handleScroll(e, "#features")}
            className="text-[15px] font-light text-white/55 hover:text-white/80 transition-colors duration-200 px-4 py-4"
          >
            See features →
          </Link>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-[11px] tracking-[0.15em] uppercase z-[2] transition-opacity duration-500 ${
          atTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent animate-pulse" />
        scroll
      </div>
    </section>
  );
}