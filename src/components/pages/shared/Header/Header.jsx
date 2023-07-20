
const Header = () => {
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/HB8cgg8/24.jpg"
        className="h-20 w-full "
        alt=""
      />

      <div className="">
        <img
          src="https://i.ibb.co/4gMyVPy/logo1.png"
          className="w-10 absolute inset-0 mx-auto top-3 "
          alt=""
        />
        <p className=" absolute inset-6 ml-60 text-center text-xl text-gray-50 font-serif ">
          Espresso Emporium
        </p>
      </div>
    </div>
  );
};

export default Header;
