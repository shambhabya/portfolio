import type { CSSProperties } from "react";
import { ArrowDown, ArrowUpRight, Download } from "./Icons";
import {
  ArrowDoodle,
  Bomb,
  CautionSign,
  Cone,
  Crown,
  SmileArcs,
  Sparkle,
  Squiggle,
} from "./Doodles";
import { FanArt } from "./ProjectArt";

const fanCards = [
  { title: "Trev", meta: "2024", variant: "mobility" as const },
  { title: "Medical Edge", meta: "2024", variant: "edge" as const },
  { title: "UjuCode", meta: "2023", variant: "scoring" as const },
  { title: "SM", meta: "2026", variant: "profile" as const },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-6 pt-20 md:pt-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <CautionSign
          className="doodle left-[5%] top-[22%] hidden w-20 lg:block xl:w-24"
          style={{ "--rot": "-9deg", "--bob-delay": "0.4s" } as CSSProperties}
        />
        <Bomb
          className="doodle right-[6%] top-[24%] hidden w-20 md:block"
          style={{ "--rot": "8deg", "--bob-delay": "1.2s" } as CSSProperties}
        />
        <Cone
          className="doodle bottom-[23%] right-[7%] hidden w-16 lg:block"
          style={{ "--rot": "6deg", "--bob-delay": "2s" } as CSSProperties}
        />
        <Crown
          className="doodle right-[24%] top-[15%] hidden w-14 text-blue lg:block"
          style={{ "--rot": "10deg", "--bob-delay": "0.8s" } as CSSProperties}
        />
        <Squiggle className="doodle left-[12%] top-[38%] hidden w-16 text-ink/70 xl:block" />
        <Sparkle className="twinkle absolute left-[24%] top-[12%] h-5 w-5 text-blue" />
        <Sparkle
          className="twinkle absolute right-[28%] top-[33%] h-3.5 w-3.5 text-blue"
          style={{ "--delay": "1.6s" } as CSSProperties}
        />
        <Sparkle
          className="twinkle absolute bottom-[34%] left-[8%] h-3 w-3 text-ink/40"
          style={{ "--delay": "2.7s" } as CSSProperties}
        />
        <span
          className="sticker sticker-yellow absolute right-[15%] bottom-[18%] hidden rotate-[-8deg] px-4 py-2 text-[10px] font-bold uppercase tracking-widest lg:inline-flex"
          style={{ boxShadow: "0 10px 18px -12px rgba(23,20,15,.6)" }}
        >
          <Sparkle className="h-3 w-3" />
          open to work
        </span>
      </div>

      <div className="relative mx-auto flex max-w-[1250px] flex-col items-center px-5 text-center">
        <div className="hero-fade">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card/70 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink/60 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue" />
            Portfolio — 2026
          </span>
        </div>

        <h1
          className="inflated hero-fade relative mt-4 pb-[0.5em] text-[clamp(2.25rem,8.5vw,7.75rem)] leading-[0.9]"
          style={{ "--delay": "80ms" } as CSSProperties}
        >
          SHAMBHABYA
        </h1>

        <SmileArcs className="pointer-events-none -mt-2 hidden w-52 text-ink/70 sm:block" />

        <p
          className="hand hero-fade mt-5 max-w-2xl sm:mt-3 text-balance text-[clamp(1.15rem,2.2vw,1.65rem)] leading-[1.5]"
          style={{ "--delay": "160ms" } as CSSProperties}
        >
          hey, I&apos;m Shambhabya, a{" "}
          <span className="blue-underline">software engineer</span> from
          Guwahati.
        </p>

        <p
          className="hero-fade mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted sm:text-[0.95rem]"
          style={{ "--delay": "220ms" } as CSSProperties}
        >
          I build production web, mobile and cloud products — from the first
          sketch to the deploy that ships it. Currently making mobility apps at
          KifferAI.
        </p>

        <div
          className="hero-fade mt-6 flex flex-wrap items-center justify-center gap-2.5"
          style={{ "--delay": "280ms" } as CSSProperties}
        >
          <a href="#work" className="btn-black group">
            See my work
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a href="/resume.pdf" download className="btn-outline">
            Résumé
            <Download className="h-4 w-4" />
          </a>
        </div>

        <div
          className="hero-fade fan mt-8 w-full max-w-[54rem] sm:mt-10"
          style={{ "--delay": "360ms" } as CSSProperties}
        >
          {fanCards.map((card) => (
            <div key={card.title} className="fan-card p-2.5">
              <FanArt variant={card.variant} />
              <div className="flex items-end justify-between px-1.5 pb-1 pt-2">
                <span className="hand text-base leading-none sm:text-lg">
                  {card.title}
                </span>
                <span className="hidden font-mono text-[7px] uppercase tracking-widest text-muted sm:block">
                  {card.meta}
                </span>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#work"
          className="mt-8 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-blue"
        >
          Scroll to explore
          <ArrowUpRight className="h-3 w-3 rotate-90" />
        </a>

        <ArrowDoodle className="pointer-events-none absolute -bottom-2 left-[30%] hidden w-16 text-ink/20 xl:block" />
      </div>
    </section>
  );
}
