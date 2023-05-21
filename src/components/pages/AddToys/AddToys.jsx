import  { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const AddToys = () => {
  const {user}= useContext(AuthContext)
  useTitle('AddToys')
  const [category, setCategory] = useState([])

  console.log(category)
        const handleAddToys = event=>{
                event.preventDefault()
                const form = event.target 
                const photo = form.photo.value 
                const name = form.name.value 
                const seller = form.sellerName.value 
                const email = form.email.value 
                const rating = form.rating.value 
                const quantity = form.quantity.value 
                const description = form.description.value 
                const category = form.category.value
                const price = form.price.value

                const toys = {photo, name, seller, email, rating, quantity, description, category, price}
                console.log(toys)

                fetch('https://toy-car-server-bay.vercel.app/addToys',{
                  method:'POST',
                  headers:{
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(toys)
                })
                .then(res=> res.json())
                .then(data=> {
                  console.log(data)
                  if(data.insertedId){
                    Swal.fire({
                      title: 'success!',
                      text: 'Toy Added Successfully',
                      icon: 'success',
                      confirmButtonText: 'Cool'
                    })
                  }
                })
        }

        useEffect(()=>{
          fetch('https://toy-car-server-bay.vercel.app/categoryToy')
          .then(res=> res.json())
          .then(data=> setCategory(data))
        },[])

  return (
    <form className="md:container mx-auto my-10" onSubmit={handleAddToys}>
      <h1 className="text-4xl text-center">Add <span className="text-[#96bf0e]">Your</span> Toys</h1>
      <div className="card-body grid grid-cols-2 gap-10">
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Add Picture:</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Picture URL of the toy"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Name:</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Seller Name:</span>
          </label>
          <input
            type="text"
            name="sellerName"
            // placeholder="seller name"
            defaultValue={user?.displayName}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Seller Email:</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="seller email"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Price:</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="price"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Rating:</span>
          </label>
          <input
            type="number"
            name="rating"
            placeholder="rating"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Available quantity:</span>
          </label>
          <input
            type="number"
            name="quantity"
            placeholder="quantity"
            className="input input-bordered w-full"
          />
        </div>
       
       <div  className="form-control">
       <label className="label">
            <span className="label-text font-semibold">Add Category:</span>
          </label>
          <select className="select w-full  select-bordered " name="category">
        
        {
          category.map(cat=> <option
          key={cat._id}
          value={cat.name}
          >{cat.name}</option>)
        }
      </select>
       </div>
       
      <div className="form-control col-span-2 w-full">
          <label className="label">
            <span className="label-text font-semibold">Description:</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="detail description"
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <div className="text-center w-full ">
      <button className="btn btn-wide bg-[#CCD5AE] border-0 hover:text-[#69860c] hover:bg-[#FAEDCD] text-black">add</button>
      </div>
    </form>
  );
};

export default AddToys;
