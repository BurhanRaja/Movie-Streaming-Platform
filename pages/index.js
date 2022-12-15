import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <Navbar />
      <main>
        <Hero />
      </main>
    </section>
  )
}
