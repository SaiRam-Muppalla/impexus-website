import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

/** Fades + lifts each route on entry, so page-to-page navigation feels continuous. */
const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-fade">
      {children}
    </div>
  );
};

export default PageTransition;
