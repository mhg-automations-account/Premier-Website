import Link from "next/link";
import Reveal from "./Reveal";
import HomeCard from "./HomeCard";
import { ArrowRightIcon } from "./icons";
import { homes } from "@/lib/homes";

const featuredHomes = homes.slice(0, 3);

export default function Models() {
  return (
    <section id="models" className="bg-maroon-50/60 py-24 lg:py-32">
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
          {featuredHomes.map((home, i) => (
            <Reveal
              key={home.slug}
              delay={i * 120}
              className={`group ${i === 1 ? "lg:mt-0 lg:scale-105" : "lg:mt-10"}`}
            >
              <HomeCard home={home} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={200}>
          <Link
            href="/homes"
            className="btn-pill border border-ink/80 bg-transparent text-ink hover:bg-ink hover:text-cream"
          >
            View All Homes
            <ArrowRightIcon className="arrow h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
