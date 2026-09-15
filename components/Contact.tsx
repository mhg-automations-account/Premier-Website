import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { CheckIcon, PhoneIcon } from "./icons";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_TEL } from "@/lib/site";

const checklist = ["Free Consultation", "No Obligation", "Quick Response"];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-50 via-cream to-cream" />
      <div className="animate-drift absolute -top-24 -right-24 h-72 w-72 rounded-full bg-maroon-200/40 blur-3xl" />
      <div className="animate-drift absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-maroon-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal>
          <p className="eyebrow">Get In Touch</p>
          <h2 className="font-display mt-4 text-4xl text-ink sm:text-5xl">
            Ready To Find Your <span className="text-maroon-500">Dream Home?</span>
          </h2>
          <p className="text-muted mt-5 max-w-md text-base">
            Our team is here to help every step of the way. From finding the
            perfect home to financing and delivery, we&rsquo;ve got you covered.
          </p>

          <div className="glass-card mt-8 flex items-center gap-4 rounded-2xl p-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-maroon-100 text-maroon-600">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="text-muted block text-sm">Call us directly</span>
              <a href={`tel:${BUSINESS_PHONE_TEL}`} className="font-display text-xl text-ink">
                {BUSINESS_PHONE_DISPLAY}
              </a>
            </span>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink/80">
                <CheckIcon className="h-4 w-4 text-maroon-500" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
