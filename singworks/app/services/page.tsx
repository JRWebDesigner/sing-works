// app/services/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
type Service = {
  title: string;
  description: string;
  items: string[];
};

const SERVICES: Service[] = [
  {
    title: "Shopfront & Architectural Signage",
    description:
      "We design, manufacture and install premium signage for shops, restaurants, hotels, offices and commercial spaces. From clean contemporary lettering to statement illuminated signs, every project is made to suit the brand and the building.",
    items: [
      "Built-up letters",
      "Fascia signs",
      "Projecting signs",
      "Lightboxes",
      "Halo-lit lettering",
      "Face-lit lettering",
      "Metal lettering",
      "Acrylic signage",
      "Plaques",
      "Bespoke fabricated signs",
      "Luxury shopfront signage",
    ],
  },
  {
    title: "LED Neon Flex & Illuminated Signage",
    description:
      "Custom lighting designed to make your brand visible day and night. We create modern illuminated signage using LED technology, including bespoke LED Neon Flex lettering and logos.",
    items: [
      "LED Neon Flex",
      "Illuminated letters",
      "Halo lighting",
      "Face illumination",
      "Backlit logos",
      "Lightboxes",
      "Bespoke lighting features",
    ],
  },
  {
    title: "Vinyl Graphics & Large-Format Print",
    description:
      "We produce and install graphics for almost any surface, whether you need a permanent branded finish or a temporary campaign.",
    items: [
      "Window vinyl",
      "Cut lettering",
      "Printed graphics",
      "Frosted film",
      "Privacy film",
      "Wall graphics",
      "Floor graphics",
      "One-way vision",
      "Decals",
      "Large-format prints",
      "Hoardings",
      "Temporary promotional graphics",
    ],
  },
  {
    title: "Vehicle Wraps & Fleet Graphics",
    description:
      "Turn your vehicles into moving brand assets. We provide everything from subtle lettering to complete commercial wraps for individual vehicles and full fleets.",
    items: [
      "Full wraps",
      "Partial wraps",
      "Van graphics",
      "Car graphics",
      "Fleet branding",
      "Colour-change wraps",
      "Promotional wraps",
      "Reflective graphics",
      "Vehicle lettering",
    ],
  },
  {
    title: "Shop Awnings",
    description:
      "Bespoke awnings designed to add character, visibility and branding to your storefront. We supply and install traditional and contemporary awnings for shops, cafés, restaurants, bars, hotels and retail spaces, with custom colours, printed graphics, lettering and logos.",
    items: [
      "Traditional awnings",
      "Contemporary awnings",
      "Custom colours",
      "Printed graphics",
      "Lettering",
      "Logos",
    ],
  },
  {
    title: "Exhibitions & Displays",
    description:
      "High-impact graphics and signage for exhibitions, trade shows and branded displays.",
    items: [
      "Exhibition stand graphics",
      "Large-format panels",
      "Fabric graphics",
      "Lightbox graphics",
      "Fascia signage",
      "Illuminated logos",
      "Hanging signs",
      "Display graphics",
      "Counters",
      "Plinths",
      "Backdrops",
      "Floor graphics",
      "On-site installation",
    ],
  },
  {
    title: "Events & Brand Activations",
    description:
      "We transform spaces for launches, events, pop-ups and campaigns, helping brands take over a venue from floor to ceiling.",
    items: [
      "Event signage",
      "Branded walls",
      "Window takeovers",
      "Floor graphics",
      "Stage graphics",
      "Sponsor walls",
      "Media walls",
      "Photo moments",
      "Entrance features",
      "Temporary vinyl",
      "Wayfinding",
      "Bespoke branded installations",
    ],
  },
  {
    title: "Retail & Brand Rollouts",
    description:
      "From a single store campaign to a multi-location rollout, we produce and install consistent branded graphics across retail environments.",
    items: [
      "Window campaigns",
      "In-store graphics",
      "Seasonal displays",
      "Promotional signage",
      "Point-of-sale graphics",
      "Concession branding",
      "Pop-ups",
      "Retail hoardings",
      "Full-store takeovers",
    ],
  },
  {
    title: "Film, TV, Sets & Production",
    description:
      "Fast, flexible graphics and signage for productions, sets, shoots and live environments.",
    items: [
      "Set graphics",
      "Prop signage",
      "Temporary shopfronts",
      "Window graphics",
      "Vehicle graphics",
      "Scenic signage",
      "Period-style signs",
      "Branded backdrops",
      "Custom fabricated elements",
    ],
  },
  {
    title: "Traditional Signwriting",
    description:
      "For projects that need something genuinely hand-crafted, we offer traditional signwriting and decorative finishes.",
    items: [
      "Hand-painted lettering",
      "Shop signs",
      "Window lettering",
      "Murals",
      "Heritage signage",
      "Gilding",
      "Gold leaf",
      "Painted logos",
      "Bespoke decorative work",
    ],
  },
  {
    title: "Interior Branding & Wayfinding",
    description:
      "We carry your brand through the entire space, not just the exterior.",
    items: [
      "Reception signage",
      "Wall logos",
      "Directional signs",
      "Room signs",
      "Glass manifestations",
      "Privacy film",
      "Feature walls",
      "Menu boards",
      "Directories",
      "Branded interior graphics",
    ],
  },
  {
    title: "Bespoke Fabrication",
    description:
      "Not every idea fits into a standard format. We create one-off pieces for projects that need something completely individual.",
    items: [
      "Custom letters",
      "Logos",
      "Fabricated displays",
      "Acrylic pieces",
      "Metalwork",
      "CNC-cut signage",
      "Illuminated features",
      "Branded structures",
      "Statement installations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
        <ServicesHero />
        <ServicesList />
        <ClosingCTA />
    </>
  );
}

function ServicesHero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-14 pt-20">
      <span className="mb-5 inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest text-neutral-500">
        <span className="h-2 w-2 rounded-full bg-lime-300" />
        OUR SERVICES
      </span>
      <h1 className="max-w-3xl text-[3rem] font-medium leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl">
        Signage, graphics and{" "}
        <span className="italic font-light">branded environments</span> that
        make businesses stand out.
      </h1>
      <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-500">
        From permanent shopfront signage to temporary event takeovers, we
        handle projects from production through to installation.
      </p>
    </section>
  );
}

