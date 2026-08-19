// components/home/hero.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[420px_1fr] lg:gap-8 lg:py-10">
        {/* LEFT: Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-[3.25rem] font-medium leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl">
            We make
            <br />
            brands
            <br />
            <span className="italic font-light">impossible</span>
            <br />
            to ignore.
          </h1>

          <p className="mt-6 max-w-[340px] text-[15px] leading-relaxed text-neutral-500">
            Premium signage, illuminated letters, acrylic signs, printed
            graphics, aluminium panels and visual branding—designed and
            installed to elevate your brand in the real world.
          </p>

          <Link
            href="/work"
            className="group mt-8 flex w-fit items-center gap-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-300 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5 text-neutral-950" />
            </span>
            <span className="text-[13px] font-semibold tracking-wide text-neutral-950">
              VIEW OUR WORK
            </span>
          </Link>
        </div>

        {/* RIGHT: Collage */}
        <div className="relative">
          {/* ambient gradient blob */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 -inset-y-10 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_top_right,_#d4f542_0%,_#eef9c8_45%,_rgba(255,255,255,0)_75%)] blur-2xl"
          />

          <div className="relative mx-auto aspect-[725/610] w-full max-w-[725px]">
            {/* 2. Center fluted panel with glowing S */}
            <div
              className="absolute overflow-hidden rounded-md bg-neutral-950 shadow-xl"
              style={{ left: "32.8%", top: "5.3%", width: "46.5%", height: "73.5%" }}
            >
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 14px)",
                }}
              />
              <svg
                viewBox="0 0 200 320"
                className="absolute left-1/2 top-1/2 h-[70%] w-auto -translate-x-1/2 -translate-y-1/2"
                fill="none"
              >
                <path
                  d="M150 40C150 20 130 10 100 10C65 10 40 30 40 60C40 100 80 110 100 120C140 140 160 160 160 200C160 240 130 260 100 260C70 260 50 250 50 225"
                  stroke="#e8ff6b"
                  strokeWidth="10"
                  strokeLinecap="round"
                  style={{
                    filter:
                      "drop-shadow(0 0 6px #e8ff6b) drop-shadow(0 0 18px #cdf542)",
                  }}
                />
              </svg>
            </div>

            {/* 1. Black "SIGN WORKS / VISUAL BRANDING SYSTEMS" card */}
            <div
              className="absolute flex flex-col justify-between rounded-md bg-neutral-950 p-4 text-white shadow-lg"
              style={{ left: "24.8%", top: "8%", width: "15.7%", height: "33.1%" }}
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-semibold leading-tight text-lime-300">
                  SIGN
                  <br />
                  WORKS
                </span>
                <ArrowUpRight className="h-4 w-4 text-lime-300" />
              </div>
              <p className="text-sm font-medium leading-snug">
                Visual
                <br />
                Branding
                <br />
                Systems
              </p>
            </div>

            {/* 3. Top right storefront photo */}
            <div
              className="absolute flex items-center justify-center rounded-md bg-neutral-900 shadow-lg"
              style={{ left: "61.7%", top: "5.7%", width: "19.3%", height: "16.5%" }}
            >
              <span className="text-center text-xs font-semibold tracking-wide text-white">
                SIGN
                <br />
                WORKS
              </span>
            </div>

            {/* 4. "Crafted for stand out" card with metal S */}
            <div
              className="absolute flex flex-col justify-between rounded-md bg-neutral-50 p-3 shadow-lg"
              style={{ left: "68.3%", top: "33.6%", width: "17.9%", height: "26.5%" }}
            >
              <div className="flex items-start justify-between">
                <span className="text-[9px] font-medium uppercase leading-tight text-neutral-500">
                  Crafted
                  <br />
                  for stand out
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400" />
              </div>
              <div className="flex flex-1 items-center justify-center">
                <span
                  className="text-5xl font-black text-neutral-800"
                  style={{ WebkitTextStroke: "1px #a3a3a3" }}
                >
                  S
                </span>
              </div>
            </div>

            {/* 5. Stone panel "/Sw" */}
            <div
              className="absolute overflow-hidden rounded-md shadow-lg"
              style={{
                left: "17%",
                top: "51.2%",
                width: "21.8%",
                height: "27.6%",
                background:
                  "linear-gradient(135deg, #b8b3ab 0%, #9a958c 55%, #85807a 100%)",
              }}
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold italic text-neutral-700/80">
                /Sw
              </span>
              <span
                className="absolute bottom-3 left-3 text-[9px] font-semibold tracking-widest text-neutral-600"
                style={{ writingMode: "vertical-rl" }}
              >
                BUILT TO STAND OUT
              </span>
              <ArrowUpRight className="absolute bottom-3 right-3 h-3.5 w-3.5 text-neutral-600" />
            </div>

            {/* 6. Metal rings / hardware photo */}
            <div
              className="absolute flex items-center justify-center overflow-hidden rounded-md bg-neutral-900 shadow-lg"
              style={{ left: "32.4%", top: "66.4%", width: "14.5%", height: "28.3%" }}
            >
              <svg viewBox="0 0 100 100" className="h-4/5 w-4/5" fill="none">
                {[0, 1, 2, 3].map((i) => (
                  <ellipse
                    key={i}
                    cx="50"
                    cy={30 + i * 15}
                    rx="38"
                    ry="10"
                    stroke="#e5e5e5"
                    strokeWidth="3"
                    opacity={0.9 - i * 0.15}
                  />
                ))}
              </svg>
            </div>

            {/* 7. Lime green "Bold ideas" card */}
            <div
              className="absolute flex flex-col justify-between rounded-md bg-lime-300 p-4 shadow-lg"
              style={{ left: "54.8%", top: "70.4%", width: "16.3%", height: "23.9%" }}
            >
              <p className="text-sm font-medium leading-snug text-neutral-950">
                Bold
                <br />
                Ideas.
                <br />
                Lasting
                <br />
                Impact.
              </p>
              <ArrowUpRight className="h-4 w-4 self-end text-neutral-950" />
            </div>

            {/* 8. Reception photo "/Sw" */}
            <div
              className="absolute flex items-end overflow-hidden rounded-md bg-neutral-950 p-4 shadow-lg"
              style={{ left: "74.1%", top: "62.5%", width: "20.7%", height: "33.6%" }}
            >
              <div
                className="pointer-events-none absolute inset-x-4 bottom-10 h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, #e8ff6b, transparent)",
                  boxShadow: "0 0 12px 2px #e8ff6b",
                }}
              />
              <span className="text-lg font-semibold italic text-white">/Sw</span>
            </div>
          </div>

          {/* scroll indicator */}
          <div className="mt-6 flex flex-col items-center gap-2 text-neutral-400">
            <span className="h-8 w-px bg-neutral-300" />
            <span className="text-[10px] font-medium tracking-widest">SCROLL</span>
          </div>
        </div>
      </div>
    </section>
  );
}