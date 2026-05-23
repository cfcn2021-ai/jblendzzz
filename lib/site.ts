export const SITE = {
  name: "Jblendzzz",
  tagline: "Sharp cuts. At your door.",
  description:
    "Mobile barber serving Antique & Aklan. I bring the barbershop to you — no traffic, no waiting, just a clean cut where you're comfortable.",
  phone: "0963 804 0794",
  phoneRaw: "+639638040794",
  whatsapp: "https://wa.me/639638040794",
  email: "jorielplacio@gmail.com",
  address: "Baybay, Pandan, Antique 5712",
  hours: "Mon – Sat · 9 AM – 5 PM",
  closedNote: "Sundays closed",
  bookingUrl:
    "https://flycutzzzz.setmore.com/?instant_experiences_enabled=true&utm_source=qr-code&utm_medium=more-share-bp&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3",
  rating: "5.0",
  reviewCount: 4,
  serviceArea: "Antique & Aklan",
} as const;

export const GALLERY: { src: string; label: string }[] = [
  { src: "/gallery/cut1-cool-design.webp", label: "Custom design" },
  { src: "/gallery/cut2.webp", label: "Clean fade" },
  { src: "/gallery/cut3.webp", label: "Sharp taper" },
  { src: "/gallery/cut4-heartdesign.webp", label: "Heart design" },
  { src: "/gallery/cut5-cleancut.webp", label: "Clean cut" },
  { src: "/gallery/cut6-cleancut.webp", label: "Fresh finish" },
];

export const SERVICES = [
  {
    id: "regular",
    name: "Regular Haircut",
    duration: "20 min",
    price: "₱250",
    description:
      "Clean fade, taper, or classic cut. Styled and finished — ready to go.",
    badge: null,
  },
  {
    id: "kids",
    name: "Kid's Haircut",
    duration: "30 min",
    price: "₱120",
    description:
      "Patient, gentle cuts for the little ones. Parents stay close — kids stay comfortable.",
    badge: "Family",
  },
  {
    id: "design",
    name: "Haircut with Design",
    duration: "30 min",
    price: "₱270",
    description:
      "Letters, logos, freestyle patterns. Bring a reference — I'll bring the precision.",
    badge: "Most popular",
  },
] as const;
