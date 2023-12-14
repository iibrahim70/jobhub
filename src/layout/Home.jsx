import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
