import Container from "../components/Container.jsx";
import Section from "../components/Section.jsx";
import { SITE } from "../data/site.js";

export default function Gallery() {
  return (
    <Section id="gallery">
      <Container>
        <div className="text-xs tracking-luxe text-white/60 uppercase">Gallery</div>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">A premium look, a real crowd.</h2>
        <p className="mt-4 text-white/65 max-w-2xl">
          Use 8–14 of the strongest photos. Keep them consistent: dark tones, clean flash, minimal clutter.
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {SITE.media.gallery.map((src, idx) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 aspect-square shadow-glow"
              aria-label={`Gallery image ${idx + 1}`}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-500 scale-[1.02] group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
            </a>
          ))}
        </div>

        <div className="mt-4 text-xs text-white/45">
          Place images inside <span className="text-white/70">public/media/</span> or update paths in <span className="text-white/70">site.js</span>.
        </div>
      </Container>
    </Section>
  );
}
