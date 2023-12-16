import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Opportunities from "../components/Opportunities";
import Category from "../components/Category";
import LatestJobs from "../components/LatestJobs";
import Promotional from "../components/Promotional";
import Review from "../components/Review";
import Footer from "../components/Footer";

const Home = () => {
  const lenis = new Lenis();

  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Opportunities />
      <Category />
      <LatestJobs />
      <Promotional />
      <Review />
      <Footer />
    </main>
  );
};

export default Home;
