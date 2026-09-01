import Reveal from "./Reveal";
import { BoltIcon, RulerIcon, ShieldIcon, TruckIcon } from "./icons";

const features = [
  {
    icon: RulerIcon,
    title: "Built To Your Plan",
    description:
      "Dozens of floor plans from cozy singles to spacious multi-section homes, customized to fit your family and your lot.",
  },
  {
    icon: BoltIcon,
    title: "Energy Efficient",
    description:
      "Upgraded insulation, efficient HVAC, and modern appliances keep utility bills low year-round.",
  },
  {
    icon: ShieldIcon,
    title: "Built To Code",
    description:
      "Every home is factory-inspected and meets or exceeds state and HUD construction standards.",
  },
  {
    icon: TruckIcon,
    title: "Delivery & Setup",
    description:
      "We coordinate permits, site prep, transport, and final setup so you can just move in.",
  },
];

export default function Features() {
  return (
    <section id="why-us" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">The Cascade Difference</p>
        <h2 className="font-display mt-4 text-4xl text-ink sm:text-5xl">
          Quality Meets Affordability
        </h2>
        <p className="text-muted mt-4 text-base">
          Real craftsmanship and honest pricing, without the sales-lot pressure.
        </p>
      </Reveal>

      <div className="mt-16 divide-y divide-sage-200/70 rounded-3xl border border-sage-200/70 bg-white/60">
        {features.map((feature, i) => (
          <Reveal
            key={feature.title}
            delay={i * 90}
            className="flex flex-col items-start gap-5 px-8 py-8 sm:flex-row sm:items-center sm:px-10"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600">
              <feature.icon className="h-6 w-6" />
            </span>
            <span>
              <span className="block font-display text-xl text-ink">
                {feature.title}
              </span>
              <span className="text-muted mt-1 block text-sm sm:max-w-xl">
                {feature.description}
              </span>
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
