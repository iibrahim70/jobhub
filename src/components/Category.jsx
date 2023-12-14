import categoryData from "../../public/category.json";

const Category = () => {
  return (
    <section className="section-width pb-10 lg:pb-20">
      <h2 className="text-2xl font-bold text-center pb-10">
        Browse Jobs by Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categoryData.map((item) => (
          <div key={item.id}>
            <div className="shadow-xl rounded-md p-5 space-y-2 flex items-center justify-center flex-col">
              <img src={item?.logo} alt={item?.categoryName} className="h-20" />
              <h3 className="font-semibold">{item?.categoryName}</h3>
              <p>{item?.openPositions} open positions</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
