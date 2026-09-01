import Reveal from "./Reveal";
import { QuoteIcon, StarIcon } from "./icons";

const reviews = [
  {
    name: "Marissa T.",
    initial: "M",
    color: "bg-sage-400",
    time: "a month ago",
    text: "Knowledgeable without being pushy. The team walked us through every option and never rushed a decision. One of the easiest big purchases we've made.",
  },
  {
    name: "Owen R.",
    initial: "O",
    color: "bg-[#c98a4b]",
    time: "3 months ago",
    text: "Cascade found us a floor plan that fit our lot perfectly and handled the permitting so we didn't have to. Highly recommend this company!",
  },
  {
    name: "Priya S.",
    initial: "P",
    color: "bg-[#6b8f9e]",
    time: "5 months ago",
    text: "From the first call to move-in day, everything was smooth. Great communication and the crew did an amazing job with setup.",
  },
  {
    name: "Devon K.",
    initial: "D",
    color: "bg-[#a5674f]",
    time: "7 months ago",
    text: "Bought our home from Cascade and couldn't be happier. Fair pricing, honest answers, and they treated us like family the whole way through.",
  },
  {
    name: "Lena B.",
    initial: "L",
    color: "bg-sage-600",
    time: "9 months ago",
    text: "We relocated for work and needed a home fast. Cascade went out of their way to make it happen on our timeline. Truly grateful.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-sage-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Reviews</p>
          <h2 className="font-display mt-4 text-4xl text-ink sm:text-5xl">
            What Our Homeowners Say
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="font-display text-ink text-base">5.0</span>
            <span className="text-muted text-sm">(126 reviews)</span>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              delay={(i % 3) * 110}
              className="flex flex-col rounded-3xl border border-sage-200/70 bg-white p-7 shadow-[0_16px_36px_-28px_rgba(38,36,32,0.35)] transition-transform duration-500 hover:-translate-y-1.5"
            >
              <QuoteIcon className="h-7 w-7 text-sage-200" />
              <p className="text-ink/85 mt-4 flex-1 text-sm leading-relaxed">
                {review.text}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-sage-100 pt-5">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white ${review.color}`}
                >
                  {review.initial}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {review.name}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="flex gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <StarIcon key={s} className="h-3 w-3" />
                      ))}
                    </span>
                    <span className="text-muted-soft text-xs">{review.time}</span>
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
