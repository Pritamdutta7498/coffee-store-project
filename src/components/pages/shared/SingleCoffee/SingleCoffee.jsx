import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import Swal from "sweetalert2";

const SingleCoffee = ({ coffee }) => {
  const { _id, name, price, photo, category, quantity, supplier, detail } =
    coffee;

    const handleDelete = id =>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )

            console.log("delete confirmed!");
            }
          })
    }

  return (
    <div className="">
      <div className="card card-side bg-[color:#F5F4F1] shadow-md mx-auto px-5">
        <figure>
          <img src={photo} className="w-40 h-60 mr-16" alt="Movie" />
        </figure>
        <div className="flex gap-20 items-center align-middle">
          <div className="font-semibold w-40 leading-8">
            <h2>Name: {name}</h2>
            <p>Supplier: {supplier}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="font-bold text-2xl leading-10  w-40">
            <p className="text-sky-500"><AiFillEye/></p>
            <p className="text-yellow-500 my-4"> <AiFillEdit/> </p>
            <button onClick={()=>handleDelete(_id)} className="text-red-500"> <AiFillDelete/> </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;