import { Link, useLoaderData } from "react-router-dom";
import SingleCoffee from "../SingleCoffee/SingleCoffee";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";


const CoffeeData = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);


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
          <SingleCoffee key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></SingleCoffee>
        ))}
      </div>
    </div>
  );
};

export default CoffeeData;
