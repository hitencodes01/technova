import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Schedule from "@/components/Schedule";
import Awards from "@/components/Awards";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="mt-5">
          <Hero />
        </div>
        <About />
        <Events />
        <Schedule />
        <Awards />
        <Team />
      </main>
      <Footer />
    </>
  );
}