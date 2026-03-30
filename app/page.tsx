import Hero from "@/sections/hero";
import Features from "@/sections/feature";
import Waitlist from "@/sections/waitlist";
import FAQ from "@/sections/faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <FAQ />
      <Waitlist />
    </main>
  );
}