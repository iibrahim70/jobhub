const Review = () => {
  return (
    <section className="bg-gray-100">
      <div className="section-width pt-10 lg:pt-20 flex justify-between flex-col lg:flex-row gap-10 relative">
        {/* left side */}
        <div className="flex-1">
          <img
            src="https://i.ibb.co/WsCH9HM/bohemian-man-with-his-arms-crossed-1368-3542-removebg-preview.png"
            alt="Man Image"
            className="lg:h-[488px] lg:absolute -top-20 mx-auto"
          />
        </div>

        {/* right side */}
        <div className="space-y-10 mb-10 flex-1">
          <img
            src="https://monisaver.com/wp-content/uploads/2019/11/transferwise-1.png"
            alt="TransferWise"
            className="h-10"
          />
          <p className="line-clamp-2 italic font-semibold text-gray-400">
            &quot;Working with Checkout.com on cards processing, they&apos;ve
            proven to be flexible, responsive and delivered excellent customer
            service.&quot;{" "}
          </p>

          <div className="space-y-2">
            <h3 className="font-semibold text-dark">IIya Leyrikh</h3>
            <p className="text-gray-400">Head of Product</p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="bg-white lg:w-[50%] py-5 px-10 font-semibold text-dark flex items-center justify-between lg:ml-[50%]">
        <p className="text-blue-500">TransferWise</p>
        <p>Anyvan</p>
        <p>Flyin.com</p>
        <p>iBooking.com</p>
      </div>
    </section>
  );
};

export default Review;
