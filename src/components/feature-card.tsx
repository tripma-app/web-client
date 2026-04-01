import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export default function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <div className="relative rounded-[16px] overflow-hidden h-[320px] flex flex-col justify-end">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }}
      />
      <div className="relative z-10 p-6 flex flex-col gap-2">
        <h3 className="text-[17px] font-medium text-white tracking-[-0.01em]">
          {title}
        </h3>
        <p className="text-[13px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          {description}
        </p>
      </div>
    </div>
  );
}