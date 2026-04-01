"use client";

import { useState } from "react";
import faq from "@/data/faq.json";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6" style={{ backgroundColor: "var(--bg-subtle)" }}>
      <div className="max-w-[720px] mx-auto">

        <div className="text-center mb-16">
          <p
            className="text-[12px] font-medium tracking-[0.18em] uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            FAQ
          </p>
          <h2
            className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.02em]"
            style={{ color: "var(--text-primary)" }}
          >
            Got questions?
            <br />
            <em className="italic" style={{ color: "#04CE84" }}>We got answers.</em>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: "var(--bg)",
                border: "1px solid var(--border)",
              }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-5 gap-4">
                <p
                  className="text-[15px] font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.question}
                </p>
                <div
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300"
                  style={{
                    backgroundColor: "var(--bg-subtle)",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </div>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <p
                  className="px-6 pb-5 text-[14px] font-light leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}