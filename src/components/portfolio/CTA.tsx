import mac from "@/assets/mac.png";

export function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-[radial-gradient(120%_120%_at_80%_50%,oklch(0.30_0.18_142/0.55),oklch(0.06_0_0)_60%)] p-10 sm:p-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Let&apos;s Work
              <br />
              Together<span className="text-neon">.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm text-muted-foreground sm:text-base">
              Have a project in mind or need a website? Feel free to contact me —
              I&apos;m always open to new opportunities.
            </p>
            <a
              href="mailto:hello@anass.dev"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-semibold text-neon-foreground transition-all hover:shadow-neon hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
          <div className="relative">
            <img
              src={mac}
              alt="Vintage Mac saying hello"
              width={900}
              height={700}
              loading="lazy"
              className="animate-float mx-auto w-72 drop-shadow-[0_30px_60px_oklch(0_0_0/0.7)] sm:w-96"
            />
            <div className="pointer-events-none absolute inset-x-10 bottom-2 -z-10 h-10 rounded-full bg-neon/30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}