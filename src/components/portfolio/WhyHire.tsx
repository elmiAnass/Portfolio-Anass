import portrait from "@/assets/portrait.jpg";

export function WhyHire() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Why Hire Me<span className="text-neon">.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            I combine clean design, solid development, and a user-focused
            mindset to create modern, responsive websites that not only look
            good but also perform well. I&apos;m reliable, detail-oriented, and
            committed to delivering high-quality work that meets real business goals.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-semibold text-neon-foreground transition-all hover:shadow-neon hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div
            className="absolute inset-0 overflow-hidden border border-border bg-surface"
            style={{
              borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
            }}
          >
            <img
              src={portrait}
              alt="Portrait"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-neon/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}