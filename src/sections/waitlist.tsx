"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="relative bg-[#080c14] py-32 px-6 overflow-hidden">

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#7ec8f5]/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[520px] mx-auto text-center">

        {/* Headline */}
        <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[#f0ece4] mb-4">
          Be the first to
          <br />
          <span className="italic text-[#7ec8f5]">explore Tripma.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[15px] font-light text-white/40 leading-relaxed mb-10">
          We&apos;re putting the finishing touches on something special.
          Drop your email and we&apos;ll reach out the moment we launch.
        </p>

        {/* Form */}
        {status !== "success" ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2.5"
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
              className="flex-1 bg-white/5 border border-white/[0.12] rounded-xl text-[#f0ece4] text-[15px] px-[18px] py-[14px] outline-none placeholder:text-white/25 focus:border-[#7ec8f5]/50 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#7ec8f5] text-[#080c14] rounded-xl text-[15px] font-medium px-6 py-[14px] cursor-pointer whitespace-nowrap transition-all hover:bg-[#a8d9f8] hover:-translate-y-px active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === "loading" ? "Joining..." : "Notify me"}
            </button>
          </form>
        ) : (
          <div className="inline-flex items-center gap-2.5 bg-[#3dd9a4]/10 border border-[#3dd9a4]/25 text-[#3dd9a4] text-[15px] px-6 py-[14px] rounded-xl">
            <span className="text-lg">✓</span>
            You&apos;re on the list! We&apos;ll be in touch soon.
          </div>
        )}

        {/* Error message */}
        {status === "error" && (
          <p className="mt-3 text-[13px] text-red-400/80">{errorMsg}</p>
        )}

        <p className="text-[12px] text-white/20 mt-4">No spam. Ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}