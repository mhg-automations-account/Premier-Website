import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { BUSINESS_ADDRESS, BUSINESS_EMAIL, SITE_NAME } from "@/lib/site";

const title = "Privacy Policy";
const description = `How ${SITE_NAME} collects, uses, and protects your information.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    url: "/privacy-policy",
    title,
    description,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pt-36 pb-24 lg:px-10">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display mt-4 text-4xl text-ink sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-muted mt-4 text-sm">
            Last updated: September 15, 2026
          </p>

          <div className="text-muted mt-10 space-y-8 text-sm leading-relaxed sm:text-base">
            <p>
              {SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy. This policy explains
              what information we collect through our website and how we use
              it.
            </p>

            <div>
              <h2 className="font-display text-xl text-ink">
                Information We Collect
              </h2>
              <p className="mt-3">
                When you submit a contact or quote request form, we collect
                the information you provide, such as your name, email
                address, phone number, budget, and desired location. We also
                collect standard technical data (like browser type and pages
                visited) through normal web server logs.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                How We Use Your Information
              </h2>
              <p className="mt-3">
                We use the information you provide to respond to your
                inquiry, discuss available homes and financing options, and
                otherwise communicate with you about our products and
                services. We do not sell your personal information to third
                parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                Cookies &amp; Analytics
              </h2>
              <p className="mt-3">
                Our site may use cookies or similar technologies to
                understand how visitors use the site and to improve its
                performance. You can disable cookies in your browser
                settings; doing so may affect some site functionality.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                Data Security
              </h2>
              <p className="mt-3">
                We take reasonable technical and administrative measures to
                protect the information you share with us. No method of
                transmission or storage is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Your Choices</h2>
              <p className="mt-3">
                You may contact us at any time to ask what information we
                hold about you, to request corrections, or to ask that we
                delete it, subject to any legal obligations we may have to
                retain certain records.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this policy from time to time. Changes will be
                posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Contact Us</h2>
              <p className="mt-3">
                Questions about this policy can be sent to{" "}
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
