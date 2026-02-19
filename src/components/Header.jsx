import { useEffect, useMemo, useState } from "react";
import Container from "./Container.jsx";
import Button from "./Button.jsx";
import { SITE, mailLink } from "../data/site.js";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Mixes", href: "#mixes" },
  { label: "Videos", href: "#videos" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const brand = useMemo(() => SITE.brand.name, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition",
        scrolled ? "backdrop-blur-md bg-black/35 border-b border-white/10" : "bg-transparent",
      ].join(" ")}
    >
      <Container className="h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-white/8 border border-white/10 shadow-glow grid place-items-center">
            <span className="text-xs tracking-luxe text-white/90">CC</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">{brand}</div>
            <div className="text-xs text-white/60">{SITE.brand.city}</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/75 hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button as="a" variant="secondary" href={mailLink(SITE.contact.email)}>
            Email
          </Button>
          <Button as="a" href="#contact">
            Book
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-md">
          <Container className="py-4 flex flex-col gap-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm text-white/80 hover:bg-white/8"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex gap-2">
              <Button as="a" variant="secondary" className="flex-1" href={mailLink(SITE.contact.email)}>
                Email
              </Button>
              <Button as="a" className="flex-1" href="#contact" onClick={() => setOpen(false)}>
                Book
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
