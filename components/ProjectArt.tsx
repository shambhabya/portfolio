type ArtProps = { className?: string };

function Phone({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[6.4rem] shrink-0 overflow-hidden rounded-[1.5rem] border-[4px] border-ink bg-ink p-1 shadow-[0_18px_30px_-18px_rgba(23,20,15,0.7)] sm:w-[7.6rem] ${className}`}
    >
      <div className="relative h-[13.2rem] overflow-hidden rounded-[1.1rem] bg-[#f8f4e9] sm:h-[15.5rem]">
        {children}
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="flex items-center justify-between px-2.5 pt-2 text-[5px] font-semibold text-ink/60">
      <span>9:41</span>
      <span className="h-1 w-6 rounded-full bg-ink/20" />
      <span>5G</span>
    </div>
  );
}

export default function ProjectArt({
  variant,
  className = "",
}: ArtProps & { variant: "mobility" | "edge" | "scoring" }) {
  if (variant === "mobility") {
    return (
      <div
        className={`relative flex min-h-[24rem] items-center justify-center px-5 py-10 ${className}`}
      >
        <span className="hand absolute left-6 top-5 -rotate-6 text-sm text-ink/50">
          live rides ✦
        </span>

        <Phone className="-mr-10 translate-y-5 -rotate-[11deg]">
          <TopBar />
          <div className="relative h-[7.2rem]">
            <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
              <rect width="100" height="100" fill="#eee9dd" />
              <path d="M0 24h100M0 66h100M32 0v100M72 0v100" stroke="#fffdf7" strokeWidth="5" />
              <path d="M32 88h17c9 0 9-12 18-12h9" fill="none" stroke="#4f5df5" strokeWidth="4" strokeLinecap="round" />
              <circle cx="32" cy="88" r="4" fill="#17140f" />
              <circle cx="76" cy="76" r="4" fill="#4f5df5" />
            </svg>
          </div>
          <div className="mx-2 -mt-5 rounded-xl border border-black/5 bg-card p-2 shadow-sm">
            <div className="h-1.5 w-12 rounded-full bg-ink/70" />
            <div className="mt-1.5 h-1 w-16 rounded-full bg-ink/15" />
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[6px] font-semibold">Ride confirmed</span>
              <span className="rounded-full bg-blue px-1.5 py-0.5 text-[5px] text-white">go</span>
            </div>
          </div>
        </Phone>

        <Phone className="z-10 -mb-3">
          <TopBar />
          <div className="px-2.5 pt-3">
            <div className="h-1.5 w-14 rounded-full bg-ink/70" />
            <div className="mt-1 h-1 w-9 rounded-full bg-ink/20" />
          </div>
          <div className="mt-2 space-y-1.5 px-2">
            {[0, 1, 2].map((item) => (
              <div key={item} className="flex items-center gap-1.5 rounded-lg bg-white/70 p-1.5">
                <span className={`h-3.5 w-3.5 rounded-full ${item === 0 ? "bg-blue" : "bg-ink/10"}`} />
                <span className="flex-1">
                  <span className="block h-1 w-8 rounded-full bg-ink/60" />
                  <span className="mt-1 block h-1 w-5 rounded-full bg-ink/15" />
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
              </div>
            ))}
          </div>
          <div className="mx-2 mt-2 h-8 rounded-lg bg-ink px-2 py-1.5">
            <div className="h-1 w-10 rounded-full bg-white/70" />
            <div className="mt-1 h-1 w-6 rounded-full bg-white/25" />
          </div>
        </Phone>

        <Phone className="z-20 -ml-10 translate-y-7 rotate-[11deg]">
          <div className="h-full bg-ink p-2 text-white">
            <TopBar />
            <p className="mt-2 text-[6px] uppercase tracking-widest text-white/40">In progress</p>
            <p className="mt-1 text-[9px] font-semibold leading-tight">Arriving in<br />4 minutes</p>
            <div className="relative mt-2 h-[8rem] overflow-hidden rounded-lg bg-[#23201b]">
              <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
                <path d="M0 30h100M0 70h100M30 0v100M70 0v100" stroke="#3a352b" strokeWidth="3" />
                <path d="M18 86c24 0 18-30 40-30s18-22 24-22" fill="none" stroke="#4f5df5" strokeWidth="3" strokeLinecap="round" />
                <circle cx="18" cy="86" r="3.5" fill="#f6c945" />
              </svg>
            </div>
          </div>
        </Phone>
      </div>
    );
  }

  if (variant === "edge") {
    return (
      <div
        className={`relative flex min-h-[24rem] items-center justify-center px-6 py-10 ${className}`}
      >
        <span className="hand absolute left-6 top-5 rotate-[-4deg] text-sm text-ink/50">
          edge → cloud ✦
        </span>
        <div className="w-full max-w-[26rem] rounded-2xl border border-white/70 bg-card p-2.5 shadow-[0_22px_44px_-26px_rgba(23,20,15,0.5)]">
          <div className="flex items-center gap-1.5 border-b border-line px-1 pb-2">
            <span className="h-2 w-2 rounded-full bg-orange/70" />
            <span className="h-2 w-2 rounded-full bg-yellow" />
            <span className="h-2 w-2 rounded-full bg-ink/20" />
            <span className="ml-2 h-1.5 flex-1 rounded-full bg-ink/5" />
          </div>
          <div className="px-2 pt-3">
            <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-muted">Device stream</p>
            <div className="mt-1 flex items-end justify-between">
              <p className="font-display text-2xl leading-none">98.4%</p>
              <span className="rounded-full bg-blue-soft px-2 py-0.5 font-mono text-[6px] text-blue">
                synced
              </span>
            </div>
          </div>
          <div className="mt-3 h-24 rounded-lg bg-paper p-2">
            <svg viewBox="0 0 300 90" className="h-full w-full" aria-hidden="true">
              <path d="M0 64h22l10-34 12 54 12-44 12 28 14-42 12 48 14-22 12 30 14-40 12 20 14-8 12 24 14-36 12 50 14-30 12 16 14-40 12 52 14-22 12 6 14-18 12 24h30" fill="none" stroke="#4f5df5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {["Queued 124", "Docker", "Offline"].map((item) => (
              <div key={item} className="rounded-md border border-line bg-paper px-1.5 py-1 font-mono text-[5.5px] uppercase text-muted">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-6 rotate-6 rounded-2xl border border-white/80 bg-yellow px-3 py-2 shadow-lg">
          <p className="font-mono text-[7px] font-bold uppercase tracking-widest">device online</p>
        </div>
        <div className="absolute left-6 bottom-12 -rotate-6 rounded-xl border border-line bg-card px-2.5 py-1.5 shadow-md">
          <p className="font-mono text-[6px] uppercase tracking-widest text-muted">SQS × 12</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex min-h-[24rem] items-center justify-center px-6 py-10 ${className}`}
    >
      <span className="hand absolute left-6 top-5 -rotate-3 text-sm text-ink/50">
        match point!
      </span>
      <div className="w-full max-w-[25rem] rounded-2xl border border-white/70 bg-card p-4 shadow-[0_22px_44px_-26px_rgba(23,20,15,0.5)]">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-blue px-2 py-0.5 font-mono text-[7px] uppercase tracking-widest text-white">
            live
          </span>
          <span className="font-mono text-[7px] uppercase tracking-widest text-muted">Court 2 · Final</span>
        </div>
        <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="rounded-xl bg-paper p-2.5 text-center">
            <p className="font-mono text-[6px] uppercase tracking-widest text-muted">Sharma / Iyer</p>
          </div>
          <p className="font-display text-xl leading-none">vs</p>
          <div className="rounded-xl bg-paper p-2.5 text-center">
            <p className="font-mono text-[6px] uppercase tracking-widest text-muted">Das / Medhi</p>
          </div>
        </div>
        <div className="mt-4 flex items-end justify-center gap-3">
          <p className="font-display text-6xl leading-none">21</p>
          <span className="mb-2 h-1 w-6 rounded-full bg-ink/20" />
          <p className="font-display text-6xl leading-none text-ink/25">18</p>
        </div>
        <div className="mt-3 rounded-lg border border-line bg-paper px-2 py-1.5">
          <div className="flex justify-between font-mono text-[6px] uppercase text-muted">
            <span>Match timer</span>
            <span>00:42:18</span>
          </div>
        </div>
      </div>
      <div className="absolute right-8 top-16 -rotate-12 rounded-full bg-yellow px-2.5 py-2 text-[10px] font-bold shadow-md">
        21!
      </div>
    </div>
  );
}

