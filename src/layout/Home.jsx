import Category from "../components/Category";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LatestJobs from "../components/LatestJobs";
import Navbar from "../components/Navbar";
import Opportunities from "../components/Opportunities";
import Review from "../components/Review";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Opportunities />
      <Category />
      <LatestJobs />
      <Review />
      <Footer />
    </main>
  );
};

export default Home;
