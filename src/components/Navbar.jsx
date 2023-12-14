const Navbar = () => {
  return (
    <nav className="flex justify-between pt-5">
      <h2 className="text-xl font-bold  text-dark">JobHub</h2>

      <div className="flex justify-between gap-5">
        <button>Join Now</button>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
