import { ArrowDown, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import torus from "@/assets/torus.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden rounded-b-[2.5rem] bg-gradient-hero pb-24 pt-32 sm:rounded-b-[3rem]"
    >
      {/* grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -top-32 right-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-neon/20 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
            Available for work
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
            ELMISSAOUI
            <br />
            <span>ANASS</span>
            <span className="text-neon">.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            I&apos;m Anass — a Web Designer &amp; Developer turning ideas into
            beautiful, functional websites that perform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-semibold text-neon-foreground transition-all hover:shadow-neon hover:scale-[1.03]"
            >
              View My Work
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface-2"
            >
              Contact me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <Stat value="2+" label="Years experience" />
            <div className="h-8 w-px bg-border" />
            <Stat value="40+" label="Projects shipped" />
            <div className="h-8 w-px bg-border" />
            <Stat value="100%" label="Client focus" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface glow-ring">
            <img
              src={portrait}
              alt="Anass Elmissaoui portrait"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <img
            src={torus}
            alt=""
            aria-hidden
            width={260}
            height={260}
            loading="lazy"
            className="animate-float absolute -right-6 top-10 w-44 drop-shadow-[0_20px_40px_oklch(0_0_0/0.6)] sm:w-56"
          />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="animate-pulse-glow group absolute -bottom-7 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-neon hover:text-neon-foreground"
      >
        <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
      </a>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-foreground">{value}</div>
      <div className="text-xs uppercase tracking-wider">{label}</div>
    </div>
  );
}