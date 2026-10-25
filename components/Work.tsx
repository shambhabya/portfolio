import type { CSSProperties } from "react";
import SectionLabel from "./SectionLabel";
import ProjectArt from "./ProjectArt";
import { SiAppstore, SiGoogleplay } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Star } from "./Icons";
import { projects } from "@/lib/site-data";

const variants = ["mobility", "edge", "scoring"] as const;

const projectOverlines = [
  "Trev · EV cabs",
  "KifferAI · Platform",
  "UjuCode · Frontend",
];

export default function Work() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        <div data-reveal="">
          <SectionLabel number="01">Selected work</SectionLabel>
          <h2 className="display mt-7 max-w-3xl text-[clamp(2.8rem,6.4vw,5.2rem)]">
            Things I&apos;ve
            <br />
            designed &amp; built.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            A mix of shipped mobile apps, internal tools and the interfaces I
            build along the way. Every one of these went to production.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-2.5" data-reveal="">
          <span className="sticker px-4 py-2 text-[11px] font-semibold">
            03 projects
          </span>
          <span className="chip">2023 — now</span>
          <span className="chip">iOS · Android · web</span>
        </div>

        <div className="mt-14 flex flex-col gap-16 md:mt-20 md:gap-24">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-reveal=""
              style={{ "--delay": `${index * 70}ms` } as CSSProperties}
              className="project-row grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="project-art">
                  <ProjectArt variant={variants[index]} />
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                    {projectOverlines[index]}
                  </p>
                  <span className="h-px flex-1 bg-line" />
                  <span className="font-mono text-[10px] tracking-[0.12em] text-muted">
                    {project.index}
                  </span>
                </div>

                <h3 className="display mt-4 text-[clamp(2rem,3.8vw,3.2rem)] leading-[0.95]">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      <span className="plus-mark">+</span>
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip"
                    >
                      {link.store === "play" ? (
                        <SiGoogleplay size={12} color="currentColor" aria-hidden="true" />
                      ) : (
                        <SiAppstore size={12} color="currentColor" aria-hidden="true" />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-5">
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    <Star className="h-3 w-3 text-blue" />
                    {project.year}
                  </span>
                  <a href="#experience" className="blue-link">
                    Where I built it
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            More experiments on GitHub
          </p>
          <a
            href="https://github.com/shambhabya"
            target="_blank"
            rel="noopener noreferrer"
            className="blue-link"
          >
            Visit GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
