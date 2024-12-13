import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Academy } from "@/components/sections/Academy";
import { OnlineStore } from "@/components/sections/OnlineStore";
import { MakerStore } from "@/components/sections/MakerStore";
import { Testimonials } from "@/components/sections/Testimonials";
import ComingSoon from "@/components/sections/ComingSoon";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex flex-col">
        <Hero />
        <Academy />
        <OnlineStore />
        <MakerStore />
      
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
