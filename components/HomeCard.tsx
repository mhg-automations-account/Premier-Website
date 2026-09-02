import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, BathIcon, BedIcon, ExpandIcon, StarIcon } from "./icons";
import type { Home } from "@/lib/homes";

export default function HomeCard({ home }: { home: Home }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-sage-200/70 bg-white shadow-[0_20px_45px_-24px_rgba(38,36,32,0.35)] transition-transform duration-500 group-hover:-translate-y-2">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={home.photo.src}
          alt={home.photo.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
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
          <Link
            href="/#contact"
            className="text-ink group/link flex items-center gap-1.5 text-sm font-semibold"
          >
            View Details
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
