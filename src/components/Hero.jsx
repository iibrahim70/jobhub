import Lottie from "lottie-react";
import animation from "../assets/animation.json";

const Hero = () => {
  return (
    <section className="bg-gray-200">
      <div className="section-width flex items-center justify-between min-h-[calc(100vh-68px)] gap-10">
        {/* right side */}
        <div className="flex-1 space-y-5">
          <h1 className="text-5xl font-bold text-dark">
            Unlock Your Career Potential
          </h1>
          <p>Discover Opportunities, Build Success – Your Future Begins Here</p>

          <div className="flex items-center justify-center relative">
            <input
              type="text"
              placeholder="Job Title, Keywords or Company name"
              className="w-full rounded-full px-5 py-3"
            />
            <button className="absolute right-5">Search</button>
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
