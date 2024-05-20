import Navbar from "@/components/Header/Navbar";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="relative bg-black h-screen overflow-hidden py-4 sm:px-15 px-5">
      <Navbar />
      <Hero />
    </main>
  );
}
