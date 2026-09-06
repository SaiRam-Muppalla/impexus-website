import { useEffect, useRef } from "react";
import { usePrefersReducedMotion, useFinePointer } from "@/hooks/useMotionPrefs";

type Node = { x: number; y: number; vx: number; vy: number; z: number };

/**
 * Canvas "learning network": slow-drifting nodes with thin connecting
 * lines and a very subtle parallax response to the pointer. Sized to the
 * hero, capped node count, paused off-screen and under reduced motion.
 */
const HeroBackdrop = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();
  const fine = useFinePointer();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let frame = 0;
    let running = true;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 768 ? 22 : 42;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        z: 0.4 + Math.random() * 0.6,
      }));
    };

    const onPointer = (e: PointerEvent) => {
      if (!fine) return;
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 24;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 16;
    };

    const draw = () => {
      if (!running) return;
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;
      }

      const maxDist = width < 768 ? 110 : 150;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const ax = a.x + pointer.x * a.z;
        const ay = a.y + pointer.y * a.z;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const bx = b.x + pointer.x * b.z;
          const by = b.y + pointer.y * b.z;
          const d = Math.hypot(ax - bx, ay - by);
          if (d > maxDist) continue;
          ctx.strokeStyle = `rgba(255,255,255,${(1 - d / maxDist) * 0.14})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
        ctx.fillStyle = `rgba(255,255,255,${0.18 + a.z * 0.22})`;
        ctx.beginPath();
        ctx.arc(ax, ay, a.z * 1.7, 0, Math.PI * 2);
        ctx.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    resize();
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running) frame = requestAnimationFrame(draw);
      else cancelAnimationFrame(frame);
    });
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [reduced, fine]);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default HeroBackdrop;
