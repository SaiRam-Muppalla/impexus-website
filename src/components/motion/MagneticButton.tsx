import { useRef, ReactNode, MouseEvent } from "react";
import { useRichMotion } from "@/hooks/useMotionPrefs";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

/**
 * CTA wrapper that drifts a few pixels toward the cursor and compresses
 * slightly on press. No-ops on touch devices and with reduced motion.
 */
const MagneticButton = ({ children, href, className, strength = 10, onClick, type = "button", ariaLabel }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const rich = useRichMotion();

  const move = (e: MouseEvent<HTMLElement>) => {
    if (!rich || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    ref.current.style.transform = `translate3d(${x * strength}px, ${y * strength * 0.6}px, 0)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  const shared = {
    className: cn("magnetic", className),
    onMouseMove: move,
    onMouseLeave: reset,
    onClick,
    "aria-label": ariaLabel,
    "data-cursor": "cta",
  };

  if (href) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} {...shared}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref as React.RefObject<HTMLButtonElement>} type={type} {...shared}>
      {children}
    </button>
  );
};

export default MagneticButton;
