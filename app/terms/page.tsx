import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { BUSINESS_ADDRESS, BUSINESS_EMAIL, SITE_NAME } from "@/lib/site";

const title = "Terms & Conditions";
const description = `The terms and conditions for using the ${SITE_NAME} website.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    url: "/terms",
    title,
    description,
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pt-36 pb-24 lg:px-10">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display mt-4 text-4xl text-ink sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted mt-4 text-sm">
            Last updated: September 15, 2026
          </p>

          <div className="text-muted mt-10 space-y-8 text-sm leading-relaxed sm:text-base">
            <p>
              By accessing or using this website, you agree to be bound by
              the following terms and conditions. If you do not agree with
              any part of these terms, please do not use this site.
            </p>

            <div>
              <h2 className="font-display text-xl text-ink">Use of Site</h2>
              <p className="mt-3">
                This website is provided for informational purposes to help
                you learn about manufactured and modular homes available
                through {SITE_NAME}. You agree to use the site only for
                lawful purposes and not to attempt to disrupt or interfere
                with its normal operation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                Pricing &amp; Availability
              </h2>
              <p className="mt-3">
                Floor plans, specifications, pricing, and availability shown
                on this site are subject to change without notice and do not
                constitute a binding offer. Final pricing, options, and
                availability are confirmed directly with our sales team.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                Intellectual Property
              </h2>
              <p className="mt-3">
                All content on this site, including text, images, and logos,
                is the property of {SITE_NAME} or its licensors and may not
                be reproduced or used without permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                Third-Party Links
              </h2>
              <p className="mt-3">
                This site may link to third-party websites for your
                convenience. We are not responsible for the content or
                privacy practices of external sites.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                Limitation of Liability
              </h2>
              <p className="mt-3">
                This site and its content are provided &ldquo;as is&rdquo;
                without warranties of any kind. {SITE_NAME} is not liable for
                any damages arising from your use of this website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                Changes to These Terms
              </h2>
              <p className="mt-3">
                We may revise these terms at any time. Continued use of the
                site after changes are posted constitutes acceptance of the
                updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Contact Us</h2>
              <p className="mt-3">
                Questions about these terms can be sent to{" "}
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="text-maroon-500 hover:text-maroon-600"
                >
                  {BUSINESS_EMAIL}
                </a>{" "}
                or mailed to {BUSINESS_ADDRESS.streetAddress},{" "}
                {BUSINESS_ADDRESS.addressLocality},{" "}
                {BUSINESS_ADDRESS.addressRegion}{" "}
                {BUSINESS_ADDRESS.postalCode}.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
