import Button from "./Button";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import categoryData from "../assets/category.json";
import opportunitiesData from "../assets/opportunities.json";

const Footer = () => {
  return (
    <footer className="bg-blueviolet text-gray-400">
      <div className="section-width py-10 lg:py-20">
        {/* first row */}
        <div className="flex items-center justify-between flex-col lg:flex-row gap-10 mb-10">
          <div className="space-y-2 flex-1">
            <h2 className="text-2xl font-bold text-white">
              Put Your Creativity to Virtual Workspace
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              cupiditate omnis? Culpa illo consequuntur nulla, dolore quo magnam
              suscipit similique!
            </p>
          </div>

          <div className="flex-1 flex justify-end gap-5">
            <Button>Sign UP Free</Button>
            <Button colors="secondary">Watch Video</Button>
          </div>
        </div>

        {/* second row */}
        <div className="flex justify-between flex-col lg:flex-row gap-10">
          <div className="flex flex-col flex-1">
            <h3 className="font-semibold mb-5 text-white">
              Browse Top Category
            </h3>

            <div className="flex justify-between flex-col md:flex-row">
              <div className="flex-1">
                {categoryData.slice(0, 10).map((item) => (
                  <div key={item?.id}>
                    <p className=" pb-2">
                      {item?.categoryName} ({item?.openPositions})
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex-1">
                {categoryData.slice(11, 20).map((item) => (
                  <div key={item?.id}>
                    <p className=" pb-2">
                      {item?.categoryName} ({item?.openPositions})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5">Browse Top Category</h3>
            {opportunitiesData.map((item) => (
              <div key={item?.id}>
                <p className=" pb-2">{item?.companyName}</p>
              </div>
            ))}
          </div>
        </div>

        {/* third row */}
        <div className="flex gap-5 mt-10">
          <FaFacebook className="rounded-full h-8 w-8" />
          <FaTwitter className="rounded-full h-8 w-8" />
          <FaSquareInstagram className="rounded-full h-8 w-8" />
          <AiFillGooglePlusCircle className="rounded-full h-8 w-8" />
          <IoLogoYoutube className="rounded-full h-8 w-8" />
        </div>

        {/* fourth row */}
        <div className="mt-10 flex gap-10 text-white">
          <p>Privacy Policy</p>
          <p>Contact Us</p>
          <p>Terms of service</p>
          <p>Sitemap</p>
        </div>

        {/* fifth row */}
        <div className="flex justify-between items-center mt-10">
          <p className="text-center">
            &copy; 2023 Ibrahim Khalil. All rights reserved.
          </p>

          <div className="flex justify-between gap-5">
            <p>English</p>
            <p>United States</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
