import SectionLabel from "./SectionLabel";
import { Download, Star } from "./Icons";
import { experience } from "@/lib/site-data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-line/70 bg-paper/50 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal="">
          <div>
            <SectionLabel number="03">Experience</SectionLabel>
            <h2 className="display mt-7 max-w-2xl text-[clamp(2.6rem,5.6vw,4.5rem)]">
              Where I&apos;ve
              <br />
              been building.
            </h2>
          </div>
          <a href="/resume.pdf" download className="blue-link mb-1">
            Résumé
            <Download className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-12 md:mt-16" data-reveal="">
          {experience.map((job, index) => (
            <article
              key={job.company}
              className="exp-row grid gap-5 py-8 md:grid-cols-[13rem_1fr_9rem] md:items-start md:gap-8 md:py-10"
            >
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-3">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/80 font-display text-lg shadow-[0_12px_20px_-14px_rgba(23,20,15,0.55)] ${
                    index === 0 ? "bg-yellow text-ink" : "bg-blue text-white"
                  }`}
                >
                  {job.company.slice(0, 1)}
                </span>
                <div>
                  <p className="font-display text-xl leading-none">
                    {job.company}
                  </p>
                  <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-muted md:mt-2">
                    {job.arrangement}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="display text-[1.6rem] leading-tight md:text-[1.9rem]">
                  {job.role}{" "}
                  {"level" in job && job.level ? (
                    <span className="whitespace-nowrap text-blue">
                      {job.level}
                    </span>
                  ) : null}
                </h3>
                <ul className="mt-4 grid gap-2.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-[0.82rem] leading-relaxed text-muted sm:text-sm"
                    >
                      <span className="exp-plus mt-[0.15rem] font-mono text-sm font-bold">
                        +
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted md:pt-1.5 md:text-right">
                {job.period}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="hand flex items-center gap-2 text-sm text-muted">
            <Star className="h-3.5 w-3.5 text-blue" />
            End-to-end ownership, from architecture to production debugging
          </span>
        </div>
      </div>
    </section>
  );
}
