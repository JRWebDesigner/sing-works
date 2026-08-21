// app/studio/page.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Section = {
  title: string;
  paragraphs: string[];
};

const SECTIONS: Section[] = [
  {
    title: "Our Approach",
    paragraphs: [
      "We believe strong work starts with understanding the brand, the space and the people it needs to connect with.",
      "Every project is approached with attention to proportion, materials, colour, finish and placement — making sure the final result feels intentional and works naturally within its environment.",
    ],
  },
  {
    title: "Craft & Production",
    paragraphs: [
      "Our studio brings together creative thinking, traditional craftsmanship and modern production techniques.",
      "We care about the details that make a project feel properly finished, from the first visual decisions through to the final installation.",
    ],
  },
  {
    title: "How We Work",
    paragraphs: [
      "Some clients come to us with a complete vision, while others are starting with an idea.",
      "We work collaboratively throughout the process, finding the right solution for the project and making sure what is designed can be produced and installed to the highest standard.",
    ],
  },
];

export default function StudioPage() {
  return (
    <>
        <StudioHero />
        <SectionsList />
        <ClosingStatement />
        <ClosingCTA />
    </>
  );
}

function StudioHero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-20">
      <span className="mb-5 inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest text-neutral-500">
        <span className="h-2 w-2 rounded-full bg-lime-300" />
        STUDIO
      </span>

      <h1 className="max-w-3xl text-[3rem] font-medium leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl">
        A London sign and graphics studio bringing brands{" "}
        <span className="italic font-light">into the physical world.</span>
      </h1>

      <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-neutral-500">
        We design, make and install signage, graphics and visual branding for independent businesses, designers, agencies and established brands.
      </p>
    </section>
  );
}

function SectionsList() {
  return (
    <section className="mx-auto max-w-[1400px] border-t border-neutral-200 px-6">
      {SECTIONS.map((section, index) => (
        <div
          key={section.title}
          className="flex flex-col gap-4 border-b border-neutral-200 py-12"
        >
          <h2 className="text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl">
            {section.title}
          </h2>

          <div className="flex flex-col gap-4">
            {section.paragraphs.map((p, i) => (
              <p
                key={i}
                className=" text-[15px] leading-relaxed text-neutral-500"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function ClosingStatement() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24">
      <p className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-neutral-950 sm:text-4xl">
        The result is work that is{" "}
        <span className="italic font-light">clear, considered</span> and made
        to have an impact.
      </p>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-24">
      <div className="relative overflow-hidden rounded-2xl bg-neutral-950 px-8 py-16 sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lime-300/30 blur-3xl"
        />
        <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Let&apos;s bring your brand into the real world.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
              From a single sign to a complete branded environment, we manage
              the project from first idea through to installation.
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