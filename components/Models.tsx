import Reveal from "./Reveal";
import HouseCardArt from "./HouseCardArt";
import { ArrowRightIcon, BathIcon, BedIcon, ExpandIcon, StarIcon } from "./icons";

const homes = [
  {
    name: "The Magnolia",
    type: "Single-Section",
    rating: "4.9",
    beds: 2,
    baths: 1,
    sqft: "728",
    tags: ["Open Floor Plan", "Covered Porch"],
    price: "62,900",
    art: { sky: ["#f4e6c4", "#e3c98f"] as [string, string], siding: "#f2ede0", roof: "#4c5b45", door: "#7a5230" },
  },
  {
    name: "The Ridgeline",
    type: "Double-Section",
    rating: "5.0",
    beds: 3,
    baths: 2,
    sqft: "1,600",
    tags: ["Island Kitchen", "Primary Suite"],
    price: "94,500",
    art: { sky: ["#dfe8e0", "#b9cdb8"] as [string, string], siding: "#e7e2d2", roof: "#39473c", door: "#5d4128" },
  },
  {
    name: "The Cascade",
    type: "Double-Section",
    rating: "4.8",
    beds: 4,
    baths: 2,
    sqft: "1,808",
    tags: ["Bonus Room", "Energy Star"],
    price: "118,900",
    art: { sky: ["#f6ded0", "#e9b98f"] as [string, string], siding: "#efe6d4", roof: "#5a382b", door: "#33403a" },
  },
];

export default function Models() {
  return (
    <section id="models" className="bg-sage-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Models</p>
          <h2 className="font-display mt-4 text-4xl text-ink sm:text-5xl">
            Featured Homes
          </h2>
          <p className="text-muted mt-4 text-base">
            Thoughtfully designed floor plans where craftsmanship meets everyday comfort.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-3 lg:items-start lg:gap-6">
          {homes.map((home, i) => (
            <Reveal
              key={home.name}
              delay={i * 120}
              className={`group ${i === 1 ? "lg:mt-0 lg:scale-105" : "lg:mt-10"}`}
            >
              <div className="overflow-hidden rounded-3xl border border-sage-200/70 bg-white shadow-[0_20px_45px_-24px_rgba(38,36,32,0.35)] transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative h-52 overflow-hidden">
                  <HouseCardArt
                    {...home.art}
                    className="h-full w-full scale-105 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="glass absolute top-4 right-4 flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold text-ink">
                    <StarIcon className="h-3.5 w-3.5 text-gold" />
                    {home.rating}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl text-ink">{home.name}</h3>
                  <p className="text-muted mt-1 text-sm">{home.type}</p>

                  <div className="text-muted mt-4 flex items-center gap-4 text-xs font-medium">
                    <span className="flex items-center gap-1.5">
                      <BedIcon className="h-4 w-4 text-sage-500" />
                      {home.beds} bed
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BathIcon className="h-4 w-4 text-sage-500" />
                      {home.baths} bath
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ExpandIcon className="h-4 w-4 text-sage-500" />
                      {home.sqft} sqft
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {home.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-sage-100 px-3 py-1 text-[11px] font-semibold tracking-wide text-sage-700 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-sage-100 pt-5">
                    <div>
                      <span className="text-muted block text-[11px] tracking-wide uppercase">
                        Starting at
                      </span>
                      <span className="font-display text-lg text-ink">
                        ${home.price}
                      </span>
                    </div>
                    <a
                      href="#contact"
                      className="text-ink group/link flex items-center gap-1.5 text-sm font-semibold"
                    >
                      View Details
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={200}>
          <a
            href="#contact"
            className="btn-pill border border-ink/80 bg-transparent text-ink hover:bg-ink hover:text-cream"
          >
            See All 71 Homes
            <ArrowRightIcon className="arrow h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
