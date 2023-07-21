
import CoffeeData from "../../shared/CoffeeData/CoffeeData";
import InstaSection from "../../shared/InstaSection/InstaSection";
import CoffeeCard from "../../shared/cofeeCard/CoffeeCard";

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
    <CoffeeData/>
      <InstaSection/>
     

    </div>
    
  );
};

export default Home;
