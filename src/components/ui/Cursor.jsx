"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoverType, setHoverType] = useState(null);
  const [pressed, setPressed] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const followerX = useSpring(mouseX, {
    stiffness: 240,
    damping: 28,
    mass: 0.45,
  });

  const followerY = useSpring(mouseY, {
    stiffness: 240,
    damping: 28,
    mass: 0.45,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const updateDevice = () => {
      setEnabled(mediaQuery.matches);
    };

    updateDevice();
    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let frameId = null;
    let latestX = -100;
    let latestY = -100;

    const handleMouseMove = (event) => {
      latestX = event.clientX;
      latestY = event.clientY;

      if (frameId) return;

      frameId = requestAnimationFrame(() => {
        mouseX.set(latestX);
        mouseY.set(latestY);
        frameId = null;
      });
    };

    const handleMouseDown = () => {
      setPressed(true);
    };

    const handleMouseUp = () => {
      setPressed(false);
    };

    const handlePointerOver = (event) => {
      const interactive = event.target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-hover"
      );

      if (!interactive) {
        setHoverType(null);
        return;
      }

      if (interactive.matches("input, textarea, select")) {
        setHoverType("input");
        return;
      }

      setHoverType(
        interactive.dataset.cursor ||
          (interactive.tagName === "A" ? "link" : "button")
      );
    };

    const handlePointerOut = (event) => {
      const interactive = event.target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-hover"
      );

      if (!interactive) return;

      const related = event.relatedTarget;

      if (related && interactive.contains(related)) {
        return;
      }

      setHoverType(null);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    window.addEventListener("mousedown", handleMouseDown, {
      passive: true,
    });

    window.addEventListener("mouseup", handleMouseUp, {
      passive: true,
    });

    document.addEventListener("pointerover", handlePointerOver, {
      passive: true,
    });

    document.addEventListener("pointerout", handlePointerOut, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  const isInteractive = Boolean(hoverType);
  const isInput = hoverType === "input";

  return (
    <>
      {/* Soft Follower */}
      <motion.div
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isInteractive ? 74 : 42,
          height: isInteractive ? 74 : 42,
          opacity: pressed ? 0.35 : isInteractive ? 0.38 : 0.58,
          scale: pressed ? 0.82 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 24,
          mass: 0.45,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-sky-400/70 bg-sky-500/15 backdrop-blur-[2px]"
      />

      {/* Outer Glow */}
      <motion.div
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isInteractive ? 105 : 62,
          height: isInteractive ? 105 : 62,
          opacity: isInteractive ? 0.12 : 0.08,
          scale: pressed ? 0.75 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 26,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9997] rounded-full bg-sky-400 blur-xl"
      />

      {/* Main Cursor */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isInteractive ? 10 : 14,
          height: isInteractive ? 10 : 14,
          scale: pressed ? 0.65 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-yellow-300 shadow-[0_0_16px_rgba(253,224,71,0.95)]"
      />

      {/* Interactive Label */}
      <motion.div
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={false}
        animate={{
          opacity: isInteractive && !isInput ? 1 : 0,
          scale: isInteractive && !isInput ? 1 : 0.7,
        }}
        transition={{
          duration: 0.16,
          ease: "easeOut",
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] flex items-center justify-center"
      >
        <span className="font-mono text-[8px] font-bold uppercase tracking-[1.5px] text-sky-500">
          {hoverType === "link" ? "Open" : "Click"}
        </span>
      </motion.div>
    </>
  );
}

<a
  href="/projects"
  data-cursor="View"
  className="cursor-hover"
>
  Projects
</a>
