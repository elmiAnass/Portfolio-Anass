import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import uiux from "@/assets/work-uiux.jpg";
import web from "@/assets/work-web.jpg";
import landing from "@/assets/work-landing.jpg";

const works = [
  { title: "UI / UX Design", tag: "Mobile App", img: uiux },
  { title: "Web Design", tag: "Restaurant", img: web },
  { title: "Landing Page", tag: "Hospitality", img: landing },
  { title: "Brand Identity", tag: "Studio", img: uiux },
  { title: "Brand Identity", tag: "Studio", img: uiux },
  { title: "Brand Identity", tag: "Studio", img: uiux },
  { title: "Brand Identity", tag: "Studio", img: uiux },
];

export function Work() {
  const [showAll, setShowAll] = useState(false);

  const visibleWorks = showAll ? works : works.slice(0, 6);

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
        {visibleWorks.map((w, i) => (
          <article
            key={w.title + i}
            className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
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

              <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-foreground transition-all duration-300 group-hover:bg-neon group-hover:text-black">
                <ArrowUpRight size={16} />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* BUTTON */}
      {works.length > 4 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-full border border-border bg-white/5 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neon hover:text-black hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}