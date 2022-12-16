import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import CardSlider from "../components/CardSlider";
import Navbar from "../components/Navbar";

const Hero = dynamic(() => import("../components/Hero"), {
  ssr: false
});

export default function Home() {
  return (
    <section className="overflow-hidden">
      <Head>
        <Script src="../js/slider.js" />
        </Head>
      <Navbar />
      <main>
        <Hero />
        <CardSlider />
      </main>
    </section>
  )
}
