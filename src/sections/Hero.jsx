import Container from "../components/Container.jsx";
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import Badge from "../components/Badge.jsx";
import IconButton from "../components/IconButton.jsx";
import { SITE, mailLink, telLink, waLink } from "../data/site.js";
import { Instagram, Youtube, Music, PhoneCall, Mail, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <Section id="home" className="pt-10 sm:pt-14">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-luxe">
          {/* Hero background image */}
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage: `url(${SITE.media.heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(100%)",
            }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_20%,rgba(255,255,255,.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/80" />

          <div className="relative p-7 sm:p-12">
            <div className="flex flex-wrap gap-2">
              <Badge>{SITE.brand.city}</Badge>
              <Badge>Bookings Open</Badge>
              <Badge className="hidden sm:inline-flex">Dark Luxury • Minimal</Badge>
            </div>

            <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                  {SITE.brand.name}
                </h1>
                <p className="mt-3 text-white/75 text-base sm:text-lg max-w-2xl">
                  {SITE.brand.tagline}
                </p>
                <p className="mt-4 text-white/65 max-w-2xl">
                  {SITE.brand.heroSub}
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Button as="a" href="#contact">Check Availability</Button>
                  <Button as="a" variant="secondary" href="#mixes">Listen to Mixes</Button>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a className="text-xs text-white/60 hover:text-white transition" href="#services">
                    Services
                  </a>
                  <span className="text-xs text-white/30">•</span>
                  <a className="text-xs text-white/60 hover:text-white transition" href="#videos">
                    Highlights
                  </a>
                  <span className="text-xs text-white/30">•</span>
                  <a className="text-xs text-white/60 hover:text-white transition" href="#gallery">
                    Gallery
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-3xl border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                  <div className="text-sm font-semibold">Quick Connect</div>
                  <div className="mt-1 text-xs text-white/60">Fastest ways to reach me.</div>

                  <div className="mt-4 grid grid-cols-5 gap-2">
                    <IconButton href={SITE.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                      <Instagram size={18} />
                    </IconButton>
                    <IconButton href={SITE.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                      <Youtube size={18} />
                    </IconButton>
                    <IconButton href={SITE.socials.soundcloud} target="_blank" rel="noreferrer" aria-label="SoundCloud">
                      <Music size={18} />
                    </IconButton>
                    <IconButton href={telLink(SITE.contact.phone)} aria-label="Call">
                      <PhoneCall size={18} />
                    </IconButton>
                    <IconButton href={waLink(SITE.contact.whatsapp)} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                      <MessageCircle size={18} />
                    </IconButton>
                  </div>

                  <div className="mt-4 flex flex-col gap-2">
                    <Button as="a" variant="ghost" href={mailLink(SITE.contact.email)} className="justify-start">
                      <Mail size={16} /> {SITE.contact.email}
                    </Button>
                    <Button as="a" variant="ghost" href={telLink(SITE.contact.phone)} className="justify-start">
                      <PhoneCall size={16} /> {SITE.contact.phone}
                    </Button>
                  </div>

                  <div className="mt-5 text-[11px] text-white/45">
                    Tip: swap placeholders in <span className="text-white/70">src/data/site.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
