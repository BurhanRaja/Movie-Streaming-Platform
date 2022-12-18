import dynamic from "next/dynamic";
import CardSlider from "../components/CardSlider";
import Navbar from "../components/Navbar";

const Hero = dynamic(() => import("../components/Hero"), {
  ssr: false
});

export default function Home() {
  return (
    <section className="overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <CardSlider />
        <CardSlider />
      </main>
    </section>
  )
}
