import Container from "./Container.jsx";
import { SITE } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <Container className="py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="text-sm font-semibold">{SITE.brand.name}</div>
          <div className="text-xs text-white/60">{SITE.brand.city} • Bookings & Inquiries</div>
        </div>
        <div className="text-xs text-white/45">
          © {new Date().getFullYear()} {SITE.brand.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
