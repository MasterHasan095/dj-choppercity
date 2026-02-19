import Container from "../components/Container.jsx";
import Section from "../components/Section.jsx";
import Badge from "../components/Badge.jsx";
import { SITE } from "../data/site.js";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs tracking-luxe text-white/60 uppercase">About</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">A luxury feel with a crowd-first mindset.</h2>
            <p className="mt-4 text-white/70">
              DJ Choppercity delivers a polished, minimal aesthetic with high-energy mixing.
              Sets are built around the crowd — reading the room, raising the tempo, and keeping transitions clean.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SITE.genres.map((g) => (
                <Badge key={g}>{g}</Badge>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <div className="text-sm font-semibold">What you can expect</div>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-white/40">•</span>
                  Clean transitions, tight pacing, and a professional presence.
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40">•</span>
                  Curated selection with room-reading (no random chaos).
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40">•</span>
                  Quick communication, punctual setup, and respectful volume control when needed.
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-white/55">
                Placeholder copy — update after you ask the client their story, years, venues, and signature style.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
