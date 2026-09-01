import Image from "next/image";
import { ArrowRightIcon, HouseMarkIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      <Image
        src="/hero-cabin-in-the-woods.jpeg"
        alt="A Cascade Modular Homes cabin nestled among tall pines"
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 lg:px-10">
        <HouseMarkIcon className="mb-6 h-7 w-7 text-cream animate-float-slow" />
        <h1 className="font-display max-w-2xl text-[3.2rem] leading-[1.05] text-cream sm:text-[4.4rem]">
          Home, Built
          <br />
          Around You
        </h1>
        <p className="mt-6 max-w-md text-base text-cream/80">
          Quality-crafted modular and manufactured homes, matched to your
          budget and delivered with a team that stays with you every step.
        </p>
        <div className="mt-9">
          <a
            href="#models"
            className="btn-pill bg-cream text-ink shadow-lg shadow-black/10 hover:bg-sage-100"
          >
            View Our Homes
            <ArrowRightIcon className="arrow h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
