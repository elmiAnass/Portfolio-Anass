import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-1 text-3xl font-bold">
            A<span className="text-neon">.</span>
          </a>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            Web designer and developer crafting modern, performant digital
            experiences with care and precision.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-muted-foreground transition-colors hover:bg-neon hover:text-neon-foreground"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Navigation" items={["Home", "About", "Services", "Resume", "Project"]} />
        <div>
          <h4 className="mb-4 text-sm font-semibold text-neon">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>+212 6 12 34 56 78</li>
            <li>anass.elmissaoui@gmail.com</li>
            <li>portfolio-anass.com</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-neon">Get the latest information</h4>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 rounded-full border border-border bg-surface-2 p-1.5 pl-4"
          >
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="grid h-9 w-9 place-items-center rounded-full bg-neon text-neon-foreground transition-transform hover:scale-110"
            >
              <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Anass Elmissaoui. All rights reserved.</p>
          <p>Designed &amp; developed with care<span className="text-neon">.</span></p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold text-neon">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((it) => (
          <li key={it}>
            <a href="#" className="transition-colors hover:text-foreground">{it}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}