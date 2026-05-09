const pillars = [
  "User-Centered Design",
  "Fast & Responsive Websites",
  "Clean & Scalable Code",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28 text-center">
      <p className="text-balance text-2xl leading-relaxed text-muted-foreground sm:text-3xl">
        <span className="font-semibold text-foreground">I&apos;m a web designer</span> and
        developer with 2+ years of experience creating modern, user-focused
        websites. I specialize in UI/UX design, responsive layouts, and
        performance-driven development.
      </p>
      <p className="mt-6 text-base text-muted-foreground">
        My goal is simple — design interfaces that look good and work even better.
      </p>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {pillars.map((p, i) => (
          <div key={p} className="flex items-center gap-3 text-sm font-semibold sm:text-base">
            <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_12px_var(--neon)]" />
            {p}
            {i < pillars.length - 1 && (
              <span className="ml-12 hidden h-4 w-px bg-border md:inline-block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}