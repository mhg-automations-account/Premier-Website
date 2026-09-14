import Link from "next/link";
import {
  FacebookIcon,
  HouseMarkIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
} from "./icons";

const pageLinks = [
  { label: "Home", href: "/#top" },
  { label: "Our Models", href: "/#models" },
  { label: "All Homes", href: "/homes" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
  { label: "Get A Quote", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon-400/20 text-maroon-300">
                <HouseMarkIcon className="h-5 w-5" />
              </span>
              <span className="font-display text-lg text-cream">
                Premier Midwest Homes
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Quality, affordable manufactured and modular homes for families
              across the 4-State Area, with a team that guides you from first
              call to move-in day.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-cream">Pages</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-cream">Contact Us</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-maroon-300" />
                <a href="tel:14173820829" className="hover:text-cream">
                  (417) 382-0829
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-maroon-300" />
                <a href="mailto:mak@premiermidwesthomes.com" className="hover:text-cream">
                  mak@premiermidwesthomes.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-maroon-300" />
                <span>
                  6276 SE Hwy 69 Alt
                  <br />
                  Riverton, KS 66770
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-cream/50">Mon – Fri: 9am – 5pm</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-cream">Follow Us</h4>
            <div className="mt-5 flex gap-3">
              {[InstagramIcon, FacebookIcon, TwitterIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-maroon-300 hover:text-maroon-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream/50 sm:flex-row lg:px-10">
          <p>© 2026 Premier Midwest Homes. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
