import { Palette, Code2, MessagesSquare, Gauge } from "lucide-react";

const groups = [
  {
    icon: Palette,
    title: "Design",
    items: ["Figma", "Photoshop", "Illustrator", "UI/UX Principles"],
  },
  {
    icon: Code2,
    title: "Development",
    items: ["Front-End Development", "HTML / CSS / JavaScript", "Next.js", "Framer", "WordPress"],
  },
  {
    icon: MessagesSquare,
    title: "Soft Skills",
    items: ["Communication", "Time Management", "Problem Solving", "Creativity"],
  },
  {
    icon: Gauge,
    title: "Optimization & Quality",
    items: ["Performance Optimization", "Basic SEO", "Attention to Detail"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-[2.5rem] border border-border bg-surface/40 p-8 backdrop-blur sm:p-14">
        <div className="text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">
            My Skills<span className="text-neon">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A strong blend of design and development skills focused on creating
            modern, responsive, and user-friendly digital experiences that deliver real results.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {groups.map(({ icon: Icon, title, items }, idx) => (
            <div key={title} className="relative">
              <div
                className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl ${
                  idx % 2 === 1
                    ? "bg-neon text-neon-foreground shadow-neon"
                    : "border border-border bg-surface-2 text-neon"
                }`}
              >
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}