function ServicesList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-[1400px] border-t border-neutral-200 px-6">
      {SERVICES.map((service, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={service.title} className="border-b border-neutral-200">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center gap-6 py-7 text-left"
              aria-expanded={isOpen}
            >
              <span className="w-10 shrink-0 text-[13px] font-medium text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="flex-1 text-xl font-medium tracking-tight text-neutral-950 sm:text-2xl">
                {service.title}
              </span>

              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 bg-neutral-950"
                    : "bg-neutral-100 group-hover:bg-neutral-200"
                }`}
              >
                <Plus
                  className={`h-4 w-4 ${
                    isOpen ? "text-lime-300" : "text-neutral-950"
                  }`}
                />
              </span>
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <div className="grid gap-8 pl-16 sm:grid-cols-[1fr_1.2fr]">
                  <p className="text-[15px] leading-relaxed text-neutral-500">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-neutral-200 px-3 py-1.5 text-[13px] text-neutral-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24">
      <div className="relative overflow-hidden rounded-2xl bg-neutral-950 px-8 py-16 sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lime-300/30 blur-3xl"
        />
        <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              From Idea to Installation
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
              Whether it is one sign or a complete branded environment, we
              can manage the project from site survey and artwork
              preparation through to manufacture, installation and removal.
            </p>
          </div>

          <Link
            href="/quote"
            className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-white py-3 pl-6 pr-3 text-[14px] font-medium text-neutral-950 transition-colors hover:bg-lime-300"
          >
            Get a Quote
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-950 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4 text-lime-300" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}