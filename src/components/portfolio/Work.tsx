import { ArrowUpRight } from "lucide-react";
import uiux from "@/assets/work-uiux.jpg";
import web from "@/assets/work-web.jpg";
import landing from "@/assets/work-landing.jpg";

const works = [
  { title: "UI / UX Design", tag: "Mobile App", img: uiux },
  { title: "Web Design", tag: "Restaurant", img: web },
  { title: "Landing Page", tag: "Hospitality", img: landing },
  { title: "Brand Identity", tag: "Studio", img: uiux },
];

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-end gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-5xl font-bold sm:text-6xl">
            What I Do<span className="text-neon">.</span>
          </h2>
          <div className="mt-6 flex items-center gap-2">
            <span className="h-1 w-10 rounded-full bg-neon" />
            <span className="h-1 w-2 rounded-full bg-border" />
            <span className="h-1 w-2 rounded-full bg-border" />
            <span className="h-1 w-2 rounded-full bg-border" />
          </div>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            A curated selection of recent client projects spanning product
            design, marketing sites, and brand systems.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((w, i) => (
          <article
            key={w.title + i}
            className="hover-lift group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-3"
          >
            <div className="absolute left-5 top-5 z-10 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
              {w.title}
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={w.img}
                alt={w.title}
                width={800}
                height={600}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-between px-2 pb-2 pt-4">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {w.tag}
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-foreground transition-all group-hover:bg-neon group-hover:text-neon-foreground">
                <ArrowUpRight size={16} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}