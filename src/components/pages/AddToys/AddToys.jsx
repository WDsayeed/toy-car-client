import  { useEffect, useState } from "react";
import Swal from 'sweetalert2'

const AddToys = () => {
  const [category, setCategory] = useState([])

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

                const toys = {photo, name, seller, email, rating, quantity, description, category}
                console.log(toys)

                fetch('http://localhost:5000/addToys',{
                  method:'POST',
                  headers:{
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(toys)
                })
                .then(res=> res.json())
                .then(data=> {
                  console.log(data)
                  Swal.fire({
                    title: 'success!',
                    text: 'Toy Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                })
        }

        useEffect(()=>{
          fetch('http://localhost:5000/categoryToy')
          .then(res=> res.json())
          .then(data=> setCategory(data))
        },[])

  return (
    <form className="md:container mx-auto my-10" onSubmit={handleAddToys}>
      <h1 className="text-4xl text-center">Add <span className="text-[#96bf0e]">Your</span> Toys</h1>
      <div className="card-body grid grid-cols-2 gap-10">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Add Picture:</span>
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
            <span className="label-text">Name:</span>
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
            <span className="label-text">Seller Name:</span>
          </label>
          <input
            type="text"
            name="sellerName"
            placeholder="seller name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Seller Email:</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="seller email"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Price:</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="price"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Rating:</span>
          </label>
          <input
            type="text"
            name="rating"
            placeholder="rating"
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
            className="input input-bordered w-full"
          />
        </div>
       
       <div  className="form-control">
       <label className="label">
            <span className="label-text">Add Category:</span>
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
            <span className="label-text">Description:</span>
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
      <button className="btn btn-wide bg-[#CCD5AE] border-0 hover:text-[#69860c] hover:bg-[#FAEDCD]">add</button>
      </div>
    </form>
  );
};

export default AddToys;
