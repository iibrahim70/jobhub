import Lottie from "lottie-react";
import animation from "../assets/animation.json";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="section-width flex items-center justify-between flex-col lg:flex-row min-h-[calc(100vh-68px)] gap-10 py-10 lg:py-0">
        {/* right side */}
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold text-dark">
            Unlock Your Career Potential
          </h1>
          <p>Discover Opportunities, Build Success – Your Future Begins Here</p>

          <div className="flex items-center justify-center relative">
            <input
              type="text"
              placeholder="Job Title, Keywords or Company name"
              className="w-full rounded-full px-5 py-3 focus:outline-none"
            />
            <div className="absolute right-5">
              <Button size="small">Search</Button>
            </div>
          </div>

          <p>
            Get your dream job.{" "}
            <span className="text-blue-500 font-semibold">
              Sign Up for Free now
            </span>
          </p>
        </div>

        {/* left side */}
        <div className="flex-1">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
