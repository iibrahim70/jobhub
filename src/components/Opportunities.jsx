import { FaMapMarkerAlt } from "react-icons/fa";
import opportunitiesData from "../../public/opportunities.json";

const Opportunities = () => {
  return (
    <section className="section-width py-10 lg:py-20">
      <div>
        <h2 className="text-2xl font-bold text-center pb-10">
          Explore The Opportunities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {opportunitiesData.map((item) => (
            <div key={item.id}>
              <div className="shadow-xl rounded-md p-5 space-y-2">
                <img
                  src={item?.logo}
                  alt={item?.companyName}
                  className="h-20"
                />
                <h3 className="font-semibold">{item?.companyName}</h3>
                <p>{item?.salary}</p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt /> {item?.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;