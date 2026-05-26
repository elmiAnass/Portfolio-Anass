import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border" : ""
      }`} 
      >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="group flex items-center gap-1 text-2xl font-bold">
          <span className="text-foreground">A</span>
          <span className="text-neon transition-transform group-hover:scale-125">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>{l.label}</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-neon-foreground transition-all hover:shadow-neon hover:scale-105 md:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-foreground md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground hover:text-neon"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-neon-foreground"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}