import Image from "next/image";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "./icons";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from "@/lib/site";

const pageLinks = [
  { label: "Home", href: "/#top" },
  { label: "Our Models", href: "/#models" },
  { label: "All Homes", href: "/homes" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
  { label: "Get A Quote", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Image
              src="/Logo.png"
              alt="Premier Midwest Homes"
              width={1802}
              height={873}
              className="h-14 w-auto"
            />
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
                <a href={`tel:${BUSINESS_PHONE_TEL}`} className="hover:text-cream">
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-maroon-300" />
                <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-cream">
                  {BUSINESS_EMAIL}
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
            <p className="mt-4 text-xs text-cream/50">Mon – Fri: 9am – 6pm</p>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream/50 sm:flex-row lg:px-10">
          <p>© 2026 Premier Midwest Homes. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-cream">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