export function FanArt({
  variant,
}: {
  variant: "mobility" | "edge" | "scoring" | "profile";
}) {
  if (variant === "profile") {
    return (
      <div className="flex h-28 items-center justify-center rounded-xl bg-yellow">
        <span className="font-display text-4xl">SM</span>
      </div>
    );
  }

  if (variant === "edge") {
    return (
      <div className="relative h-28 overflow-hidden rounded-xl bg-[#efeade] p-2">
        <div className="rounded-md border border-line bg-card p-1.5">
          <div className="flex gap-1">
            <span className="h-1 w-6 rounded-full bg-ink/30" />
            <span className="h-1 w-3 rounded-full bg-ink/10" />
          </div>
          <svg viewBox="0 0 100 30" className="mt-1.5 w-full" aria-hidden="true">
            <path d="M0 22h10l4-12 5 20 5-14 4 8 5-14 5 18 5-8 4 10 5-16 5 8 4-4 5 10 4-12 5 16 5-8 4 6 5-12 4 14 5-6" fill="none" stroke="#4f5df5" strokeWidth="1.5" />
          </svg>
        </div>
        <span className="absolute bottom-2 right-2 rounded-full bg-yellow px-1.5 py-0.5 font-mono text-[5px] uppercase">
          online
        </span>
      </div>
    );
  }

  if (variant === "scoring") {
    return (
      <div className="h-28 rounded-xl bg-[#efeade] p-2">
        <div className="rounded-md bg-card p-2">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-blue px-1.5 py-0.5 text-[5px] text-white">live</span>
            <span className="font-mono text-[5px] text-muted">court 2</span>
          </div>
          <div className="mt-2 flex items-end justify-center gap-2">
            <span className="font-display text-3xl leading-none">21</span>
            <span className="mb-1 h-0.5 w-3 rounded bg-ink/20" />
            <span className="font-display text-3xl leading-none text-ink/25">18</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-28 overflow-hidden rounded-xl bg-[#efeade]">
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        <path d="M0 28h100M0 70h100M30 0v100M72 0v100" stroke="#fffdf7" strokeWidth="6" />
        <path d="M30 88h18c10 0 10-14 19-14h9" fill="none" stroke="#4f5df5" strokeWidth="4" strokeLinecap="round" />
        <circle cx="30" cy="88" r="4" fill="#17140f" />
        <circle cx="76" cy="74" r="4" fill="#4f5df5" />
      </svg>
      <span className="absolute bottom-1.5 left-1.5 rounded-full bg-card px-1.5 py-0.5 font-mono text-[5px] uppercase">
        trip live
      </span>
    </div>
  );
}
