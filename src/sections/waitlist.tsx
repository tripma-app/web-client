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
    <section
      id="waitlist"
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--border), transparent)" }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: "var(--glow)" }}
      />

      <div className="relative max-w-[520px] mx-auto text-center">
        <h2
          className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.02em] mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Be the first to
          <br />
          <span className="italic" style={{ color: "var(--accent)" }}>
            explore Tripma.
          </span>
        </h2>

        <p
          className="text-[15px] font-light leading-relaxed mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          We&apos;re putting the finishing touches on something special.
          Drop your email and we&apos;ll reach out the moment we launch.
        </p>

        {status !== "success" ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
              className="flex-1 rounded-xl text-[15px] px-[18px] py-[14px] outline-none transition-colors disabled:opacity-50"
              style={{
                backgroundColor: "var(--bg-subtle)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-xl text-[15px] font-medium px-6 py-[14px] cursor-pointer whitespace-nowrap transition-all hover:-translate-y-px active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--accent-text)",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--accent-hover)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--accent)")}
            >
              {status === "loading" ? "Joining..." : "Notify me"}
            </button>
          </form>
        ) : (
          <div
            className="inline-flex items-center gap-2.5 text-[15px] px-6 py-[14px] rounded-xl"
            style={{
              backgroundColor: "var(--success-bg)",
              border: "1px solid var(--success-border)",
              color: "var(--success)",
            }}
          >
            <span className="text-lg">✓</span>
            You&apos;re on the list! We&apos;ll be in touch soon.
          </div>
        )}

        {status === "error" && (
          <p className="mt-3 text-[13px] text-red-500">{errorMsg}</p>
        )}

        <p className="text-[12px] mt-4" style={{ color: "var(--text-faint)" }}>
          No spam. Ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}