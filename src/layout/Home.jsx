import Category from "../components/Category";
import Hero from "../components/Hero";
import LatestJobs from "../components/LatestJobs";
import Navbar from "../components/Navbar";
import Opportunities from "../components/Opportunities";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Opportunities />
      <Category />
      <LatestJobs />
    </main>
  );
};

export default Home;
