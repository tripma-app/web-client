"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
    <section id="features" ref={sectionRef} className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-[1100px] mx-auto">

        <div
          className={`text-center max-w-[560px] mx-auto mb-12 transition-all duration-700 ${
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
            <em className="italic" style={{ color: "#04CE84" }}>
              nothing you don&apos;t.
            </em>
          </h2>
          <p className="text-[15px] font-light leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Built for the way people actually travel — spontaneous, social, and always on the move.
          </p>
        </div>

        <div
          className={`relative w-full h-[260px] rounded-[16px] overflow-hidden mb-5 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Image
            src="/features-photo.jpg"
            alt="Travel together with Tripma"
            fill
            sizes="100vw"
            className="object-cover object-[center_80%]"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
          />
          <div className="absolute bottom-7 left-7 max-w-[320px]">
            <p className="font-serif text-[1.5rem] font-normal leading-[1.2] text-white tracking-[-0.01em]">
              Every great trip starts with <em className="italic">one good plan.</em>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80 + 300}ms` }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}