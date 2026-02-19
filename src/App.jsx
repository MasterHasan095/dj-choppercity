import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Hero from "./sections/Hero.jsx";
import Proof from "./sections/Proof.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Mixes from "./sections/Mixes.jsx";
import Videos from "./sections/Videos.jsx";
import Gallery from "./sections/Gallery.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#07070A]">
      {/* Background texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.22] [background-size:14px_14px] bg-grain" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_circle_at_50%_-200px,rgba(255,255,255,.08),transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(900px_circle_at_10%_20%,rgba(255,255,255,.05),transparent_50%)]" />

      <Header />
      <main className="pt-16">
        <Hero />
        <Proof />
        <About />
        <Services />
        <Mixes />
        <Videos />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
