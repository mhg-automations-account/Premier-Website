"use client";

import { useEffect, useState } from "react";
import { SceneDusk, SceneDawn, SceneMountain } from "./HeroScenes";
import { ArrowRightIcon, HouseMarkIcon } from "./icons";

const SLIDE_DURATION = 6000;

const scenes = [SceneDusk, SceneDawn, SceneMountain];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % scenes.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      {scenes.map((Scene, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Scene className="h-full w-full" />
        </div>
      ))}

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

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-0.5">
        {scenes.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show scene ${i + 1}`}
            onClick={() => setActive(i)}
            className="relative h-[3px] flex-1 overflow-hidden bg-cream/25"
          >
            <span
              className={`absolute inset-y-0 left-0 block bg-cream ${
                i === active
                  ? "w-full animate-[hero-progress_6s_linear]"
                  : i < active
                  ? "w-full"
                  : "w-0"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
