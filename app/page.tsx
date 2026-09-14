import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Models from "@/components/Models";
import Steps from "@/components/Steps";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Models />
        <Steps />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
