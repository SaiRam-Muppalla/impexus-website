import { ReactNode, ElementType } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Milliseconds of delay before this element starts revealing. */
  delay?: number;
  className?: string;
  as?: ElementType;
  threshold?: number;
  id?: string;
};

/**
 * Scroll reveal primitive: opacity + upward translate + faint blur,
 * using the shared premium easing. Runs once per element.
 */
const Reveal = ({ children, delay = 0, className, as: Tag = "div", threshold = 0.12, id }: RevealProps) => {
  const { ref, isInView } = useInView(threshold);

  return (
    <Tag
      id={id}
      ref={ref}
      className={cn("reveal", isInView && "is-visible", className)}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
