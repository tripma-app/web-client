"use client";

import { useEffect, useRef, useState } from "react";
import features from "@/data/features.json";

export default function Features() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#080c14] py-32 px-6 overflow-hidden">

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div
          className={`text-center max-w-[580px] mx-auto mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[12px] font-medium tracking-[0.18em] uppercase text-[#7ec8f5] mb-5">
            What Tripma does
          </p>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[#f0ece4] mb-5">
            Everything you need,
            <br />
            <em className="italic text-[#f0ece4]/40">nothing you don&apos;t.</em>
          </h2>
          <p className="text-base font-light text-white/40 leading-relaxed">
            Built for the way people actually travel — spontaneous, social, and always on the move.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/[0.06] rounded-[20px] overflow-hidden divide-y divide-white/[0.06] sm:divide-y-0">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative bg-[#080c14] p-10 hover:bg-[#0d1420] transition-all duration-500 border-white/[0.06]
                sm:[&:nth-child(-n+3)]:border-b sm:[&:nth-child(-n+3)]:border-white/[0.06]
                lg:[&:nth-child(-n+3)]:border-b lg:[&:nth-child(-n+3)]:border-white/[0.06]
                lg:border-r lg:last:border-r-0 lg:[&:nth-child(3)]:border-r-0
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
              style={{
                transitionDelay: visible ? `${i * 80}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl border flex items-center justify-center text-lg mb-6 bg-white/[0.02]"
                style={{ color: feature.accent, borderColor: `${feature.accent}22` }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#f0ece4] text-[15px] font-medium tracking-[-0.01em] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] font-light text-white/38 leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 opacity-60"
                style={{ background: feature.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}