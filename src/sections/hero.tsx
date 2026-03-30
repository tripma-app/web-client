"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: { x: number; y: number; r: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        alpha: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
        s.y += s.speed;
        s.alpha += Math.sin(Date.now() / 2000 + s.x) * 0.002;
        if (s.y > canvas.height) {
          s.y = 0;
          s.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen bg-[#080c14] flex items-center justify-center overflow-hidden">
      {/* Starfield canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Glow blobs */}
      <div className="absolute top-[-100px] left-[-150px] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute bottom-[-100px] right-[-150px] w-[600px] h-[600px] rounded-full bg-teal-400/8 blur-[120px] pointer-events-none z-[1]" />

      {/* Main content */}
      <div className="relative z-[2] text-center max-w-[720px] px-6 py-8 animate-hero-up">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/60 text-[13px] px-4 py-1.5 rounded-full mb-10">
          <span className="w-[7px] h-[7px] rounded-full bg-[#3dd9a4] shadow-[0_0_6px_#3dd9a4] animate-pulse" />
          1,247 travelers already waiting
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(3rem,7vw,5.5rem)] font-normal leading-[1.08] tracking-[-0.02em] text-[#f0ece4] mb-6">
          Your next trip,
          <br />
          <span className="italic text-[#7ec8f5]">perfectly planned.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[clamp(1rem,2vw,1.15rem)] font-light text-white/40 leading-relaxed max-w-[520px] mx-auto mb-10">
          Tripma turns scattered ideas into seamless journeys. Smart itineraries,
          real-time flights, and local secrets — all in one place.
        </p>

        {/* Form or success state */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2.5 max-w-[480px] mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/5 border border-white/[0.12] rounded-xl text-[#f0ece4] text-[15px] px-[18px] py-[14px] outline-none placeholder:text-white/25 focus:border-[#7ec8f5]/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-[#7ec8f5] text-[#080c14] rounded-xl text-[15px] font-medium px-6 py-[14px] cursor-pointer whitespace-nowrap transition-all hover:bg-[#a8d9f8] hover:-translate-y-px active:translate-y-0"
            >
              Join the waitlist
            </button>
          </form>
        ) : (
          <div className="inline-flex items-center gap-2.5 bg-[#3dd9a4]/10 border border-[#3dd9a4]/25 text-[#3dd9a4] text-[15px] px-6 py-[14px] rounded-xl">
            <span className="text-lg">✓</span>
            You&apos;re on the list! We&apos;ll be in touch soon.
          </div>
        )}

        <p className="text-[12px] text-white/20 mt-4">No spam. Ever. Unsubscribe anytime.</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-[11px] tracking-[0.15em] uppercase z-[2]">
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        scroll
      </div>
    </section>
  );
}