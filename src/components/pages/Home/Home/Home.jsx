
import { Link } from "react-router-dom";
import InstaSection from "../../shared/InstaSection/InstaSection";
import CoffeeCard from "../../shared/cofeeCard/CoffeeCard";
import { AiFillEye, AiOutlineCoffee } from "react-icons/ai";

const Home = () => {
  return (
    <div className="relative">
      <div>
        <img src="https://i.ibb.co/nnQZc9C/3.png" alt="" />

        <div className=" text-center text-neutral-content">
          <div className=" w-3/5 absolute inset-2/4 top-52 text-justify ">
            <h1 className="mb-5 text-3xl font-bold">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5 w-3/4">
              It is coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn btn-outline btn-warning rounded-none">
              Learn more
            </button>
           
            
          </div>
        </div>
      </div>
      <CoffeeCard/>

      <div className="text-center font-semibold my-10">
            <p>--- Sip & Savor ---</p>
            <p className=" my-2 font-bold text-2xl drop-shadow-2xl text-orange-700">Our Popular Products</p>
            <Link to="/coffeeData">
            <button className="btn  bg-[color:#FFD6A5] text-bold  hover:bg-[color:#DFA878]">See All Coffee <AiFillEye className="text-xl"/> </button>
            </Link>
            <Link to="/addCoffee">
            <button className="btn  bg-[color:#FFD6A5] text-bold hover:bg-[color:#DFA878]">Add Coffee <AiOutlineCoffee className="text-xl"/> </button>
            </Link>
        </div>

      <InstaSection/>
     

    </div>
    
  );
};

export default Home;
