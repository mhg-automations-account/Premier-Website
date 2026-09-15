import Reveal from "./Reveal";
import TestimonialsMarquee from "./TestimonialsMarquee";
import { StarIcon } from "./icons";
import type { Testimonial } from "./TestimonialCard";
import { getGoogleReviews } from "@/lib/google-reviews";
import { videoTestimonials, writtenTestimonials } from "@/lib/testimonials";
import { GOOGLE_REVIEWS_URL } from "@/lib/site";

function interleave(groups: Testimonial[][]): Testimonial[] {
  const maxLength = Math.max(...groups.map((group) => group.length));
  const result: Testimonial[] = [];
  for (let i = 0; i < maxLength; i++) {
    for (const group of groups) {
      if (group[i]) result.push(group[i]);
    }
  }
  return result;
}

export default async function Testimonials() {
  const { reviews, summary } = await getGoogleReviews();
  const items = interleave([videoTestimonials, reviews, writtenTestimonials]);

  return (
    <section id="testimonials" className="bg-maroon-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Straight From Our Homeowners</p>
          <h2 className="font-display mt-4 text-4xl text-ink sm:text-5xl">
            Real Families. Real Reviews.
          </h2>
          <p className="text-muted mt-4 text-base">
            Google reviews, video stories, and notes from families we&rsquo;ve helped
            find home &mdash; no scripts, no actors.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm"
          >
            <span className="flex items-center gap-1 font-semibold text-ink">
              <StarIcon className="h-4 w-4 text-gold" />
              {summary.rating.toFixed(1)}
            </span>
            <span className="text-muted">from {summary.reviewCount}+ Google reviews</span>
          </a>
        </Reveal>
      </div>

      <TestimonialsMarquee items={items} />
    </section>
  );
}
