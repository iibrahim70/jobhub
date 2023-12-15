import opportunitiesData from "../assets/opportunities.json";

const LatestJobs = () => {
  return (
    <section className="section-width pb-10 lg:pb-20">
      {/* title */}
      <div className="flex justify-between flex-col md:flex-row">
        <h2 className="text-2xl font-bold text-center pb-10">LatestJobs</h2>

        <div className="flex justify-between gap-5">
          <p>Hot Jobs</p>
          <p>Popular Jobs</p>
          <p>Recent Jobs</p>
        </div>
      </div>

      {/* details */}
      {opportunitiesData.map((item) => (
        <div key={item.id}>
          <div className="flex items-center justify-between border-b-2 py-5 space-y-2">
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
              <p>{item?.salary}</p>
            </div>

            {/* right column */}
            <div className="flex items-center justify-end w-1/3">
              <p>{item?.location}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LatestJobs;
