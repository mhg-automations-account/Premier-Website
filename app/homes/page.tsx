import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import HomesFilters from "@/components/HomesFilters";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { homes } from "@/lib/homes";

export const metadata: Metadata = {
  title: "All Available Homes | Premier Midwest Homes",
  description:
    "Browse manufactured and modular homes currently available from Premier Midwest Homes, with floor plans, specs, and pricing.",
};

export default function HomesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative flex h-[46vh] min-h-[380px] w-full items-end overflow-hidden">
          <Image
            src="/model-ridgeline-kitchen.webp"
            alt="Open kitchen and living room in a Premier Midwest Homes manufactured home"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 lg:px-10">
            <Link
              href="/"
              className="text-cream/70 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:text-cream"
            >
              &larr; Back Home
            </Link>
            <h1 className="font-display mt-4 text-4xl text-cream sm:text-5xl">
              All Available Homes
            </h1>
            <p className="mt-4 max-w-md text-base text-cream/80">
              Browse our lineup of manufactured and modular homes, ready for
              financing, delivery, and setup on your land.
            </p>
          </div>
        </section>

        <section className="bg-maroon-50/60 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <HomesFilters homes={homes} />

            <Reveal className="mt-16 text-center" delay={200}>
              <p className="text-muted text-sm">
                Don&apos;t see the right fit? We add new floor plans regularly.
              </p>
              <Link
                href="/#contact"
                className="btn-pill mt-5 inline-flex border border-ink/80 bg-ink text-cream hover:bg-charcoal"
              >
                Talk To Our Team
                <ArrowRightIcon className="arrow h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
