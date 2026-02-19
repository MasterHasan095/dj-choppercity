import Container from "../components/Container.jsx";
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import { SITE } from "../data/site.js";
import { Youtube } from "lucide-react";

export default function Videos() {
  return (
    <Section id="videos" className="bg-black/10 border-y border-white/10">
      <Container>
        <div className="text-xs tracking-luxe text-white/60 uppercase">Highlights</div>
        <div className="mt-2 flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-semibold">Moments that speak for themselves.</h2>
          <Button as="a" variant="secondary" href={SITE.socials.youtube} target="_blank" rel="noreferrer">
            <Youtube size={16} /> Watch More
          </Button>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-4">
          {SITE.media.videos.map((v) => (
            <div key={v.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow">
              <div className="text-sm font-semibold">{v.title}</div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/30 aspect-video">
                <iframe
                  title={v.title}
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-3 text-xs text-white/45">Replace YouTube IDs in <span className="text-white/70">site.js</span></div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
