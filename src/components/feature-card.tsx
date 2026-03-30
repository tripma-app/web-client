import { useMemo } from "react";

const gradients = [
  "linear-gradient(135deg, #fff1ee 0%, #ffd6c8 50%, #F1501C22 100%)",
  "linear-gradient(135deg, #f5eeff 0%, #e0c8ff 50%, #A253FE22 100%)",
  "linear-gradient(135deg, #edfff8 0%, #c2f5e2 50%, #04CE8422 100%)",
  "linear-gradient(135deg, #eaf9ff 0%, #c2ecff 50%, #0FBCFE22 100%)",
  "linear-gradient(135deg, #fff1ee 0%, #fde0d5 40%, #ffd6f5 100%)",
  "linear-gradient(135deg, #edfff8 0%, #d5f0ff 50%, #0FBCFE22 100%)",
];

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const gradient = useMemo(() => gradients[index % gradients.length], [index]);

  return (
    <div
      className="relative rounded-[28px] p-8 flex flex-col gap-5 overflow-hidden"
      style={{
        background: gradient,
        boxShadow: "0 2px 24px 0 rgba(0,0,0,0.06), 0 1px 3px 0 rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="absolute top-[-40px] left-[-40px] w-[180px] h-[180px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)" }}
      />
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
        style={{ backgroundColor: "rgba(255,255,255,0.65)" }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[17px] font-medium tracking-[-0.01em]" style={{ color: "#1a1a1a" }}>
          {title}
        </h3>
        <p className="text-[14px] font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.5)" }}>
          {description}
        </p>
      </div>
    </div>
  );
}