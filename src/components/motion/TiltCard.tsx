import { useRef, ReactNode, MouseEvent } from "react";
import { useRichMotion } from "@/hooks/useMotionPrefs";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  max?: number;
};

/**
 * Subtle perspective tilt (max ±3deg) plus a light highlight that follows
 * the cursor. Purely presentational; disabled on touch / reduced motion.
 */
const TiltCard = ({ children, className, style, max = 3 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const rich = useRichMotion();

  const move = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!rich || !el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max * 2}deg) rotateY(${(px - 0.5) * max * 2}deg) translate3d(0,-4px,0)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      className={cn("tilt-card", className)}
      style={style}
      onMouseMove={move}
      onMouseLeave={reset}
    >
      {children}
    </div>
  );
};

export default TiltCard;
