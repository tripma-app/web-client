"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none z-0" style={{ backgroundColor: "var(--glow)" }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 py-24">

        {/* Left — hook */}
        <div className="flex-1 max-w-[520px] animate-hero-up">
          <h1
            className="font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-normal leading-[1.08] tracking-[-0.02em] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Your next trip,
            <br />
            <span className="italic" style={{ color: "var(--accent)" }}>
              perfectly planned.
            </span>
          </h1>

          <p
            className="text-[clamp(1rem,1.8vw,1.15rem)] font-light leading-relaxed max-w-[420px]"
            style={{ color: "var(--text-muted)" }}
          >
            Tripma turns scattered ideas into seamless journeys — smart itineraries,
            real-time flights, and local secrets all in one place.
          </p>
        </div>

        {/* Right — phone mockup */}
        <div className="flex-1 flex justify-center md:justify-end animate-hero-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative w-[320px] h-[580px] md:w-[380px] md:h-[680px]">
            <Image
              src="/mockup.png"
              alt="Tripma app mockup"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}