import Container from "../components/Container.jsx";
import Section from "../components/Section.jsx";
import { SITE } from "../data/site.js";

export default function Services() {
  return (
    <Section id="services" className="bg-black/10 border-y border-white/10">
      <Container>
        <div className="text-xs tracking-luxe text-white/60 uppercase">Services</div>
        <div className="mt-2 flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-semibold">Bookings for every type of night.</h2>
          <div className="text-sm text-white/60 max-w-md">
            Update service titles/descriptions after client confirms event types + add-ons (lighting, mic, etc.).
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SITE.services.map((s) => (
            <div key={s.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <div className="text-sm font-semibold">{s.title}</div>
              <p className="mt-3 text-sm text-white/70">{s.desc}</p>
              <div className="mt-5 text-xs text-white/45">• Professional • Reliable • Crowd-first</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
