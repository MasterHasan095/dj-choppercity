export const SITE = {
  brand: {
    name: "DJ Choppercity",
    city: "Scarborough",
    tagline: "Dark luxury sound. Minimal, clean energy.",
    heroSub:
      "A premium DJ experience built for unforgettable nights — clubs, weddings, corporate, and private events.",
  },

  // Replace these with real links later
  socials: {
    instagram: "https://instagram.com/your_handle",
    youtube: "https://youtube.com/@your_channel",
    soundcloud: "https://soundcloud.com/your_profile",
    tiktok: "https://tiktok.com/@your_handle",
  },

  contact: {
    email: "djchoppercity@example.com",
    phone: "+1 (416) 555-0123",
    whatsapp: "+14165550123", // digits only preferred
  },

  // Replace with your Formspree endpoint (or Tally link)
  // Formspree example: https://formspree.io/f/abcdwxyz
  form: {
    action: "https://formspree.io/f/REPLACE_ME",
  },

  media: {
    heroImage: "/media/hero.jpg",
    gallery: [
      "/media/gallery-1.jpg",
      "/media/gallery-2.jpg",
      "/media/gallery-3.jpg",
      "/media/gallery-4.jpg",
      "/media/gallery-5.jpg",
      "/media/gallery-6.jpg",
    ],
    // YouTube embed IDs (not full URLs)
    videos: [
      { title: "Club Night Highlights", id: "dQw4w9WgXcQ" },
      { title: "Wedding Reception Set", id: "dQw4w9WgXcQ" },
      { title: "Private Party Energy", id: "dQw4w9WgXcQ" },
    ],
    // SoundCloud embed URLs (placeholders)
    mixes: [
      {
        title: "Afrobeats Party Mix",
        embed:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true",
      },
      {
        title: "Hip-Hop Club Set",
        embed:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true",
      },
      {
        title: "Top 40 / Open Format",
        embed:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true",
      },
    ],
  },

  // Placeholders — update after asking client
  genres: ["Afrobeats", "Hip-Hop", "R&B", "Amapiano", "Open Format", "Top 40"],
  services: [
    {
      title: "Clubs & Bars",
      desc: "High-energy sets tailored to the room — transitions clean, crowd locked in.",
    },
    {
      title: "Weddings",
      desc: "Elegant pacing from cocktail hour to dancefloor. Requests handled smoothly.",
    },
    {
      title: "Corporate",
      desc: "Professional setup, controlled vibe, and volume discipline when needed.",
    },
    {
      title: "Private Events",
      desc: "Birthdays, anniversaries, house parties — curated to your crowd.",
    },
  ],

  proof: {
    bullets: ["Scarborough + GTA", "Premium sound & clean transitions", "Crowd-first selection"],
    venuesPlaceholder: ["Venue A", "Venue B", "Venue C", "Venue D"],
  },
};

export function telLink(phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function mailLink(email) {
  return `mailto:${email}`;
}

export function waLink(whatsappDigits) {
  const digits = (whatsappDigits || "").replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}
