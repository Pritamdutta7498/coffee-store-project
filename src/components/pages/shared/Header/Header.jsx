import logo from "../../../../assets/more/24.jpg";
import coffeeCup from "../../../../assets/more/logo1.png";
const Header = () => {
  return (
    <div className="relative">
      <img src={logo} className="h-20 w-full " alt="" />
      
      <div className="">
        <img src={coffeeCup} className="w-10 absolute inset-0 mx-auto top-3 " alt="" />
        <p className=" absolute inset-6 ml-60 text-center text-xl text-gray-50 font-serif ">Espresso Emporium</p>
      </div>
        
     
    </div>
  );
};

export default Header;
