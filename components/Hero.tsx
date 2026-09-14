import Image from "next/image";
import Link from "next/link";
import HeroQuoteForm from "./HeroQuoteForm";
import { ArrowRightIcon, CheckIcon, PhoneIcon, StarIcon } from "./icons";
import { homes } from "@/lib/homes";

const trustPoints = ["Licensed Dealer", "Financing Available", "Delivery Included"];

export default function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <Image
        src="/hero-background.jpeg"
        alt="A Premier Midwest Homes manufactured home with a covered front porch"
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/60" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:px-10">
        <div>
          <span className="glass inline-flex items-center gap-2 rounded-full border-cream/30 px-4 py-1.5 text-xs font-semibold text-cream">
            <StarIcon className="h-3.5 w-3.5 text-gold" />
            Trusted by Families in Riverton, Kansas
          </span>

          <h1 className="font-display mt-6 max-w-xl text-[3rem] leading-[1.05] text-cream sm:text-[4.2rem]">
            Find Your Perfect
            <br />
            Manufactured Home
          </h1>
          <p className="mt-6 max-w-md text-base text-cream/80">
            Browse {homes.length}+ quality homes available now. From cozy
            single sections to spacious multi-sections, our team helps you
            find the right fit with financing, delivery, and setup handled
            every step of the way.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/homes"
              className="btn-pill bg-maroon-400 text-white shadow-lg shadow-maroon-600/30 hover:bg-maroon-500"
            >
              Browse Homes
              <ArrowRightIcon className="arrow h-4 w-4" />
            </Link>
            <a
              href="tel:14173820829"
              className="glass btn-pill border-cream/30 text-cream hover:bg-cream hover:text-ink"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-medium text-cream/85">
                <CheckIcon className="h-4 w-4 text-gold" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <HeroQuoteForm />
      </div>
    </section>
  );
}
