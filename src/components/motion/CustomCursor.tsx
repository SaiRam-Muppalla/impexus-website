import { useEffect, useRef, useState } from "react";
import { useRichMotion } from "@/hooks/useMotionPrefs";

type Mode = "default" | "cta" | "link" | "media";

/**
 * Lightweight dot + trailing ring cursor. Desktop pointers only, never
 * intercepts clicks, and removed entirely under reduced motion.
 */
const CustomCursor = () => {
  const rich = useRichMotion();
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode>("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!rich) return;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setVisible(true);
      const el = (e.target as HTMLElement)?.closest?.("[data-cursor],a,button,img");
      if (!el) return setMode("default");
      const explicit = el.getAttribute("data-cursor") as Mode | null;
      if (explicit) return setMode(explicit);
      setMode(el.tagName === "IMG" ? "media" : "link");
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.2;
      pos.y += (target.y - pos.y) * 0.2;
      if (dot.current) dot.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      if (ring.current) ring.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(loop);
    document.body.classList.add("has-custom-cursor");

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [rich]);

  if (!rich) return null;

  return (
    <div aria-hidden="true" className={`cursor-layer ${visible ? "opacity-100" : "opacity-0"}`}>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className={`cursor-ring cursor-${mode}`}>
        {mode === "media" && <span className="cursor-label">VIEW</span>}
      </div>
    </div>
  );
};

export default CustomCursor;
