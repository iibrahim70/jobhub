import Button from "./Button";

const Promotional = () => {
  return (
    <section className="section-width flex items-center justify-center  flex-col lg:flex-row pb-10 lg:pb-20 gap-10">
      {/* left side */}
      <div className="flex-1 space-y-5">
        <h2 className="text-2xl font-bold">
          Over 10,000 Top <br /> Companies Join with Us
        </h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          molestias vitae eum. Iste fugit illo non quisquam sed! Autem rem vitae
          doloremque ipsam molestiae, tempore cumque qui consequuntur
          voluptates, facere aliquid. Cumque ipsum molestias eum modi nam. Iste
          tenetur ullam laborum iusto iure assumenda, quam quod atque voluptate
          numquam molestiae.
        </p>

        <div className="flex gap-5">
          <Button>Sign UP Free</Button>
          <Button colors="transparent">Watch Video</Button>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">2</div>
    </section>
  );
};

export default Promotional;
