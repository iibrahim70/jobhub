import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-gray-100">
      <div className="section-width flex justify-between py-5">
        <h2 className="text-xl font-bold  text-dark">JobHub</h2>

        <div className="flex justify-between gap-5">
          <button>Join Now</button>
          <Button colors="transparent" size="small">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
