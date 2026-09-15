import TestimonialCard, { type Testimonial } from "./TestimonialCard";

export default function TestimonialsMarquee({ items }: { items: Testimonial[] }) {
  return (
    <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="animate-marquee flex w-max items-stretch gap-6 hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <TestimonialCard key={`${item.id}-${i}`} testimonial={item} />
        ))}
      </div>
    </div>
  );
}
