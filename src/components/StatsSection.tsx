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
    <section ref={ref} className="py-16 px-6 bg-primary">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-2 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${i < stats.length - 1 ? "md:border-r md:border-primary-foreground/20" : ""}`}
            style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
          >
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-1">
              <stat.icon size={28} className="text-primary-foreground" />
            </div>
            <p className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} start={isInView} />
            </p>
            <p className="text-sm text-primary-foreground/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
