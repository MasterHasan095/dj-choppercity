import { useMemo, useState } from "react";
import Container from "../components/Container.jsx";
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import IconButton from "../components/IconButton.jsx";
import { SITE, mailLink, telLink, waLink } from "../data/site.js";
import { Mail, PhoneCall, MessageCircle, Instagram, Youtube, Music } from "lucide-react";

const EVENT_TYPES = ["Club / Bar", "Wedding", "Corporate", "Private Event", "Other"];

export default function Contact() {
  const action = useMemo(() => SITE.form.action, []);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", msg: "" });

    // If Formspree isn't configured yet, don't fail silently.
    if (!action || action.includes("REPLACE_ME")) {
      setStatus({
        state: "error",
        msg: "Form endpoint not set. Replace SITE.form.action in src/data/site.js (Formspree/Tally).",
      });
      return;
    }

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const res = await fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus({ state: "success", msg: "Request sent. You’ll get a reply soon." });
      } else {
        setStatus({ state: "error", msg: "Couldn’t send. Try email/WhatsApp instead." });
      }
    } catch {
      setStatus({ state: "error", msg: "Network error. Try again or use quick connect." });
    }
  }

  return (
    <Section id="contact" className="bg-black/10 border-t border-white/10">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="text-xs tracking-luxe text-white/60 uppercase">Booking</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">Let’s lock in your date.</h2>
            <p className="mt-4 text-white/65">
              Fill the form and I’ll respond ASAP. If you’re in a rush, use WhatsApp or call.
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <div className="text-sm font-semibold">Quick Connect</div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button as="a" variant="secondary" href={waLink(SITE.contact.whatsapp)} target="_blank" rel="noreferrer">
                  <MessageCircle size={16} /> WhatsApp
                </Button>
                <Button as="a" variant="secondary" href={telLink(SITE.contact.phone)}>
                  <PhoneCall size={16} /> Call
                </Button>
                <Button as="a" variant="secondary" href={mailLink(SITE.contact.email)}>
                  <Mail size={16} /> Email
                </Button>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <IconButton href={SITE.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Instagram size={18} />
                </IconButton>
                <IconButton href={SITE.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                  <Youtube size={18} />
                </IconButton>
                <IconButton href={SITE.socials.soundcloud} target="_blank" rel="noreferrer" aria-label="SoundCloud">
                  <Music size={18} />
                </IconButton>
              </div>

              <div className="mt-5 text-xs text-white/45">
                Add real links/phone/email in <span className="text-white/70">src/data/site.js</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
              <div className="text-sm font-semibold">Booking Request</div>
              <form onSubmit={onSubmit} className="mt-5 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                <Field label="Phone" name="phone" placeholder="+1 (___) ___-____" />
                <Select label="Event Type" name="eventType" options={EVENT_TYPES} />
                <Field label="Event Date" name="date" type="date" />
                <Field label="Location (City / Venue)" name="location" placeholder="Scarborough / Toronto..." />

                <div className="sm:col-span-2">
                  <label className="text-xs text-white/60">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your event (crowd size, vibe, timing, special requests)..."
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/15"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                  <Button type="submit" disabled={status.state === "loading"}>
                    {status.state === "loading" ? "Sending..." : "Send Request"}
                  </Button>

                  {status.msg && (
                    <div
                      className={[
                        "text-sm",
                        status.state === "success" ? "text-white/80" : "text-red-200/80",
                      ].join(" ")}
                    >
                      {status.msg}
                    </div>
                  )}
                </div>

                <div className="sm:col-span-2 text-xs text-white/45">
                  No backend required. Use Formspree/Tally, or replace the form with a direct embed.
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Field({ label, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="text-xs text-white/60">{label}</label>
      <input
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/15"
        {...props}
      />
    </div>
  );
}

function Select({ label, name, options }) {
  return (
    <div>
      <label className="text-xs text-white/60">{label}</label>
      <select
        name={name}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 focus:outline-none focus:ring-2 focus:ring-white/15"
        defaultValue={options[0]}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
