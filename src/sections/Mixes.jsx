import Container from "../components/Container.jsx";
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import { SITE } from "../data/site.js";
import { Music } from "lucide-react";

export default function Mixes() {
  return (
    <Section id="mixes">
      <Container>
        <div className="text-xs tracking-luxe text-white/60 uppercase">Mixes</div>
        <div className="mt-2 flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-semibold">Press play. Feel the energy.</h2>
          <Button as="a" variant="secondary" href={SITE.socials.soundcloud} target="_blank" rel="noreferrer">
            <Music size={16} /> View Profile
          </Button>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-4">
          {SITE.media.mixes.map((m) => (
            <div key={m.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow">
              <div className="text-sm font-semibold">{m.title}</div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <iframe
                  title={m.title}
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={m.embed}
                />
              </div>
              <div className="mt-3 text-xs text-white/45">
                Replace with real SoundCloud/Mixcloud embeds in <span className="text-white/70">site.js</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
