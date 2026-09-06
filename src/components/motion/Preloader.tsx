import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/useMotionPrefs";

const SESSION_KEY = "impexus-intro-shown";

/**
 * Short branded intro (~1s): the logo appears, a light sweep crosses it,
 * then the layer lifts away. Shown once per browser session, skipped
 * entirely under reduced motion.
 */
const Preloader = () => {
  const reduced = usePrefersReducedMotion();
  const [state, setState] = useState<"hidden" | "playing" | "leaving">("hidden");

  useEffect(() => {
    if (reduced) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setState("playing");
    const leave = window.setTimeout(() => setState("leaving"), 850);
    const done = window.setTimeout(() => setState("hidden"), 1450);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(done);
    };
  }, [reduced]);

  if (state === "hidden") return null;

  return (
    <div className={`preloader ${state === "leaving" ? "is-leaving" : ""}`} aria-hidden="true">
      <div className="preloader-mark">
        <img src="/impexus-logo.jpg" alt="" width="990" height="461" className="h-12 md:h-14 w-auto object-contain" />
        <span className="preloader-sweep" />
      </div>
    </div>
  );
};

export default Preloader;
