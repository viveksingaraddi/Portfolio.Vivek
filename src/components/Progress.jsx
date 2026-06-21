import { motion, useScroll } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function Progress() {
  const { scrollYProgress } =
    useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-black origin-left z-50"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
      }}
    />
  );
}
