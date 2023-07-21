import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleCoffee = ({ coffee, coffees, setCoffees }) => {
  // console.log(coffees, setCoffees);
  const { _id, name,  photo, quantity, supplier } =
    coffee;

  const handleDelete = (_id) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method:'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success")
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
              
              
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div className="card card-side bg-[color:#F5F4F1] shadow-md mx-auto px-5">
        <figure>
          <img src={photo} className="w-40 h-60 mr-16" alt="Movie" />
        </figure>
        <div className="flex gap-10 items-center align-middle">
          <div className="font-semibold w-56 leading-8">
            <h2>Name: {name}</h2>
            <p>Supplier: {supplier}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="font-bold text-2xl leading-10  w-40">
            <p className="text-sky-500">
              <AiFillEye />
            </p>
            <Link to={`/updateCoffee/${_id}`} className="text-yellow-500 ">
              {" "}
              <AiFillEdit className="my-3" />{" "}
            </Link>
            <button onClick={() => handleDelete(_id)} className="text-red-500">
              {" "}
              <AiFillDelete />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;
