import Category from "../components/Category";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Opportunities from "../components/Opportunities";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Opportunities />
      <Category />
    </main>
  );
};

export default Home;
