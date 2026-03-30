"use client";

import { useEffect, useRef, useState } from "react";
import FeatureCard from "@/components/feature-card";
import features from "@/data/features.json";

export default function Features() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-[1100px] mx-auto">
        <div
          className={`text-center max-w-[560px] mx-auto mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[12px] font-medium tracking-[0.18em] uppercase mb-4" style={{ color: "var(--accent)" }}>
            What Tripma does
          </p>
          <h2
            className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Everything you need,{" "}
            <em className="italic" style={{ color: "var(--text-muted)" }}>
              nothing you don&apos;t.
            </em>
          </h2>
          <p className="text-[15px] font-light leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Built for the way people actually travel — spontaneous, social, and always on the move.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={i}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}