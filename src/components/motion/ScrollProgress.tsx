import { useEffect, useState } from "react";

/** Hairline reading-progress bar pinned to the top of the viewport. */
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[70] pointer-events-none" aria-hidden="true">
      <div
        className="h-full bg-primary origin-left"
        style={{ transform: `scaleX(${progress})`, width: "100%" }}
      />
    </div>
  );
};

export default ScrollProgress;
