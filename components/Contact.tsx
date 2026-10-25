import { SiGithub, SiLeetcode } from "@icons-pack/react-simple-icons";
import type { CSSProperties } from "react";
import SectionLabel from "./SectionLabel";
import { Download, Star } from "./Icons";
import { Sparkle } from "./Doodles";
import { profile } from "@/lib/site-data";

function SocialTile({
  label,
  href,
  external,
  children,
}: {
  label: string;
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex flex-col items-center gap-2.5"
    >
      <span className="grid h-16 w-16 place-items-center rounded-[1.15rem] border border-white/80 bg-card shadow-[0_16px_24px_-18px_rgba(23,20,15,0.55)] transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:shadow-[0_22px_30px_-18px_rgba(23,20,15,0.6)]">
        {children}
      </span>
      <span className="font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-ink">
        {label}
      </span>
    </a>
  );
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#17140f" />
      <path
        d="M7 10v7M7 7.2v.1M11 17v-4c0-1.7 1-2.8 2.5-2.8S16 11.3 16 13v4"
        stroke="#fbf9f3"
        strokeWidth="1.9"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Smiley() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.5 10h.01M15.5 10h.01M8 14.5c1 1.4 2.3 2 4 2s3-.6 4-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-dashed border-ink/15 py-20 text-center md:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Sparkle className="twinkle absolute left-[12%] top-[20%] h-5 w-5 text-blue/70" />
        <Sparkle
          className="twinkle absolute right-[14%] top-[30%] h-3.5 w-3.5 text-ink/30"
          style={{ "--delay": "1.8s" } as CSSProperties}
        />
        <Star className="absolute bottom-[18%] left-[18%] h-4 w-4 rotate-12 text-yellow" />
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-5">
        <div className="flex justify-center" data-reveal="">
          <SectionLabel number="04">Let&apos;s connect</SectionLabel>
        </div>

        <h2
          data-reveal=""
          className="display mx-auto mt-7 max-w-2xl text-[clamp(2.7rem,6.5vw,5rem)] leading-[0.95]"
        >
          Let&apos;s build something{" "}
          <span className="text-blue">worth remembering.</span>
        </h2>

        <p
          data-reveal=""
          className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted"
        >
          Have a product to build, a flow to fix, or a team that needs an extra
          pair of hands? I&apos;m one email away.
        </p>

        <div data-reveal="" className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            className="sticker px-6 py-3.5 font-mono text-xs tracking-[0.04em] sm:text-sm"
          >
            {profile.email}
            <span className="grid h-5 w-5 place-items-center rounded-full bg-white/15">
              ↗
            </span>
          </a>
        </div>

        <div
          data-reveal=""
          className="mt-10 flex flex-wrap items-start justify-center gap-6 sm:gap-8"
        >
          <SocialTile label="Résumé" href="/resume.pdf">
            <Download className="h-7 w-7" />
          </SocialTile>
          <SocialTile
            label="LinkedIn"
            href="https://linkedin.com/in/shambhabya-medhi"
            external
          >
            <LinkedInMark />
          </SocialTile>
          <SocialTile
            label="GitHub"
            href="https://github.com/shambhabya"
            external
          >
            <SiGithub size={28} color="currentColor" aria-hidden="true" />
          </SocialTile>
          <SocialTile
            label="LeetCode"
            href="https://leetcode.com/shambhabyamedhi"
            external
          >
            <SiLeetcode size={28} color="currentColor" aria-hidden="true" />
          </SocialTile>
        </div>

        <div data-reveal="" className="mt-14 flex justify-center">
          <span className="sticker sticker-blue rotate-[-2deg] px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em]">
            Thanks for scrolling!
            <Smiley />
          </span>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 font-mono text-[9px] uppercase tracking-[0.13em] text-muted sm:flex-row">
          <p>© 2026 {profile.name}</p>
          <p>{profile.location} · IST</p>
          <p>Built with Next.js</p>
        </div>

        <div className="mt-5 flex justify-center">
          <a
            href="https://yashb.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.13em] text-muted transition-colors hover:border-blue/40 hover:text-blue"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
            Design inspired by yashb.xyz
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
