"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon, ChevronIcon, MapPinIcon, PaperPlaneIcon } from "./icons";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-card flex h-full min-h-[520px] flex-col items-center justify-center rounded-3xl p-10 text-center shadow-[0_30px_60px_-30px_rgba(38,36,32,0.4)]">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-maroon-100 text-maroon-600">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="font-display mt-6 text-2xl text-ink">Thanks for reaching out!</h3>
        <p className="text-muted mt-3 max-w-sm text-sm">
          A member of our team will call or email you within 24 hours to talk
          through your options.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card rounded-3xl p-8 shadow-[0_30px_60px_-30px_rgba(38,36,32,0.4)] sm:p-10"
    >
      <h3 className="font-display text-2xl text-ink">Contact Us</h3>
      <p className="text-muted mt-1 text-sm">We&rsquo;ll get back to you within 24 hours</p>

      <div className="mt-7 space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            required
            type="text"
            placeholder="Your full name"
            className="w-full rounded-xl border border-maroon-200 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-muted-soft outline-none transition-colors focus:border-maroon-400"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            required
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-maroon-200 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-muted-soft outline-none transition-colors focus:border-maroon-400"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink" htmlFor="phone">
            Phone *
          </label>
          <input
            id="phone"
            required
            type="tel"
            placeholder="(555) 123-4567"
            className="w-full rounded-xl border border-maroon-200 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-muted-soft outline-none transition-colors focus:border-maroon-400"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink" htmlFor="budget">
            Budget
          </label>
          <div className="relative">
            <select
              id="budget"
              defaultValue=""
              className="w-full appearance-none rounded-xl border border-maroon-200 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-maroon-400"
            >
              <option value="" disabled>
                Select a range
              </option>
              <option>Under $75,000</option>
              <option>$75,000 – $110,000</option>
              <option>$110,000 – $150,000</option>
              <option>$150,000+</option>
            </select>
            <ChevronIcon className="text-muted pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2" />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink" htmlFor="location">
            Desired Location
          </label>
          <div className="relative">
            <MapPinIcon className="text-muted-soft pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2" />
            <input
              id="location"
              type="text"
              placeholder="City, State or County"
              className="w-full rounded-xl border border-maroon-200 bg-white/70 py-3 pr-4 pl-10 text-sm text-ink placeholder:text-muted-soft outline-none transition-colors focus:border-maroon-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn-pill w-full justify-center bg-maroon-400 text-white shadow-lg shadow-maroon-500/25 hover:bg-maroon-500"
        >
          <PaperPlaneIcon className="h-4 w-4" />
          Get In Touch
        </button>
        <p className="text-muted-soft text-center text-xs">
          By submitting, you agree to receive communications from us.
        </p>
      </div>
    </form>
  );
}
