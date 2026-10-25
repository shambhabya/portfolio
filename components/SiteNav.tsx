"use client";

import { useEffect, useState } from "react";
import { navLinks, profile, socials } from "@/lib/site-data";
import { ArrowUpRight, Star } from "./Icons";
import { Sparkle as SparkleDoodle } from "./Doodles";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -52% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled || open
            ? "border-b border-line/70 bg-cream/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-8">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            aria-label="Shambhabya Medhi — back to top"
            className="group relative flex items-center gap-3"
          >
            <span className="grid h-11 w-11 -rotate-6 place-items-center rounded-full border-2 border-ink bg-yellow shadow-[0_7px_0_-2px_rgba(23,20,15,0.28)] transition-transform duration-300 group-hover:rotate-0 group-hover:-translate-y-0.5">
              <span className="font-display text-base leading-none">SM</span>
            </span>
            <span className="hidden font-hand text-lg tracking-tight md:block">
              Shambhabya
            </span>
            <SparkleDoodle className="absolute -right-2 -top-2 h-3.5 w-3.5 text-blue transition-transform duration-500 group-hover:rotate-45" />
          </a>

          <nav
            aria-label="Main"
            className="nav-pill absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 rounded-full p-1.5 md:flex"
          >
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`nav-link rounded-full px-4 py-2 text-[0.82rem] font-medium ${
                    isActive
                      ? "bg-ink text-cream shadow-[0_6px_14px_-8px_rgba(23,20,15,0.8)]"
                      : "text-ink/65 hover:bg-white/60 hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="sticker px-5 py-2.5 text-xs font-semibold"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </span>
            <div className="md:hidden">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="sticker px-5 py-2.5 text-xs font-semibold"
            >
              {open ? "Close" : "Menu"}
              <span className="relative block h-3 w-3.5">
                <span
                  className={`absolute left-0 top-0.5 block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-cream px-6 pb-10 pt-28 transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile">
          <ul className="border-t border-line">
            {navLinks.map((link, index) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between py-5 transition-all duration-500 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open ? `${70 + index * 50}ms` : "0ms",
                  }}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] text-blue">
                      0{index + 1}
                    </span>
                    <span className="display text-4xl">{link.label}</span>
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-ink/35 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 flex flex-col gap-7">
          <a
            href={`mailto:${profile.email}`}
            className="hand self-start text-lg underline decoration-blue decoration-wavy underline-offset-4"
          >
            {profile.email}
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-blue"
              >
                {social.label}
              </a>
            ))}
          </div>
          <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
            <Star className="h-3 w-3 text-blue" />
            {profile.location} · IST
          </p>
        </div>
      </div>
    </>
  );
}
