import Clients from "@/components/Clients/Clients";
import Contact from "@/components/Contact/Contact";
import Features from "@/components/Features/Features";
import Navbar from "@/components/Header/Navbar";
import Hero from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden py-4 sm:px-15 px-5">
      <Navbar />
      <Hero />
      <Features />
      <Clients />
      <Pricing />
      <Contact />
    </main>
  );
}
