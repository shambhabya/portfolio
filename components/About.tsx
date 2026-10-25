import SectionLabel from "./SectionLabel";
import TechIcon from "./TechIcon";
import { Avatar, ArrowDoodle, Sparkle } from "./Doodles";
import { ArrowUpRight, Download } from "./Icons";
import { education, profile } from "@/lib/site-data";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React Native",
  "Node.js",
  "GraphQL",
  "AWS",
  "Docker",
  "MongoDB",
  "Git",
  "Firebase",
  "Tailwind CSS",
  "Python",
  "Google Maps",
];

const extras = [
  "REST APIs",
  "Amplify",
  "AppSync",
  "DynamoDB",
  "SQS",
  "Greengrass",
  "Juspay",
  "OTP",
  "Payment gateways",
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-line/70 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        <div data-reveal="">
          <SectionLabel number="02">About me</SectionLabel>
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div data-reveal="">
            <h2 className="display max-w-xl text-[clamp(2.5rem,5.4vw,4.4rem)]">
              I&apos;m Shambhabya, a builder who cares how things{" "}
              <span className="text-blue">feel.</span>
            </h2>

            <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-muted sm:text-[0.98rem]">
              <p>
                Two-plus years building production web, mobile and cloud
                applications. I work across{" "}
                <strong className="font-semibold text-ink">
                  React and React Native
                </strong>{" "}
                on the front end, Node.js and GraphQL in the API layer, and AWS
                serverless services underneath.
              </p>
              <p>
                I care about the unglamorous parts — state that stays in sync,
                data that survives a bad connection, and features that are
                still maintainable six months after launch.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">2+ years</span>
              <span className="chip">8.2 CGPA</span>
              <span className="chip">{profile.location}</span>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a href="/resume.pdf" download className="blue-link">
                Download résumé
                <Download className="h-3.5 w-3.5" />
              </a>
              <a href="#experience" className="blue-link">
                See experience
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div data-reveal="" className="relative mx-auto w-full max-w-[340px]">
            <div
              aria-hidden="true"
              className="absolute inset-x-3 top-4 h-full rotate-[4deg] rounded-[2.2rem] bg-yellow/70"
            />
            <div className="soft-card relative -rotate-2 rounded-[2.2rem] p-4">
              <div className="overflow-hidden rounded-[1.5rem] bg-white/40">
                <Avatar className="h-auto w-full" />
              </div>
              <div className="flex items-center justify-between px-2 pb-1 pt-3">
                <span className="hand text-xl">that&apos;s me!</span>
                <Sparkle className="h-5 w-5 text-blue" />
              </div>
            </div>
            <div className="absolute -right-3 top-8 rotate-6 rounded-full border border-white/70 bg-card px-3 py-2 font-mono text-[8px] font-bold uppercase tracking-widest shadow-md">
              SDE-1 @ KifferAI
            </div>
            <ArrowDoodle className="absolute -bottom-9 -left-8 h-14 w-16 -scale-x-100 text-ink/30" />
            <p className="hand absolute -bottom-12 left-4 rotate-[-4deg] text-sm text-muted">
              nice to meet you
            </p>
          </div>
        </div>

        <div className="mt-24 md:mt-28" data-reveal="">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow">Tech stack</p>
              <p className="hand mt-2 text-lg">the tools I reach for</p>
            </div>
            <span className="chip">{stack.length} tools</span>
          </div>

          <ul className="mt-8 grid grid-cols-4 gap-x-3 gap-y-6 sm:grid-cols-5 md:grid-cols-8">
            {stack.map((tool, index) => (
              <li
                key={tool}
                className="logo-tile"
                style={{
                  transform: `rotate(${index % 3 === 0 ? -2 : index % 3 === 1 ? 1 : 0}deg)`,
                }}
              >
                <span className="logo-tile-icon">
                  <TechIcon name={tool} className="h-6 w-6" colored />
                </span>
                <span className="text-center font-mono text-[8px] font-bold uppercase tracking-[0.08em] text-muted">
                  {tool}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {extras.map((item) => (
              <span key={item} className="chip">
                <span className="plus-mark">+</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2" data-reveal="">
          <div className="soft-card flex items-center gap-4 rounded-[1.4rem] p-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-yellow font-display text-lg">
              GU
            </span>
            <div>
              <p className="font-semibold leading-tight">{education.degree}</p>
              <p className="mt-1 text-xs text-muted">
                {education.school} · {education.period}
              </p>
            </div>
          </div>
          <div className="soft-card flex items-center justify-between gap-4 rounded-[1.4rem] p-5">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                Graduated with
              </p>
              <p className="mt-1 font-semibold">{education.detail}</p>
            </div>
            <span className="display text-4xl">8.2</span>
          </div>
        </div>
      </div>
    </section>
  );
}
