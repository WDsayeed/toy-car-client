import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const UpdateToy = () => {

  const updateToy = useLoaderData();

  const {
    _id,
    quantity,
    description,
    price,
  } = updateToy;

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const price = form.price.value;

    const updatedToys = {
      quantity,
      description,
      price,
    };
    console.log(updatedToys);

    fetch(`https://toy-car-server-bay.vercel.app/allToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
                Swal.fire({
                        title: "success!",
                        text: "Toy Updated Successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                      });
        }
      });
  };
  return (
    <form className="md:container mx-auto my-16" onSubmit={handleUpdateToy}>
      <h1 className="text-4xl text-center">
        Update <span className="text-[#96bf0e]">Your</span> Toys
      </h1>
      <div className="card-body grid grid-cols-2 gap-10">
       
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Price:</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="price"
            defaultValue={price}
            className="input input-bordered w-full"
          />
        </div>
        
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Available quantity:</span>
          </label>
          <input
            type="text"
            name="quantity"
            placeholder="quantity"
            defaultValue={quantity}
            className="input input-bordered w-full"
          />
        </div>



        <div className="form-control col-span-2 w-full">
          <label className="label">
            <span className="label-text">Description:</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="detail description"
            defaultValue={description}
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <div className="text-center w-full ">
        <button className="btn btn-wide bg-[#CCD5AE] border-0 hover:text-[#69860c] hover:bg-[#FAEDCD] text-black">
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateToy;
