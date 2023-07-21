import { useLoaderData } from "react-router-dom";

const CoffeeData = () => {
    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div>
            <h3>Coffee data showing here! {coffees.length} </h3>
            
        </div>
    );
};

export default CoffeeData;