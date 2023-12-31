import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const taste = form.taste.value;
    const detail = form.detail.value;
    const category = form.category.value;

    const newCoffee = {
      name,
      supplier,
      category,
      quantity,
      taste,
      detail,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Added Successfully!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
      });
  };
  return (
    <div className="bg-[color:#F4F3F0] py-5 mb-20 ">
      <Link
        to="/"
        className="flex align-middle items-center gap-3  my-5 font-semibold text-[color:#374151]"
      >
        <BsArrowLeft /> Back to home
      </Link>
      <div className="text-center w-3/5 mx-auto">
        <h3 className="text-2xl font-bold my-4 text-orange-700 drop-shadow-lg">
          Add New Coffee
        </h3>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="flex px-10 justify-center  gap-5">
          <div className="w-2/5">
            <div className="form-control  ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered "
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee Category"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="w-2/5">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Enter coffee quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste "
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="detail"
                placeholder="Enter coffee details"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="form-control  w-4/5 px-5 mx-auto">
          <label className="label">
            <span className="label-text">photo Url</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo Url"
            className="input input-bordered"
          />
        </div>
        <input
          type="submit"
          className="btn bg-[color:#DFA878] text-bold hover:bg-[color:#BA704F]  w-[61.3rem] mx-auto flex my-10"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;

/* 
----img link--------
https://i.ibb.co/mHK7phT/4.png
https://i.ibb.co/8g6Tpn7/5.png
https://i.ibb.co/xmWMkwJ/6.png
https://i.ibb.co/VQTwkSV/1.png
https://i.ibb.co/YZ080Y7/2.png
https://i.ibb.co/72Gb7ZX/3.png

*/
