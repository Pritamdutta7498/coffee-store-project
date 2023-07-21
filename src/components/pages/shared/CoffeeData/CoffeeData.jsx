import { Link, useLoaderData } from "react-router-dom";
import SingleCoffee from "../SingleCoffee/SingleCoffee";
import { BsArrowLeft } from "react-icons/bs";


const CoffeeData = () => {
  const coffees = useLoaderData();

  console.log(coffees);
  return (
    <div>
        <Link
        to="/"
        className="flex align-middle items-center gap-3  my-5  font-semibold text-[color:#374151]"
      >
        <BsArrowLeft /> Back to home
      </Link>
      <div className="grid grid-cols-2 gap-5 my-10">
        {coffees.map((coffee) => (
          <SingleCoffee key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default CoffeeData;
