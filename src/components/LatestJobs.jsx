import clsx from "clsx";
import opportunitiesData from "../assets/opportunities.json";

const LatestJobs = () => {
  return (
    <section className="section-width pb-10 lg:pb-20">
      {/* title */}
      <div className="flex justify-between flex-col md:flex-row">
        <h2 className="text-2xl font-bold text-center pb-10">LatestJobs</h2>

        <div className="flex justify-between gap-5">
          <p>Hot Jobs</p>
          <p className="text-blue-500 font-semibold">Popular Jobs</p>
          <p>Recent Jobs</p>
        </div>
      </div>

      {/* details */}
      {opportunitiesData.map((item) => (
        <div key={item.id}>
          <div
            className={clsx(
              "flex items-center justify-between border-b-2 py-5",
              item.id === 1 ? "border-t-2" : ""
            )}
          >
            {/* left column */}
            <div className="flex items-center w-1/3">
              <img
                src={item?.logo}
                alt={item?.companyName}
                className="h-10 w-10 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{item?.companyName}</h3>
                <p>{item?.position}</p>
              </div>
            </div>

            {/* middle column */}
            <div className="flex items-center justify-center w-1/3">
              <p>{item?.workTime}</p>
            </div>

            {/* right column */}
            <div className="flex items-center justify-end w-1/3">
              <p>{item?.location}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="pt-5 flex justify-between">
        <p>
          Showing <span className="text-blue-500 font-semibold">15</span> of{" "}
          <span className="text-blue-500 font-semibold">1250</span> latest jobs
        </p>

        <div className="flex justify-between gap-5">
          <p className="text-blue-500 font-semibold">1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>...</p>
          <p>50</p>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
