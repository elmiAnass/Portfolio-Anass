import { Quote, Star } from "lucide-react";

const items = [
  {
    name: "Jayesh Patil",
    role: "CEO, Lloranto",
    rating: 5,
    text: "Anass delivered a polished, modern site ahead of schedule. His eye for detail and clean execution made the whole process effortless.",
  },
  {
    name: "Sarah Lin",
    role: "Founder, Northwave",
    rating: 5,
    text: "Outstanding work. The redesign lifted our conversion meaningfully and the codebase he handed off was a pleasure to maintain.",
  },
  {
    name: "Marc Devereux",
    role: "Product Lead, Halo",
    rating: 5,
    text: "A rare combination of taste and technical skill. He treats every pixel and interaction like it matters — because it does.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">
            What Clients Say<span className="text-neon">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Feedback from clients and collaborators highlighting the quality,
            professionalism, and impact of my work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <article
              key={t.name}
              className="hover-lift relative rounded-3xl border border-border bg-gradient-card p-7"
            >
              <Quote className="absolute right-6 top-6 text-foreground/10" size={64} />
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-neon text-neon-foreground font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-neon text-neon" />
                ))}
                <span className="ml-2 text-xs text-muted-foreground">{t.rating.toFixed(1)}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}