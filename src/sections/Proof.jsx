import Container from "../components/Container.jsx";
import Section from "../components/Section.jsx";
import Badge from "../components/Badge.jsx";
import { SITE } from "../data/site.js";

export default function Proof() {
  return (
    <Section className="py-10">
      <Container>
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="text-sm font-semibold">Signature</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {SITE.proof.bullets.map((b) => (
                <Badge key={b}>{b}</Badge>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/65">
              Minimal visuals, maximum impact — curated selection + clean transitions.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-black/20 p-6">
            <div className="text-sm font-semibold">Performed At (placeholder)</div>
            <div className="mt-3 grid sm:grid-cols-2 gap-2">
              {SITE.proof.venuesPlaceholder.map((v) => (
                <div key={v} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                  {v}
                </div>
              ))}
            </div>
            <div className="mt-3 text-xs text-white/45">
              Replace with real venues, events, or “50+ events across GTA”.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
