"use client";

import { useEffect } from "react";

export default function MotionRoot() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /* Reveal on scroll -------------------------------------------------- */
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], .split-text"),
    );

    let revealObserver: IntersectionObserver | undefined;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );

      targets.forEach((el) => revealObserver?.observe(el));
    }

    /* Scroll progress --------------------------------------------------- */
    const progress = document.getElementById("scroll-progress");
    let scrollFrame = 0;

    const updateProgress = () => {
      scrollFrame = 0;
      if (!progress) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
    };

    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    /* Custom cursor ----------------------------------------------------- */
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let removeCursor: (() => void) | undefined;

    if (finePointer && !reduceMotion) {
      root.classList.add("cursor-ready");

      const star = document.querySelector<HTMLElement>(".cursor-star");
      const halo = document.querySelector<HTMLElement>(".cursor-halo");
      let revealed = false;

      const revealCursor = () => {
        if (revealed || !star || !halo) return;
        revealed = true;
        star.style.opacity = "1";
        halo.style.opacity = "1";
      };

      const onMove = (event: PointerEvent) => {
        const x = event.clientX;
        const y = event.clientY;
        revealCursor();
        if (star) {
          star.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        if (halo) {
          halo.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      };

      const onOver = (event: Event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const interactive = target.closest(
          'a, button, input, textarea, select, [data-cursor="hover"]',
        );
        root.classList.toggle("is-hovering", Boolean(interactive));
      };

      const onLeave = () => {
        root.classList.remove("is-hovering");
      };

      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerover", onOver, { passive: true });
      document.documentElement.addEventListener("mouseleave", onLeave);

      removeCursor = () => {
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerover", onOver);
        document.documentElement.removeEventListener("mouseleave", onLeave);
        root.classList.remove("cursor-ready", "is-hovering");
      };
    }

    return () => {
      revealObserver?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      removeCursor?.();
    };
  }, []);

  return (
    <>
      <div
        id="scroll-progress"
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[95] h-[2px] origin-left scale-x-0 bg-blue"
      />
      <div className="cursor-halo" aria-hidden="true" />
      <div className="cursor-star" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c.7 7.1 4.9 11.3 12 12-7.1.7-11.3 4.9-12 12-.7-7.1-4.9-11.3-12-12C7.1 11.3 11.3 7.1 12 0Z" />
        </svg>
      </div>
    </>
  );
}
