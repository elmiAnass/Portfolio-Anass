import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Skills } from "@/components/portfolio/Skills";
import { WhyHire } from "@/components/portfolio/WhyHire";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anass Elmissaoui — Web Designer & Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Anass Elmissaoui — a web designer & developer crafting modern, user-focused websites with clean code and thoughtful design.",
      },
      { property: "og:title", content: "Anass Elmissaoui — Portfolio" },
      {
        property: "og:description",
        content: "Modern dark portfolio. UI/UX design, responsive web, performance-driven development.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Work />
        <Skills />
        <WhyHire />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
