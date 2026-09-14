import Reveal from "./Reveal";
import { ChatIcon, HouseMarkIcon, TruckIcon } from "./icons";

const steps = [
  {
    icon: ChatIcon,
    title: "Tell Us Your Situation",
    description:
      "Share your budget, timeline, and where you'd like to live. No pressure, just a conversation.",
  },
  {
    icon: HouseMarkIcon,
    title: "We Match Home & Plan",
    description:
      "We pair you with the right floor plan and a financing plan tailored to your needs.",
  },
  {
    icon: TruckIcon,
    title: "We Guide Setup & Delivery",
    description:
      "From permits to transport and final setup, we handle the details so you can move in.",
  },
];

export default function Steps() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Get Started</p>
        <h2 className="font-display mt-4 text-4xl text-ink sm:text-5xl">
          Your Path To Homeownership
        </h2>
        <p className="text-muted mt-4 text-base">
          Three simple steps to your new home.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal
            key={step.title}
            delay={i * 130}
            className="glass-card relative rounded-3xl px-7 py-10 text-center shadow-[0_18px_40px_-28px_rgba(38,36,32,0.4)] transition-transform duration-500 hover:-translate-y-2"
          >
            <span className="absolute top-6 left-1/2 -z-0 h-16 w-16 -translate-x-1/2 rounded-full bg-maroon-100 blur-xl" />
            <span className="font-display relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-maroon-400 text-lg text-white shadow-md shadow-maroon-500/30">
              {i + 1}
            </span>
            <step.icon className="mx-auto mt-5 h-6 w-6 text-maroon-600" />
            <h3 className="font-display mt-4 text-xl text-ink">{step.title}</h3>
            <p className="text-muted mt-2 text-sm">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
