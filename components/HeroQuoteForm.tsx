"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon, ChevronIcon, MapPinIcon, PaperPlaneIcon } from "./icons";

export default function HeroQuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-dark flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-maroon-400/20 text-maroon-200">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="font-display mt-6 text-2xl text-cream">Thanks for reaching out!</h3>
        <p className="mt-3 max-w-sm text-sm text-cream/70">
          A member of our team will call or email you within 24 hours to talk
          through your options.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-dark rounded-3xl p-7 sm:p-8"
    >
      <h3 className="font-display text-2xl text-cream">Get a Free Home &amp; Land Quote</h3>

      <div className="mt-6 space-y-4">
        <div>
          <label className="sr-only" htmlFor="hero-name">
            Your Name
          </label>
          <input
            id="hero-name"
            required
            type="text"
            placeholder="Your Name *"
            className="w-full rounded-xl border border-cream/20 bg-white/10 px-4 py-3 text-sm text-cream placeholder:text-cream/50 outline-none transition-colors focus:border-maroon-300"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="hero-email">
            Email
          </label>
          <input
            id="hero-email"
            required
            type="email"
            placeholder="Email *"
            className="w-full rounded-xl border border-cream/20 bg-white/10 px-4 py-3 text-sm text-cream placeholder:text-cream/50 outline-none transition-colors focus:border-maroon-300"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="hero-phone">
            Phone
          </label>
          <input
            id="hero-phone"
            required
            type="tel"
            placeholder="Phone *"
            className="w-full rounded-xl border border-cream/20 bg-white/10 px-4 py-3 text-sm text-cream placeholder:text-cream/50 outline-none transition-colors focus:border-maroon-300"
          />
        </div>

        <div className="relative">
          <label className="sr-only" htmlFor="hero-describes">
            What best describes you?
          </label>
          <select
            id="hero-describes"
            required
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-cream/20 bg-white/10 px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-maroon-300 [&>option]:text-ink"
          >
            <option value="" disabled>
              What best describes you? *
            </option>
            <option>I&rsquo;m ready to buy</option>
            <option>I own land, need a home</option>
            <option>I need land and a home</option>
            <option>Just browsing for now</option>
          </select>
          <ChevronIcon className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-cream/50" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <label className="sr-only" htmlFor="hero-budget">
              Budget
            </label>
            <select
              id="hero-budget"
              defaultValue=""
              className="w-full appearance-none rounded-xl border border-cream/20 bg-white/10 px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-maroon-300 [&>option]:text-ink"
            >
              <option value="">Budget</option>
              <option>Under $75,000</option>
              <option>$75,000 – $110,000</option>
              <option>$110,000 – $150,000</option>
              <option>$150,000+</option>
            </select>
            <ChevronIcon className="pointer-events-none absolute top-1/2 right-3 h-3.5 w-3.5 -translate-y-1/2 text-cream/50" />
          </div>

          <div className="relative">
            <label className="sr-only" htmlFor="hero-location">
              Location
            </label>
            <MapPinIcon className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-cream/50" />
            <input
              id="hero-location"
              type="text"
              placeholder="Location"
              className="w-full rounded-xl border border-cream/20 bg-white/10 py-3 pr-3 pl-9 text-sm text-cream placeholder:text-cream/50 outline-none transition-colors focus:border-maroon-300"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn-pill w-full justify-center bg-maroon-400 text-white shadow-lg shadow-maroon-600/30 hover:bg-maroon-500"
        >
          <PaperPlaneIcon className="h-4 w-4" />
          Get Your Free Quote
        </button>
      </div>
    </form>
  );
}
