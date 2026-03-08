import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Users, GraduationCap, Building2, Handshake } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Students Trained" },
  { icon: GraduationCap, value: 95, suffix: "%", label: "Placement Rate" },
  { icon: Building2, value: 20, suffix: "+", label: "College Partners" },
  { icon: Handshake, value: 50, suffix: "+", label: "Industry Programs" },
];

function AnimatedCounter({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return <span>{count}{suffix}</span>;
}

const StatsSection = () => {
  const { ref, isInView } = useInView(0.3);

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-primary/30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-3 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <stat.icon size={26} className="text-primary-foreground/80" />
            </div>
            <p className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground tracking-tight">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} start={isInView} />
            </p>
            <p className="text-sm text-primary-foreground/50 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
