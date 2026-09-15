import { GoogleIcon, PlayIcon, QuoteIcon, StarIcon } from "./icons";
import type { GoogleReview } from "@/lib/google-reviews";
import type { VideoTestimonial, WrittenTestimonial } from "@/lib/testimonials";

export type Testimonial = GoogleReview | WrittenTestimonial | VideoTestimonial;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "text-gold" : "text-maroon-100"}`}
        />
      ))}
    </div>
  );
}

function Avatar({ name, avatarUrl }: { name: string; avatarUrl?: string }) {
  if (avatarUrl) {
    // Google profile photos are small, viewer-side images — plain <img>
    // avoids widening the next/image remote-pattern allowlist for a
    // domain (lh3.googleusercontent.com) that's outside our control.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={avatarUrl} alt="" className="h-10 w-10 shrink-0 rounded-full object-cover" />;
  }

  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-100 text-sm text-maroon-600">
      {initial}
    </span>
  );
}

function GoogleCard({ review }: { review: GoogleReview }) {
  return (
    <div className="glass-card flex h-full w-[300px] shrink-0 flex-col rounded-3xl p-6 shadow-[0_18px_40px_-28px_rgba(38,36,32,0.4)] sm:w-[340px]">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        <GoogleIcon className="h-5 w-5" />
      </div>
      <p className="text-ink mt-4 flex-1 text-sm leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3 border-t border-maroon-100 pt-5">
        <Avatar name={review.name} avatarUrl={review.avatarUrl} />
        <span>
          <span className="block text-sm font-semibold text-ink">{review.name}</span>
          <span className="text-muted-soft block text-xs">Google Review · {review.relativeTime}</span>
        </span>
      </div>
    </div>
  );
}

function WrittenCard({ testimonial }: { testimonial: WrittenTestimonial }) {
  return (
    <div className="glass-card flex h-full w-[300px] shrink-0 flex-col rounded-3xl p-6 shadow-[0_18px_40px_-28px_rgba(38,36,32,0.4)] sm:w-[340px]">
      <div className="flex items-center justify-between">
        <Stars rating={testimonial.rating} />
        <QuoteIcon className="h-6 w-6 text-maroon-200" />
      </div>
      <p className="text-ink mt-4 flex-1 text-sm leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3 border-t border-maroon-100 pt-5">
        <Avatar name={testimonial.name} />
        <span>
          <span className="block text-sm font-semibold text-ink">{testimonial.name}</span>
          <span className="text-muted-soft block text-xs">{testimonial.role}</span>
        </span>
      </div>
    </div>
  );
}

function VideoCard({ testimonial }: { testimonial: VideoTestimonial }) {
  return (
    <div className="group relative h-[380px] w-[260px] shrink-0 overflow-hidden rounded-3xl bg-charcoal shadow-[0_18px_40px_-28px_rgba(38,36,32,0.4)] sm:w-[280px]">
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-400/40 via-charcoal to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />

      {testimonial.videoSrc ? (
        <button
          type="button"
          className="absolute inset-0 flex items-center justify-center"
          aria-label={`Play video testimonial from ${testimonial.name}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-maroon-400/90 text-white shadow-lg shadow-charcoal/40 transition-transform duration-300 group-hover:scale-110">
            <PlayIcon className="ml-1 h-6 w-6" />
          </span>
        </button>
      ) : (
        <span className="absolute top-4 right-4 rounded-full bg-charcoal/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-cream/80 uppercase">
          Coming Soon
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="block text-sm font-semibold text-cream">{testimonial.name}</span>
        <span className="block text-xs text-cream/60">{testimonial.role}</span>
      </div>
    </div>
  );
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  if (testimonial.source === "google") return <GoogleCard review={testimonial} />;
  if (testimonial.source === "video") return <VideoCard testimonial={testimonial} />;
  return <WrittenCard testimonial={testimonial} />;
}
