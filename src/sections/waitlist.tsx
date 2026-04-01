"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useCountUp(target: number | null, duration = 1200) {
  const [display, setDisplay] = useState(0);
  const prev = useRef(0);

  useEffect(() => {
    if (target === null) return;
    const start = prev.current;
    const diff = target - start;
    if (diff === 0) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) requestAnimationFrame(tick);
      else prev.current = target;
    };
    requestAnimationFrame(tick);
  }, [target, duration]);

  return display;
}

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [count, setCount] = useState<number | null>(null);
  const displayed = useCountUp(count);

  useEffect(() => {
    fetch("/api/waitlist/count")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

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
      setCount((prev) => (prev !== null ? prev + 1 : 1));
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden"
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

      <div className="relative max-w-[900px] mx-auto w-full flex flex-col md:flex-row items-center gap-16">

        <div className="flex-1 text-center md:text-left">
          {count !== null && (
            <div className="mb-8">
              <p
                className="font-serif text-[clamp(4rem,10vw,7rem)] font-normal leading-none tracking-[-0.03em]"
                style={{ color: "var(--text-primary)" }}
              >
                {displayed.toLocaleString()}
              </p>
              <p className="text-[18px] font-medium mt-3" style={{ color: "var(--text-primary)" }}>
                {count === 1 ? "person" : "people"} on the waitlist
              </p>
            </div>
          )}

          <h2
            className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Secure your spot
            <br />
            <span className="italic" style={{ color: "var(--accent)" }}>
              before launch.
            </span>
          </h2>

          <p className="text-[15px] font-light leading-relaxed max-w-[380px]" style={{ color: "var(--text-muted)" }}>
            We are putting the finishing touches on something special.
            Drop your email and we will reach out the moment we launch.
          </p>
        </div>

        <div
          className="flex-1 w-full rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="relative w-full h-[240px]">
            <Image
              src="/waitlist-photo.jpg"
              alt="Travel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.35) 100%)" }}
            />
          </div>

          <div className="p-7 flex flex-col gap-5" style={{ backgroundColor: "var(--bg-subtle)" }}>
            <div>
              <p className="text-[16px] font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                Reserve your spot
              </p>
              <p className="text-[13px] font-light" style={{ color: "var(--text-muted)" }}>
                Be notified the day we launch. No spam, ever.
              </p>
            </div>

            {status !== "success" ? (
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="w-full rounded-xl text-[15px] px-[18px] py-[14px] outline-none transition-colors disabled:opacity-50"
                  style={{
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
                <button
                  type="button"
                  onClick={handleSubmit as never}
                  disabled={status === "loading" || !email.trim()}
                  className="w-full rounded-xl text-[15px] font-medium px-6 py-[14px] cursor-pointer transition-all hover:-translate-y-px active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{ backgroundColor: "var(--accent)", color: "var(--accent-text)" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--accent-hover)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--accent)")}
                >
                  {status === "loading" ? "Joining..." : "Notify me"}
                </button>
              </div>
            ) : (
              <div
                className="flex items-center gap-2.5 text-[15px] px-6 py-[14px] rounded-xl"
                style={{
                  backgroundColor: "var(--success-bg)",
                  border: "1px solid var(--success-border)",
                  color: "var(--success)",
                }}
              >
                <span className="text-lg">✓</span>
                You are on the list! We will be in touch soon.
              </div>
            )}

            {status === "error" && (
              <p className="text-[13px] text-red-500">{errorMsg}</p>
            )}

            <p className="text-[12px]" style={{ color: "var(--text-faint)" }}>
              No spam. Ever. Unsubscribe anytime.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}