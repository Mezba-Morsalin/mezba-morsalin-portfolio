"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 20,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleEnter = () => setHover(true);
    const handleLeave = () => setHover(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll(
      "a, button, .cursor-hover"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Blue Follower */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hover ? 90 : 48,
          height: hover ? 90 : 48,
          scale: hover ? 1.15 : 1,
          opacity: hover ? 0.45 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 24,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-blue-500 bg-blue-600/25 backdrop-blur-md"
      />

      {/* Yellow Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[6px] w-[6px] rounded-full bg-yellow-300 shadow-[0_0_15px_rgba(253,224,71,1)]"
      />
    </>
  );
}